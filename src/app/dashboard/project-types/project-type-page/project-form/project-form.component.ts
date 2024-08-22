import { Component, Input, output } from '@angular/core';
import { ProjectFormFactory } from './ProjectFormFactory';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgForOf, NgIf } from '@angular/common';
import { ValidationHelperService } from '../../../../core/helpers/validation-helper.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IIssueType } from '../../../../core/models/IIssueType';
import { MatOption, MatSelect } from '@angular/material/select';
import { EProjectStatus } from '../../shared/enums/EProjectStatus';
import { MatDatepickerModule, MatDatepickerToggle, MatDateRangeInput, MatDateRangePicker } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { IssueTypeControllerService } from '../../../../core/api/controllers/issue-type-controller.service';
import { MatDialog } from '@angular/material/dialog';
import { IIssue } from '../../../../core/models/IIssue';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

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
    NgForOf,
    MatProgressSpinner,
  ],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss',
})
export class ProjectFormComponent {
  _submit = output<Partial<IIssue>>();
  close = output();
  projectForm = ProjectFormFactory.create();
  @Input() project: Partial<IIssue>;
  issueTypes: Partial<IIssueType>[];
  isLoading = false;

  constructor(
    private snackBarService: MatSnackBar,
    private issueTypeController: IssueTypeControllerService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getIssueTypesDropdown();
  }

  getIssueTypesDropdown(): void {
    this.isLoading = true;
    this.issueTypeController.getIssueTypesDropdown().subscribe({
      next: (value) => {
        this.issueTypes = value;
        if (this.project) {
          this.prefillForm();
        }
        this.isLoading = false;
      },
      error: () => {
        this.snackBarService.open('A apărut o eroare la încărcarea formularului', 'Close', {
          duration: 3000,
        });
        this.dialog.closeAll();
        this.isLoading = false;
      },
    });
  }

  prefillForm(): void {
    this.projectForm.patchValue({
      title: this.project.title ?? '',
      description: this.project.description ?? '',
      color: this.project.color ?? '#ffffff',
      startHour: this.project.startHour ?? new Date(),
      endHour: this.project.endHour ?? new Date(),
      startDate: this.project.startDate ?? new Date(),
      endDate: this.project.endDate ?? new Date(),
      status: this.project.status ?? 0,
      typeId: this.project.typeId ?? this.issueTypes[0].id,
    });
  }

  onSubmit() {
    this.projectForm.markAllAsTouched();
    if (this.projectForm.valid) {
      this._submit.emit(this.createPayload());
    } else {
      this.snackBarService.open('Informațiile introduse sunt incorecte', 'Close', {
        duration: 3000,
      });
    }
  }

  createPayload(): Partial<IIssue> {
    return {
      name: 'Project',
      ...this.projectForm.value,
    } as Partial<IIssue>;
  }

  protected readonly ValidationHelperService = ValidationHelperService;
  protected readonly EProjectStatus = EProjectStatus;
}
