import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IEmployee } from '../../../../../core/models/IEmployee';

export interface IEmployeeIssueForm {
  id: FormControl<number>;
  employee: FormControl<Partial<IEmployee>>;
  startDate: FormControl<Date>;
  endDate: FormControl<Date>;
}

export class EmployeeIssueFormFactory {
  static create(): FormGroup<IEmployeeIssueForm> {
    return new FormGroup<IEmployeeIssueForm>({
      id: new FormControl<number>(null),
      employee: new FormControl<Partial<IEmployee>>(null, [Validators.required]),
      startDate: new FormControl<Date>(new Date(), [Validators.required]),
      endDate: new FormControl<Date>(new Date(), [Validators.required]),
    });
  }
}
