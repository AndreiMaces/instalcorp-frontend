import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface FreeDayForm {
  title: FormControl<string>;
  startDate: FormControl<Date>;
  endDate: FormControl<Date>;
}

export class FreeDayFormFactory {
  static create(): FormGroup<FreeDayForm> {
    return new FormGroup<FreeDayForm>({
      title: new FormControl<string>('', [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
      startDate: new FormControl<Date>(new Date(), [Validators.required]),
      endDate: new FormControl<Date>(new Date(), [Validators.required]),
    });
  }
}
