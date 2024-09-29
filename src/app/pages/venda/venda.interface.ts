export interface IVenda {
  id: number;
  idPessoa: number;
  idUsuarioLancamento: number;
  valorTotal: number;
  dataHora: Date | null;
  formaPagamento: number;
  vendaitem: IVendaItem[];
}

export interface IVendaItem {
  id: number;
  idVenda: number;
  idProduto: number;
  quantidade: number;
  precoVenda: Date | null;
  valorTotal: number;
}
