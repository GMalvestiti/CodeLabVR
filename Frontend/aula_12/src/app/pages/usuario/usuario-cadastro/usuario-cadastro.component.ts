import { Component, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseCadastroComponent } from '../../../shared/classes/base-cadastro/base-cadastro.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { SaveActionComponent } from '../../../shared/components/action-bar/save-action/save-action.component';
import { SaveAddActionComponent } from '../../../shared/components/action-bar/save-add-action/save-add-action.component';
import { FormFieldsListComponent } from '../../../shared/components/form-fields-list/form-fields-list.component';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { EFieldType } from '../../../shared/enums/field-type.enum';
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
  imports: [...actions, PageLayoutComponent, FormFieldsListComponent],
  templateUrl: './usuario-cadastro.component.html',
  styleUrl: './usuario-cadastro.component.scss',
})
export class UsuarioCadastroComponent extends BaseCadastroComponent<IUsuario> {
  cadastroFormGroup = new FormGroup({
    id: new FormControl({ value: null, disabled: true }),
    nome: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    admin: new FormControl(false),
  });

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

  constructor(
    private readonly _usuarioService: UsuarioService,
    protected readonly _injectorLocal: Injector,
  ) {
    super(_usuarioService, _injectorLocal);
  }
}
