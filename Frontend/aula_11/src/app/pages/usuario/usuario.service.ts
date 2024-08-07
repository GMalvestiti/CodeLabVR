import { Injectable } from '@angular/core';
import { BaseResourceService } from '../../shared/classes/base-resource/base-resource.service';
import { IUsuario } from './usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService extends BaseResourceService<IUsuario> {
  mockedData: IUsuario[] = [
    {
      id: 1,
      nome: 'Henrique',
      email: 'henrique@gmail.com',
      admin: true,
      ativo: true,
    },
    {
      id: 2,
      nome: 'Jose',
      email: 'jose@gmail.com',
      admin: true,
      ativo: true,
    },
    {
      id: 3,
      nome: 'Maria',
      email: 'Maria@gmail.com',
      admin: false,
      ativo: true,
    },
    {
      id: 4,
      nome: 'Gustavo',
      email: 'Gustavo@gmail.com',
      admin: true,
      ativo: true,
    },
    {
      id: 5,
      nome: 'Emerson',
      email: 'Emerson@gmail.com',
      admin: false,
      ativo: true,
    },
    {
      id: 6,
      nome: 'Wendell',
      email: 'Wendell@gmail.com',
      admin: true,
      ativo: true,
    },
    {
      id: 7,
      nome: 'Carlos',
      email: 'Carlos@gmail.com',
      admin: false,
      ativo: true,
    },
    {
      id: 8,
      nome: 'Allan',
      email: 'Allan@gmail.com',
      admin: false,
      ativo: true,
    },
    {
      id: 9,
      nome: 'Savio',
      email: 'Savio@gmail.com',
      admin: true,
      ativo: true,
    },
    {
      id: 10,
      nome: 'Leandro',
      email: 'Leandro@gmail.com',
      admin: true,
      ativo: true,
    },
    {
      id: 11,
      nome: 'Gabriel',
      email: 'Gabriel@gmail.com',
      admin: false,
      ativo: true,
    },
    {
      id: 12,
      nome: 'Andre',
      email: 'Andre@gmail.com',
      admin: false,
      ativo: true,
    },
  ];
}
