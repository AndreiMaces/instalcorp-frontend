import { Component, Input, output } from '@angular/core';
import { IIssue } from '../../../../core/models/IIssue';
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
import { IssueStatusComponent } from './issue-status/issue-status.component';
import { ColorHelperService } from '../../../../core/helpers/color-helper.service';
import { CdkContextMenuTrigger, CdkMenu, CdkMenuItem } from "@angular/cdk/menu";
import { IssueImportanceComponent } from "./issue-importance/issue-importance.component";
import { HandleEmployeesComponent } from '../handle-employees-dialog/handle-employees.component';

@Component({
  selector: 'app-project-type-issue',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    RouterLink,
    MatMenuTrigger,
    IssueStatusComponent,
    CdkMenu,
    CdkMenuItem,
    CdkContextMenuTrigger,
  ],
  templateUrl: './project-type-issue.component.html',
  styleUrl: './project-type-issue.component.scss',
})
export class ProjectTypeIssueComponent {
  @Input() issue: IIssue;
  _delete = output<number>();
  _clone = output<number>();
  _edit = output();

  constructor(private dialog: MatDialog) {}

  openDuplicateDialog(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          message: `Sunteți sigur că doriți să creați o copie a proiectului '${this.issue.title}'?`,
        } as IConfirmationDialogData,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this._clone.emit(this.issue.id);
      });
  }

  openEditIssueDialog(): void {
    this.dialog
      .open(EditProjectDialogComponent, {
        data: {
          issue: this.issue,
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
          message: `Sunteți sigur că doriți să ștergeți proiectul '${this.issue.title}'?`,
        } as IConfirmationDialogData,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this._delete.emit(this.issue.id);
      });
  }

  openHandleEmployeesDialog(): void {
    this.dialog.open(HandleEmployeesComponent, {
      data: {
        issue: this.issue,
      },
      disableClose: true,
      maxWidth: '100%',
      maxHeight: '80vh',
      width: '1000px',
    });
  }

  protected readonly ColorHelperService = ColorHelperService;
}
