import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { debounceTime, Subject, takeUntil, tap } from 'rxjs';
import { AddActionComponent } from '../../../shared/components/action-bar/add-action/add-action.component';
import { BackActionComponent } from '../../../shared/components/action-bar/back-action/back-action.component';
import { PageLayoutComponent } from '../../../shared/components/page-layout/page-layout.component';
import { getPaginatorIntl } from '../../../shared/helpers/paginator.intl.helper';
import { BoolToTextPipe } from '../../../shared/pipes/bool-to-text.pipe';
import { FormatIdPipe } from '../../../shared/pipes/format-id.pipe';
import { IUsuario } from '../usuario.interface';
import { UsuarioService } from '../usuario.service';

const actions = [BackActionComponent, AddActionComponent];
const table = [MatTableModule, MatSortModule, MatPaginatorModule];
const pipes = [BoolToTextPipe, FormatIdPipe];
const form = [MatInputModule, MatFormFieldModule];
const imports = [
  ...actions,
  ...table,
  ...pipes,
  ...form,
  ReactiveFormsModule,
  FormsModule,
  CommonModule,
  PageLayoutComponent,
];

@Component({
  selector: 'cl-usuario-consulta',
  standalone: true,
  imports,
  templateUrl: './usuario-consulta.component.html',
  styleUrl: './usuario-consulta.component.scss',
})
export class UsuarioConsultaComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild(MatPaginator) paginatorEl!: MatPaginator;

  dataSource = new MatTableDataSource<IUsuario>([]);
  displayedColumns: string[] = ['id', 'nome', 'email', 'admin'];
  sort: Sort = { active: 'id', direction: 'asc' };
  page: PageEvent = { pageIndex: 0, pageSize: 5, length: 0 };

  filterFormGroup = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(null),
    email: new FormControl(null),
    admin: new FormControl(0),
  });

  private unsubscribe$ = new Subject<void>();

  get filter() {
    return this.filterFormGroup.getRawValue();
  }

  constructor(private _service: UsuarioService) {}

  ngOnInit(): void {
    this.search();
    this.watchForm();
  }

  ngAfterViewInit(): void {
    this.paginatorEl._intl = getPaginatorIntl(this.paginatorEl._intl);
  }

  search(): void {
    this._service
      .findAll(this.sort, this.page, this.filter)
      .then((response) => {
        this.dataSource.data = response.data;
        this.paginatorEl.length = response.count;
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

  private watchForm(): void {
    this.filterFormGroup.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(1000),
        tap(() => this.search()),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
