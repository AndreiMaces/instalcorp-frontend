import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface ProjectTypeForm {
  title: FormControl<string>;
  color: FormControl<string>;
  description: FormControl<string>;
}

export class ProjectTypeFormFactory {
  static create(): FormGroup<ProjectTypeForm> {
    return new FormGroup<ProjectTypeForm>({
      title: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      color: new FormControl<string>('#ffffff', [Validators.minLength(1), Validators.maxLength(255)]),
      description: new FormControl<string>('', [Validators.maxLength(4056)]),
    });
  }
}
