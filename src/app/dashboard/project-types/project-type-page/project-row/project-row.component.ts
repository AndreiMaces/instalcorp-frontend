import { Component, Input, output } from '@angular/core';
import { IProject } from '../../../../core/models/IProject';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  IConfirmationDialogData,
} from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { EditProjectDialogComponent } from '../edit-project-dialog/edit-project-dialog.component';
import { ProjectStatusComponent } from './project-status/project-status.component';
import { ColorHelperService } from '../../../../core/helpers/color-helper.service';
import { CdkContextMenuTrigger, CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { ProjectImportanceComponent } from './project-importance/project-importance.component';
import { HandleEmployeesComponent } from '../handle-employees-dialog/handle-employees.component';

@Component({
  selector: 'app-project-row',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    RouterLink,
    MatMenuTrigger,
    ProjectStatusComponent,
    CdkMenu,
    CdkMenuItem,
    CdkContextMenuTrigger,
    ProjectImportanceComponent,
  ],
  templateUrl: './project-row.component.html',
  styleUrl: './project-row.component.scss',
})
export class ProjectRowComponent {
  @Input() project: IProject;
  _delete = output<number>();
  _clone = output<number>();
  _edit = output();

  constructor(private dialog: MatDialog) {}

  openDuplicateDialog(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          message: `Sunteți sigur că doriți să creați o copie a proiectului '${this.project.title}'?`,
        } as IConfirmationDialogData,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this._clone.emit(this.project.id);
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
        if (res) this._edit.emit();
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
        if (res) this._delete.emit(this.project.id);
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

  protected readonly ColorHelperService = ColorHelperService;
}
