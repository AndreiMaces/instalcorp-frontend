import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IEmployee } from '../../../core/models/IEmployee';
import { IProject } from '../../../core/models/IProject';

export interface TaskForm {
  employee: FormControl<IEmployee>;
  project: FormControl<IProject>;
  startDate: FormControl<Date>;
  endDate: FormControl<Date>;
}

export class TaskFormFactory {
  static create(): FormGroup<TaskForm> {
    return new FormGroup<TaskForm>({
      employee: new FormControl<IEmployee>(null, [Validators.required]),
      project: new FormControl<IProject>(null, [Validators.required]),
      startDate: new FormControl<Date>(new Date(), [Validators.required]),
      endDate: new FormControl<Date>(new Date(), [Validators.required]),
    });
  }
}
