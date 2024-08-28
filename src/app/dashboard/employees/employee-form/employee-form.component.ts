import { Component, Input, output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IEmployee } from '../../../core/models/IEmployee';
import { ValidationHelperService } from '../../../core/helpers/validation-helper.service';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { EmployeeFormFactory } from './EmployeeFormFactory';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [MatFormField, ReactiveFormsModule, MatButton, MatInput, MatError, MatLabel, NgIf],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent {
  employeeForm = EmployeeFormFactory.create();
  @Input() employee: IEmployee;
  _submit = output<Partial<IEmployee>>();
  close = output<void>();

  constructor(private snackBarService: MatSnackBar) {}

  ngOnInit(): void {
    if (this.employee) {
      this.prefillForm();
    }
  }

  prefillForm(): void {
    this.employeeForm.patchValue(this.employee);
  }

  onSubmit() {
    this.employeeForm.markAllAsTouched();
    if (this.employeeForm.valid) {
      this._submit.emit(this.createPayload());
    } else {
      this.snackBarService.open('Informațiile introduse sunt incorecte', 'Close', {
        duration: 3000,
      });
    }
  }

  createPayload(): Partial<IEmployee> {
    const value = this.employeeForm.value;
    if (value.phone.length === 0) delete value.phone;
    return value;
  }

  protected readonly ValidationHelperService = ValidationHelperService;
}
