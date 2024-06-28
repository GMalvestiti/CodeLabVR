import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { getPaginatorIntl } from '../../helpers/paginator.intl.helper';
import { IFormField } from '../../interfaces/form-field.interface';
import { BaseResourceService } from '../base-resource/base-resource.service';

@Component({ template: '' })
export abstract class BaseConsultaComponent<TData>
  implements OnInit, AfterViewInit
{
  @ViewChild(MatPaginator) paginatorEl!: MatPaginator;

  abstract displayedColumns: string[];
  abstract filterFormGroup: FormGroup;
  abstract filterFields: IFormField[];

  dataSource = new MatTableDataSource<TData>([]);
  sort: Sort = { active: 'id', direction: 'asc' };
  page: PageEvent = { pageIndex: 0, pageSize: 5, length: 0 };

  get filterValues() {
    return this.filterFormGroup.getRawValue();
  }

  loading = false;

  constructor(private readonly _service: BaseResourceService<TData>) {}

  ngOnInit(): void {
    this.search();
  }

  ngAfterViewInit(): void {
    this.paginatorEl._intl = getPaginatorIntl(this.paginatorEl._intl);
  }

  search(): void {
    this.loading = true;

    this._service
      .findAll(this.sort, this.page, this.filterValues)
      .then((response) => {
        this.dataSource.data = response.data;
        this.paginatorEl.length = response.count;
      })
      .finally(() => {
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      });
  }

  applySort(sort: Sort): void {
    this.sort = sort;
    this.search();
  }

  applyPage(page: PageEvent): void {
    this.page = page;
    this.search();
  }
}
