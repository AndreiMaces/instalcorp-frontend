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
  ],
  templateUrl: './project-type.component.html',
  styleUrl: './project-type.component.scss',
})
export class ProjectTypeComponent {
  @Input() projectType: IIssueType;
  _edit = output();

  constructor(private dialog: MatDialog) {}

  openEditProjectTypeDialog(): void {
    this.dialog
      .open(EditProjectTypeDialogComponent, {
        data: {
          issueType: this.projectType,
        },
        width: '800px',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this._edit.emit();
      });
  }
}
