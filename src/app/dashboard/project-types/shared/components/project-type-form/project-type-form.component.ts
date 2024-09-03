import { Component, Input, OnInit, output } from '@angular/core';
import { ProjectTypeFormFactory } from './ProjectTypeFormFactory';
import { IProjectType } from '../../../../../core/models/IProjectType';
import { ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ValidationHelperService } from '../../../../../core/helpers/validation-helper.service';
import { NgIf } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButton } from '@angular/material/button';
import { UploadMediaSingleComponent } from '../../../../../shared/components/upload-media-single/upload-media-single.component';

@Component({
  selector: 'app-project-type-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatInput, MatError, MatLabel, NgIf, MatButton, UploadMediaSingleComponent],
  templateUrl: './project-type-form.component.html',
  styleUrl: './project-type-form.component.scss',
})
export class ProjectTypeFormComponent implements OnInit {
  projectTypeForm = ProjectTypeFormFactory.create();
  @Input() projectType: IProjectType;
  _submit = output<Partial<IProjectType>>();
  close = output<void>();

  constructor(private snackBarService: MatSnackBar) {}

  ngOnInit(): void {
    if (this.projectType) {
      this.prefillForm();
    }
  }

  prefillForm(): void {
    this.projectTypeForm.patchValue(this.projectType);
  }

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
