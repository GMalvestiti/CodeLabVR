import { CommonModule } from '@angular/common';
import { Component, Injector, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BaseCadastroComponent } from '../../../shared/classes/base-cadastro/base-cadastro.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { SaveActionComponent } from '../../../shared/components/action-bar/save-action/save-action.component';
import { SaveAddActionComponent } from '../../../shared/components/action-bar/save-add-action/save-add-action.component';
import { FormFieldsListComponent } from '../../../shared/components/form-fields-list/form-fields-list.component';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { EFieldType } from '../../../shared/enums/field-type.enum';
import { IFormField } from '../../../shared/interfaces/form-field.interface';
import { RecebimentoService } from '../recebimento.service';
import { IContaReceber, IContaReceberBaixa } from '../recebimento.interface';
import { LoginService } from '../../../login/login.service';
import { ERegex } from '../../../shared/enums/regex.enum';

const actions = [
  BackActionComponent,
  SaveActionComponent,
  SaveAddActionComponent,
];

@Component({
  selector: 'cl-recebimento-cadastro',
  standalone: true,
  imports: [
    ...actions,
    CommonModule,
    PageLayoutComponent,
    FormsModule,
    FormFieldsListComponent,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  templateUrl: './recebimento-cadastro.component.html',
  styleUrl: './recebimento-cadastro.component.scss',
})
export class RecebimentoCadastroComponent extends BaseCadastroComponent<IContaReceber> implements OnInit {
  constructor(
    private readonly _recebimentoService: RecebimentoService,
    private readonly _loginService: LoginService,
    protected override readonly _injector: Injector,
  ) {
    super(_recebimentoService, _injector);
  }

  cadastroFormGroup = new FormGroup({
    id: new FormControl<number | null>({ value: null, disabled: true }),
    idPessoa: new FormControl<number | null>(null, [Validators.required, Validators.pattern(ERegex.INTEIRO_POSITIVO)]),
    pessoa: new FormControl<string | null>(null, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    idUsuarioLancamento: new FormControl<number | null>(null, [Validators.required]),
    valorTotal: new FormControl<number | null>(null, [Validators.required, Validators.pattern(ERegex.NUMERICO)]),
    dataHora: new FormControl<Date | null>(null),
    pago: new FormControl<boolean>(false),
    baixa: new FormControl<IContaReceberBaixa[]>([]),
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
      label: 'Código de Pessoa',
      formControlName: 'idPessoa',
      placeholder: 'Ex.: 1',
      class: 'grid-2',
    },
    {
      type: EFieldType.INPUT,
      label: 'Nome de Pessoa',
      formControlName: 'pessoa',
      placeholder: 'Ex.: João',
      class: 'grid-2',
    },
    {
      type: EFieldType.INPUT,
      label: 'Valor Total',
      formControlName: 'valorTotal',
      placeholder: 'Ex.: 10.00',
      class: 'grid-2',
    },
    {
      type: EFieldType.CHECKBOX,
      label: 'Pago',
      formControlName: 'pago',
      placeholder: '',
      class: 'grid-1',
    },
  ];

  override ngOnInit(): void {
    this.cadastroFormGroup.patchValue({
      idUsuarioLancamento: this._loginService.currentUser!.id
    });
    this.handleEdit();
  }
}
