import { Component, Input, output } from '@angular/core';
import { IIssueType } from '../../../core/models/IIssueType';
import {
  MatExpansionPanel,
  MatExpansionPanelActionRow,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { EditProjectTypeDialogComponent } from './edit-project-type-dialog/edit-project-type-dialog.component';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-type',
  standalone: true,
  imports: [
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatButton,
    MatExpansionPanelActionRow,
    MatIconButton,
    MatSuffix,
    MatIcon,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    RouterLink,
  ],
  templateUrl: './project-type.component.html',
  styleUrl: './project-type.component.scss',
})
export class ProjectTypeComponent {
  @Input() projectType: IIssueType;
  _edit = output();
  _delete = output<number>();

  constructor(private dialog: MatDialog) {}

  openEditProjectTypeDialog(): void {
    this.dialog
      .open(EditProjectTypeDialogComponent, {
        data: {
          issueType: this.projectType,
        },
        width: '800px',
        maxHeight: '90vh',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this._edit.emit();
      });
  }

  openDeleteProjectTypeDialog(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        maxWidth: '100%',
        width: '800px',
        maxHeight: '90vh',
        disableClose: true,
        data: {
          message: `Sunteți sigur că doriți să ștergeți tipul de proiect "${this.projectType.title}"?`,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this._delete.emit(this.projectType.id);
      });
  }
}
