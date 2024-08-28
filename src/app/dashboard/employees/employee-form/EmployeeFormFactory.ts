import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface EmployeeForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  phone: FormControl<string>;
}

export class EmployeeFormFactory {
  static create(): FormGroup<EmployeeForm> {
    return new FormGroup<EmployeeForm>({
      firstName: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      lastName: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      phone: new FormControl<string>('', [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^\\d+$')]),
    });
  }
}
