import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { filterSortPageData } from '../../helpers/table.helper';
import { IFindAllResponse } from '../../interfaces/find-all-response.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseResourceService<TData> {
  abstract mockedData: TData[];

  constructor() {}

  async findAll(
    sort: Sort,
    page: PageEvent,
    filter: Record<string, unknown>,
  ): Promise<IFindAllResponse<TData>> {
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

  async create(payload: TData): Promise<TData> {
    return Promise.resolve({ ...payload, id: 1 });
  }
}
