import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EProjectStatus } from '../../shared/enums/EProjectStatus';

export interface ProjectForm {
  title: FormControl<string>;
  color: FormControl<string>;
  description: FormControl<string>;
  startHour: FormControl<Date>;
  endHour: FormControl<Date>;
  startDate: FormControl<Date>;
  endDate: FormControl<Date>;
  status: FormControl<EProjectStatus>;
  typeId: FormControl<number>;
  importance: FormControl<number>;
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
      status: new FormControl<EProjectStatus>(EProjectStatus.NOT_STARTED),
      typeId: new FormControl<number>(null, [Validators.required]),
      importance: new FormControl<number>(0, [Validators.required]),
    });
  }
}
