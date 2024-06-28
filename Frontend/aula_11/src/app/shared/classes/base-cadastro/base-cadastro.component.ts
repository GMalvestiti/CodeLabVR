import { Component, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFormField } from '../../interfaces/form-field.interface';
import { BaseResourceService } from '../base-resource/base-resource.service';

@Component({ template: '' })
export abstract class BaseCadastroComponent<TData extends { id: number }> {
  abstract cadastroFormGroup: FormGroup;
  abstract cadastroFields: IFormField[];

  get formValues() {
    return this.cadastroFormGroup.getRawValue() as unknown as TData;
  }

  private readonly _router!: Router;
  private readonly _route!: ActivatedRoute;

  constructor(
    private readonly _service: BaseResourceService<TData>,
    protected readonly _injector: Injector,
  ) {
    this._router = this._injector.get(Router);
    this._route = this._injector.get(ActivatedRoute);
  }

  save(addNew: boolean = false): void {
    this.cadastroFormGroup.markAllAsTouched();

    if (this.cadastroFormGroup.invalid) {
      return;
    }

    this._service.create(this.formValues).then(({ id }) => {
      if (addNew) {
        this.cadastroFormGroup.reset();
      } else {
        this._router.navigate([`../editar/${id}`], {
          relativeTo: this._route,
        });
      }
    });
  }
}
