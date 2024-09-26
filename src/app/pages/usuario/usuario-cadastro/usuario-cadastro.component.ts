import { CommonModule } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BaseCadastroComponent } from '../../../shared/classes/base-cadastro/base-cadastro.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { SaveActionComponent } from '../../../shared/components/action-bar/save-action/save-action.component';
import { SaveAddActionComponent } from '../../../shared/components/action-bar/save-add-action/save-add-action.component';
import { FormFieldsListComponent } from '../../../shared/components/form-fields-list/form-fields-list.component';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { EFieldType } from '../../../shared/enums/field-type.enum';
import { EPermissoes } from '../../../shared/enums/permissoes.enum';
import { IFormField } from '../../../shared/interfaces/form-field.interface';
import { IUsuario } from '../usuario.interface';
import { UsuarioService } from '../usuario.service';

const actions = [
  BackActionComponent,
  SaveActionComponent,
  SaveAddActionComponent,
];

@Component({
  selector: 'cl-usuario-cadastro',
  standalone: true,
  imports: [
    ...actions,
    CommonModule,
    PageLayoutComponent,
    FormFieldsListComponent,
    MatCheckboxModule,
  ],
  templateUrl: './usuario-cadastro.component.html',
  styleUrl: './usuario-cadastro.component.scss',
})
export class UsuarioCadastroComponent
  extends BaseCadastroComponent<IUsuario>
  implements OnInit
{
  constructor(
    private readonly _usuarioService: UsuarioService,
    protected readonly _injectorLocal: Injector,
  ) {
    super(_usuarioService, _injectorLocal);
  }

  permissoesEnum = EPermissoes;

  cadastroFormGroup = new FormGroup({
    id: new FormControl({ value: null, disabled: true }),
    nome: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    admin: new FormControl(false),
    senha: new FormControl('temporario'),
    ativo: new FormControl(true),
    permissao: new FormArray([]),
  });

  get permissaoFormArray(): FormArray {
    return this.cadastroFormGroup.get('permissao') as FormArray;
  }

  cadastroFields: IFormField[] = [
    {
      type: EFieldType.INPUT,
      label: 'Código',
      formControlName: 'id',
      placeholder: '',
      class: 'grid-1',
    },
    {
      type: EFieldType.INPUT,
      label: 'Nome',
      formControlName: 'nome',
      placeholder: 'Ex.: José',
      class: 'grid-2',
    },
    {
      type: EFieldType.INPUT,
      label: 'Email',
      formControlName: 'email',
      placeholder: 'Ex.: jose@gmail.com',
      class: 'grid-2',
    },
    {
      type: EFieldType.CHECKBOX,
      label: 'Admin',
      formControlName: 'admin',
      placeholder: '',
      class: 'grid-1',
    },
  ];

  permissoes: {
    label: string;
    value: string | EPermissoes;
    checked: string;
  }[] = [];

  override ngOnInit(): void {
    super.ngOnInit();
    const enumArray = Object.values(this.permissoesEnum);
    const valuesArray = enumArray.splice(enumArray.length / 2);
    const keysArray = enumArray.splice(0, enumArray.length);

    valuesArray.forEach((value, index) => {
      const enumLabel: string = keysArray[index] as string;

      const label =
        enumLabel.charAt(0).toUpperCase() + enumLabel.slice(1).toLowerCase();

      const obj = {
        label,
        value: value,
        checked: 'false',
      };

      this.permissoes.push(obj);
    });

    console.log(this.permissoes);
  }
}
