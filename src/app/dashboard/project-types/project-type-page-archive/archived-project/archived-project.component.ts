import { Component, Input, output } from '@angular/core';
import { IIssue } from '../../../../core/models/IIssue';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  IConfirmationDialogData,
} from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-archived-project',
  standalone: true,
  imports: [MatIcon, MatIconButton, MatMenu, MatMenuItem, RouterLink, MatMenuTrigger, MatButton],
  templateUrl: './archived-project.component.html',
  styleUrl: './archived-project.component.scss',
})
export class ArchivedProjectComponent {
  @Input() issue: IIssue;
  _restore = output<number>();

  constructor(private dialog: MatDialog) {}

  openRestoreIssueDialog(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          message: `Sunteți sigur că doriți să restaurați proiectul '${this.issue.title}'?`,
        } as IConfirmationDialogData,
        disableClose: true,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this._restore.emit(this.issue.id);
      });
  }
}
