import { Component, output } from '@angular/core';
import { ProjectTypeFormFactory } from './ProjectTypeFormFactory';
import { IIssueType } from '../../../core/models/IIssueType';
import { ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ValidationHelperService } from '../../../core/helpers/validation-helper.service';
import { NgIf } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-project-type-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInput, MatError, MatLabel, NgIf, MatButton],
  templateUrl: './project-type-form.component.html',
  styleUrl: './project-type-form.component.scss',
})
export class ProjectTypeFormComponent {
  projectTypeForm = ProjectTypeFormFactory.create();
  _submit = output<Partial<IIssueType>>();
  close = output<void>();

  constructor(private snackBarService: MatSnackBar) {}

  onSubmit() {
    this.projectTypeForm.markAllAsTouched();
    if (this.projectTypeForm.valid) {
      this._submit.emit(this.projectTypeForm.value);
    } else {
      this.snackBarService.open('Informațiile introduse sunt incorecte', 'Close', {
        duration: 3000,
      });
    }
  }

  protected readonly ValidationHelperService = ValidationHelperService;
}
