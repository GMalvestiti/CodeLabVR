import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';
import { ConfirmDialogComponent } from '../../dialogs/confirm-dialog/confirm-dialog.component';
import { EMensagem } from '../../enums/mensagem.enum';
import { ESnackbarType } from '../../enums/snackbar-type.enum';
import {
  CanComponentDeactivate,
  TCanDeactivate,
} from '../../guards/pending-changes.guard';
import { IFormField } from '../../interfaces/form-field.interface';
import { ISnackBarData } from '../../interfaces/snackbar-data.interface';
import { BaseResourceService } from '../base-resource/base-resource.service';

@Component({ template: '' })
export abstract class BaseCadastroComponent<TData extends { id: number }>
  implements OnInit, CanComponentDeactivate
{
  abstract cadastroFormGroup: FormGroup;
  abstract cadastroFields: IFormField[];

  get formValues() {
    return this.cadastroFormGroup.getRawValue() as unknown as TData;
  }

  private readonly _router!: Router;
  private readonly _route!: ActivatedRoute;
  private readonly _dialog!: MatDialog;
  private readonly _snackBar!: MatSnackBar;

  constructor(
    private readonly _service: BaseResourceService<TData>,
    protected readonly _injector: Injector,
  ) {
    this._router = this._injector.get(Router);
    this._route = this._injector.get(ActivatedRoute);
    this._dialog = this._injector.get(MatDialog);
    this._snackBar = this._injector.get(MatSnackBar);
  }

  idEdit!: number;

  ngOnInit(): void {
    this.handleEdit();
  }

  protected handleEdit(): void {
    const id = this._route.snapshot.params['id'];

    if (!id) {
      return;
    }

    if (isNaN(Number(id))) {
      return this.navigateToCadastro();
    }

    this.idEdit = Number(id);

    this._service.findOneById(this.idEdit).subscribe((response) => {
      if (!response.data) {
        this.openSnackBar({
          message: EMensagem.REGISTRO_NAO_ENCONTRADO,
          buttonText: EMensagem.FECHAR,
          type: ESnackbarType.warning,
        });
        return this.navigateToCadastro();
      }

      this.patchFormForEdit(response.data);
    });
  }

  protected buildPatchValuesFormEdit(payload: TData): TData {
    return payload;
  }

  protected patchFormForEdit(payload: TData): void {
    const values = this.buildPatchValuesFormEdit(payload);
    this.cadastroFormGroup.patchValue(values);
  }

  private navigateToCadastro(): void {
    this._router.navigate([`../../cadastro`], {
      relativeTo: this._route,
    });
  }

  save(addNew: boolean = false): void {
    this.cadastroFormGroup.markAllAsTouched();

    if (!this.cadastroFormGroup.valid) {
      this.openSnackBar({
        message: EMensagem.CAMPOS_NAO_PREENCHIDOS,
        buttonText: EMensagem.FECHAR,
        type: ESnackbarType.warning,
      });
      return;
    }

    this.idEdit ? this.saveEditar(addNew) : this.saveCadastro(addNew);
  }

  protected saveEditar(addNew: boolean): void {
    this._service
      .updateById(this.idEdit, this.formValues)
      .subscribe((response) => {
        this.openSnackBar({
          message: response.message,
          buttonText: EMensagem.FECHAR,
          type: ESnackbarType.success,
        });

        if (addNew) {
          this.cadastroFormGroup.markAsUntouched();
          this.navigateToCadastro();
        } else {
          this.actionsAfterUpdate(response.data);
        }
      });
  }

  protected actionsAfterUpdate(data: TData): void {
    this.cadastroFormGroup.markAsUntouched();
  }

  protected saveCadastro(addNew: boolean): void {
    this._service.create(this.formValues).subscribe((response) => {
      this.openSnackBar({
        message: response.message,
        buttonText: EMensagem.FECHAR,
        type: ESnackbarType.success,
      });

      const id: number = response.data.id;

      if (addNew) {
        this.cadastroFormGroup.reset();
      } else {
        this.cadastroFormGroup.markAsUntouched();
        this._router.navigate([`../editar/${id}`], {
          relativeTo: this._route,
        });
      }
    });
  }

  canDeactivate(): TCanDeactivate {
    if (!this.cadastroFormGroup.touched) return true;

    const ref = this._dialog.open(ConfirmDialogComponent, {
      disableClose: true,
      data: {
        titleText: 'Ações Pendentes',
        contentText:
          'Você possui alterações que não foram salvas, deseja mesmo sair da página?',
      },
    });

    return ref.afterClosed();
  }

  protected openSnackBar(data: ISnackBarData) {
    this._snackBar.openFromComponent<SnackbarComponent, ISnackBarData>(
      SnackbarComponent,
      {
        duration: 5 * 1000,
        data,
        panelClass: data.type,
        horizontalPosition: 'end',
      },
    );
  }
}
