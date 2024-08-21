import { Component, Input, output } from '@angular/core';
import { ProjectFormFactory } from './ProjectFormFactory';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { ValidationHelperService } from '../../../../core/helpers/validation-helper.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IIssueType } from '../../../../core/models/IIssueType';
import { MatOption, MatSelect } from '@angular/material/select';
import { EProjectStatus } from '../../shared/enums/EProjectStatus';
import { MatDatepickerModule, MatDatepickerToggle, MatDateRangeInput, MatDateRangePicker } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-project-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
    MatButton,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    MatDateRangeInput,
    MatDatepickerToggle,
    MatDateRangePicker,
    MatHint,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIcon,
  ],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss',
})
export class ProjectFormComponent {
  _submit = output<Partial<IIssueType>>();
  close = output();
  projectForm = ProjectFormFactory.create();
  @Input() project: Partial<IIssueType>;

  constructor(private snackBarService: MatSnackBar) {}

  ngOnInit(): void {
    if (this.project) {
      this.prefillForm();
    }
  }

  prefillForm(): void {
    this.projectForm.patchValue(this.project);
  }

  onSubmit() {
    this.projectForm.markAllAsTouched();
    if (this.projectForm.valid) {
      this._submit.emit({
        name: 'Project',
        ...this.projectForm.value,
      });
    } else {
      this.snackBarService.open('Informațiile introduse sunt incorecte', 'Close', {
        duration: 3000,
      });
    }
  }

  protected readonly ValidationHelperService = ValidationHelperService;
  protected readonly EProjectStatus = EProjectStatus;
}
