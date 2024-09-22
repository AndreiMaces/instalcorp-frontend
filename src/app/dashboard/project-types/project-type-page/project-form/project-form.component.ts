import { Component, Input, output } from '@angular/core';
import { ProjectFormFactory } from './ProjectFormFactory';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatError, MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { NgForOf, NgIf } from '@angular/common';
import { ValidationHelperService } from '../../../../core/helpers/validation-helper.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IProjectType } from '../../../../core/models/IProjectType';
import { MatOption, MatSelect } from '@angular/material/select';
import { EStatus } from '../../shared/enums/EStatus';
import { MatDatepickerModule, MatDatepickerToggle, MatDateRangeInput, MatDateRangePicker } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { ProjectTypeControllerService } from '../../../../core/api/controllers/project-type-controller.service';
import { MatDialog } from '@angular/material/dialog';
import { IProject } from '../../../../core/models/IProject';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { IEmployee } from '../../../../core/models/IEmployee';
import { UploadMediaSingleComponent } from '../../../../shared/components/upload-media-single/upload-media-single.component';
import { UploadMediaMultipleComponent } from '../../../../shared/components/upload-media-multiple/upload-media-multiple.component';
import { EmployeeProjectFormComponent } from './employee-project-form/employee-project-form.component';

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
    EmployeeProjectFormComponent,
    UploadMediaSingleComponent,
    UploadMediaMultipleComponent,
  ],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss',
})
export class ProjectFormComponent {
  _submit = output<Partial<IProject>>();
  close = output();
  projectForm = ProjectFormFactory.create();
  @Input() project: Partial<IProject>;
  projectTypes: Partial<IProjectType>[];
  employees: Partial<IEmployee>[];
  isLoading = false;

  constructor(
    private snackBarService: MatSnackBar,
    private projectTypeController: ProjectTypeControllerService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getIssueTypesDropdown();
  }

  getIssueTypesDropdown(): void {
    this.isLoading = true;
    this.projectTypeController.getProjectTypesDropdown().subscribe({
      next: (value) => {
        this.projectTypes = value;
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
      typeId: this.project.typeId ?? this.projectTypes[0].id,
      importance: this.project.importance ?? 0,
    });
    this?.project?.media?.forEach((url) => this.projectForm.controls.media.push(new FormControl(url)));
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

  createPayload(): Partial<IProject> {
    return {
      name: 'Project',
      ...this.projectForm.value,
    } as Partial<IProject>;
  }

  protected readonly ValidationHelperService = ValidationHelperService;
  protected readonly EProjectStatus = EStatus;
}
