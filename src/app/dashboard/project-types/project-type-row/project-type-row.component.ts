import { Component, Input, output, ViewChild } from '@angular/core';
import { IProjectType } from '../../../core/models/IProjectType';
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
import { EditProjectTypeDialogComponent } from '../shared/components/edit-project-type-dialog/edit-project-type-dialog.component';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { RouterLink } from '@angular/router';
import { ColorHelperService } from '../../../core/helpers/color-helper.service';
import { CdkContextMenuTrigger, CdkMenu, CdkMenuItem } from '@angular/cdk/menu';

@Component({
  selector: 'app-project-type-row',
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
    CdkContextMenuTrigger,
    CdkMenu,
    CdkMenuItem,
  ],
  templateUrl: './project-type-row.component.html',
  styleUrl: './project-type-row.component.scss',
})
export class ProjectTypeRowComponent {
  @Input() projectType: IProjectType;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  _edit = output();
  _delete = output<number>();

  constructor(private dialog: MatDialog) {}

  openEditProjectTypeDialog(): void {
    this.dialog
      .open(EditProjectTypeDialogComponent, {
        data: {
          projectType: this.projectType,
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

  protected readonly ColorHelperService = ColorHelperService;

  onRightClick(event: MouseEvent) {
    this.trigger.openMenu();
    event.stopPropagation();
    event.preventDefault();
  }
}
