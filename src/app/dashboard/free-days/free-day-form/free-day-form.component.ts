import { Component, Input, output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatError, MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { ValidationHelperService } from '../../../core/helpers/validation-helper.service';
import { FreeDayFormFactory } from './EmployeeFormFactory';
import { IFreeDay } from '../../../core/models/IFreeDay';
import { MatDatepickerToggle, MatDateRangeInput, MatDateRangePicker, MatEndDate, MatStartDate } from '@angular/material/datepicker';

@Component({
  selector: 'app-free-day-form',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatButton,
    MatInput,
    MatError,
    MatLabel,
    NgIf,
    MatDateRangeInput,
    MatDateRangePicker,
    MatDatepickerToggle,
    MatEndDate,
    MatStartDate,
    MatSuffix,
  ],
  templateUrl: './free-day-form.component.html',
  styleUrl: './free-day-form.component.scss',
})
export class FreeDayFormComponent {
  freeDayForm = FreeDayFormFactory.create();
  @Input() freeDay: IFreeDay;
  _submit = output<Partial<IFreeDay>>();
  close = output<void>();

  constructor(private snackBarService: MatSnackBar) {}

  ngOnInit(): void {
    if (this.freeDay) {
      this.prefillForm();
    }
  }

  prefillForm(): void {
    this.freeDayForm.patchValue(this.freeDay);
  }

  onSubmit() {
    this.freeDayForm.markAllAsTouched();
    if (this.freeDayForm.valid) {
      this._submit.emit(this.createPayload());
    } else {
      this.snackBarService.open('Informațiile introduse sunt incorecte', 'Close', {
        duration: 3000,
      });
    }
  }

  createPayload(): Partial<IFreeDay> {
    return this.freeDayForm.value;
  }

  protected readonly ValidationHelperService = ValidationHelperService;
}
