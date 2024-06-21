import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { filterSortPageData } from '../../shared/helpers/table.helper';
import { IFindAllResponse } from '../../shared/interfaces/find-all-response.interface';
import { IUsuario } from './usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
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

  async findAll(
    sort: Sort,
    page: PageEvent,
    filter: Record<string, unknown>,
  ): Promise<IFindAllResponse<IUsuario>> {
    const sortedFilteredData = filterSortPageData(
      this.mockedData,
      sort,
      page,
      filter,
    );

    return Promise.resolve({
      message: '',
      data: sortedFilteredData,
      count: this.mockedData.length,
    });
  }
}
