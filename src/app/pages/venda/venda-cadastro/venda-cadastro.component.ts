import { CommonModule } from '@angular/common';
import { Component, Injector } from '@angular/core';
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
import { IFormField, ILabelValue } from '../../../shared/interfaces/form-field.interface';
import { VendaService } from '../venda.service';
import { IVenda, IVendaItem } from '../venda.interface';
import { EFormaPagamento, EFormaPagamentoDescricao } from '../../../shared/enums/forma-pagamento.enum';
import { LoginService } from '../../../login/login.service';
import { ERegex } from '../../../shared/enums/regex.enum';

const actions = [
  BackActionComponent,
  SaveActionComponent,
  SaveAddActionComponent,
];

@Component({
  selector: 'cl-template-cadastro',
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
  templateUrl: './venda-cadastro.component.html',
  styleUrl: './venda-cadastro.component.scss',
})
export class VendaCadastroComponent extends BaseCadastroComponent<IVenda> {
  constructor(
    private readonly _vendaService : VendaService,
    private readonly _loginService: LoginService,
    protected override readonly _injector: Injector,
  ) {
    super(_vendaService, _injector);
  }

  cadastroFormGroup = new FormGroup({
    id: new FormControl<number | null>({ value: null, disabled: true }),
    idPessoa: new FormControl<number | null>(null, [Validators.required, Validators.pattern(ERegex.INTEIRO_POSITIVO)]),
    idUsuarioLancamento: new FormControl<number | null>(this._loginService.currentUser!.id, [Validators.required,Validators.pattern(ERegex.INTEIRO_POSITIVO)]),
    valorTotal: new FormControl<number | null>(null, [Validators.required, Validators.pattern(ERegex.NUMERICO)]),
    formaPagamento: new FormControl<number | null>(EFormaPagamento.DINHEIRO, [Validators.required, Validators.pattern(ERegex.INTEIRO_POSITIVO)]),
    dataHora: new FormControl<Date | null>(null),
    vendaitem: new FormControl<IVendaItem[]>([]),
  });

  formaPagamentoOptions: ILabelValue[] = [
    {
      label: EFormaPagamentoDescricao.DINHEIRO,
      value: EFormaPagamento.DINHEIRO,
    },
    {
      label: EFormaPagamentoDescricao.CARTAO_DEBITO,
      value: EFormaPagamento.CARTAO_DEBITO,
    },
    {
      label: EFormaPagamentoDescricao.CARTAO_CREDITO,
      value: EFormaPagamento.CARTAO_CREDITO,
    },
    {
      label: EFormaPagamentoDescricao.PIX,
      value: EFormaPagamento.PIX,
    },
    {
      label: EFormaPagamentoDescricao.BOLETO,
      value: EFormaPagamento.BOLETO,
    },
    {
      label: EFormaPagamentoDescricao.CHEQUE,
      value: EFormaPagamento.CHEQUE,
    },
    {
      label: EFormaPagamentoDescricao.TRANSFERENCIA,
      value: EFormaPagamento.TRANSFERENCIA,
    },
    {
      label: EFormaPagamentoDescricao.OUTROS,
      value: EFormaPagamento.OUTROS,
    },
  ];

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
      label: 'Pessoa',
      formControlName: 'id',
      placeholder: 'Ex.: 10',
      class: 'grid-1',
    },
    {
      type: EFieldType.INPUT,
      label: 'Valor Total',
      formControlName: 'valorTotal',
      placeholder: 'Ex.: 10.00',
      class: 'grid-2',
    },
    {
      type: EFieldType.SELECT,
      label: 'Forma de Pagamento',
      formControlName: 'formaPagamento',
      placeholder: 'Ex.: Dinheiro',
      class: 'grid-2',
      options: Promise.resolve(this.formaPagamentoOptions),
    },
  ];
}
