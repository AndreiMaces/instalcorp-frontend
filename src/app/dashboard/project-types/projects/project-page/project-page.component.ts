import { Component, OnInit } from '@angular/core';
import { BradcrumbsMenuComponent } from '../../../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { ProjectTypeRowComponent } from '../../project-type-row/project-type-row.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectControllerService } from '../../../../core/api/controllers/project-controller.service';
import { IProject } from '../../../../core/models/IProject';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { ProjectRowComponent } from '../../project-type-page/project-row/project-row.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectImportanceComponent } from '../../project-type-page/project-row/project-importance/project-importance.component';
import { ColorHelperService } from '../../../../core/helpers/color-helper.service';
import { EmployeesTableComponent } from '../../../../shared/components/employees-table/employees-table.component';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import {
  ConfirmationDialogComponent,
  IConfirmationDialogData,
} from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectDialogComponent } from '../../project-type-page/edit-project-dialog/edit-project-dialog.component';
import { HandleEmployeesComponent } from '../../project-type-page/handle-employees-dialog/handle-employees.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [
    BradcrumbsMenuComponent,
    MatAnchor,
    MatButton,
    MatIcon,
    MatProgressSpinner,
    NgForOf,
    NgIf,
    ProjectTypeRowComponent,
    RouterLink,
    CdkDrag,
    CdkDropList,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    ProjectRowComponent,
    ReactiveFormsModule,
    ProjectImportanceComponent,
    DatePipe,
    EmployeesTableComponent,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    CdkMenu,
    CdkMenuItem,
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
  host: {
    class: 'flex-grow',
  },
})
export class ProjectPageComponent implements OnInit {
  project: IProject;
  isLoading: boolean;

  constructor(
    private projectControllerService: ProjectControllerService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit() {
    this.initProject();
  }

  initProject() {
    this.isLoading = true;
    this.route.params.subscribe((params) => {
      const projectId = +params['projectId'];
      this.projectControllerService.getProject(projectId).subscribe({
        next: (project) => {
          this.project = project;
          this.isLoading = false;
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false;
        },
      });
    });
  }

  openDuplicateDialog(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          message: `Sunteți sigur că doriți să creați o copie a proiectului '${this.project.title}'?`,
        } as IConfirmationDialogData,
        disableClose: true,
      })
      .afterClosed()
      .subscribe(() => {
        this.projectControllerService.cloneProject(this.project.id).subscribe((project) => {
          const redirectRoute = `../../${project.id}/${project.title}`;
          this.router.navigate([redirectRoute], { relativeTo: this.route });
        });
      });
  }

  openEditIssueDialog(): void {
    this.dialog
      .open(EditProjectDialogComponent, {
        data: {
          project: this.project,
        },
        width: '1200px',
        maxWidth: '100%',
        maxHeight: '80vh',
        disableClose: true,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.initProject();
        }
      });
  }

  openHandleEmployeesDialog(): void {
    this.dialog.open(HandleEmployeesComponent, {
      data: {
        project: this.project,
      },
      disableClose: true,
      maxWidth: '100%',
      maxHeight: '80vh',
      width: '1000px',
    });
  }

  openDeleteIssueDialog(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          message: `Sunteți sigur că doriți să ștergeți proiectul '${this.project.title}'?`,
        } as IConfirmationDialogData,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.projectControllerService.removeProject(this.project.id).subscribe(() => {
            this.router.navigate(['../../'], { relativeTo: this.route });
          });
        }
      });
  }

  protected readonly ColorHelperService = ColorHelperService;
}
