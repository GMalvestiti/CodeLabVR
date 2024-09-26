import { EMenuPermissao } from "../enums/menu-permissao.enum";

export interface IMenuPermissao {
    label: string;
    icon: string;
    path: string;
    modulo: EMenuPermissao;
}