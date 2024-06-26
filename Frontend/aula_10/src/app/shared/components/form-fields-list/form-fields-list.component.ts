import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { debounceTime, Subject, takeUntil, tap } from 'rxjs';
import { EFieldType } from '../../enums/field-type.enum';
import { IFormField } from '../../interfaces/form-field.interface';

const form = [ReactiveFormsModule, FormsModule];
const components = [MatInputModule, MatSelectModule, MatFormFieldModule];

@Component({
  selector: 'cl-form-fields-list',
  standalone: true,
  imports: [...form, ...components, CommonModule],
  templateUrl: './form-fields-list.component.html',
  styleUrl: './form-fields-list.component.scss',
})
export class FormFieldsListComponent implements OnInit, OnDestroy {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) fields!: IFormField[];
  @Output() changeEmitter = new EventEmitter<void>();

  readonly typeInput = EFieldType.INPUT;
  readonly typeSelect = EFieldType.SELECT;

  private readonly unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.watchForm();
  }

  private watchForm(): void {
    this.form.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(1000),
        tap(() => this.changeEmitter.emit()),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
