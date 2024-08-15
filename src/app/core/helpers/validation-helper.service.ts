import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ValidationMessageList } from '../constants/validationMessageList.const';

@Injectable({
  providedIn: 'root',
})
export class ValidationHelperService {
  private static _validationMessages = ValidationMessageList;

  constructor() {}

  public static getErrorMessage(control: AbstractControl): string {
    if (control.errors) {
      for (const errorName in control.errors) {
        if (control.errors.hasOwnProperty(errorName)) {
          return ValidationHelperService._validationMessages.find((err) => err.type === errorName)?.message;
        }
      }
    }
    return null;
  }

  public static isInvalid(control: AbstractControl): boolean {
    return control.invalid && control.touched;
  }
}
