import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EStatus } from '../../shared/enums/EStatus';
import { IEmployeeIssueForm } from './employee-project-form/EmployeeIssueFormFactory';

export interface ProjectForm {
  title: FormControl<string>;
  color: FormControl<string>;
  description: FormControl<string>;
  startHour: FormControl<Date>;
  endHour: FormControl<Date>;
  startDate: FormControl<Date>;
  endDate: FormControl<Date>;
  status: FormControl<EStatus>;
  typeId: FormControl<number>;
  employeeIssues?: FormArray<FormGroup<IEmployeeIssueForm>>;
  importance: FormControl<number>;
  media: FormArray<FormControl<string>>;
}

export class ProjectFormFactory {
  static create(): FormGroup<ProjectForm> {
    return new FormGroup<ProjectForm>({
      title: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      color: new FormControl<string>('#ffffff', [Validators.minLength(1), Validators.maxLength(255)]),
      description: new FormControl<string>('', [Validators.maxLength(4056)]),
      startHour: new FormControl<Date>(new Date()),
      endHour: new FormControl<Date>(new Date()),
      startDate: new FormControl<Date>(new Date()),
      endDate: new FormControl<Date>(new Date()),
      status: new FormControl<EStatus>(EStatus.NOT_STARTED),
      typeId: new FormControl<number>(null, [Validators.required]),
      importance: new FormControl<number>(0, [Validators.required]),
      media: new FormArray<FormControl<string>>([]),
    });
  }
}
