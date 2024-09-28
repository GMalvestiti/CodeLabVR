export enum ERegex {
  NUMERICO = '^[0-9]+(\\.[0-9]{1,3})?$',
  CODIGO_BARRAS = '^[0-9]{13}$',
  TELEFONE = '^[0-9 ]{12,14}$',
  INTEIRO_POSITIVO = '^[0-9]+$'
}
