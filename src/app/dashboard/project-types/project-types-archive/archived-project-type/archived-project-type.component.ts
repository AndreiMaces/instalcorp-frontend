import { Component, Input, output } from '@angular/core';
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem } from '@angular/material/menu';
import { IProjectType } from '../../../../core/models/IProjectType';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { ColorHelperService } from '../../../../core/helpers/color-helper.service';

@Component({
  selector: 'app-archived-project-type-row',
  standalone: true,
  imports: [MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatIcon, MatIconButton, MatMenu, MatMenuItem, MatButton],
  templateUrl: './archived-project-type.component.html',
  styleUrl: './archived-project-type.component.scss',
})
export class ArchivedProjectTypeComponent {
  @Input() projectType: IProjectType;
  _restore = output<number>();

  constructor(private dialog: MatDialog) {}

  openRestoreProjectTypeDialog(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        maxWidth: '100%',
        width: '800px',
        data: {
          title: 'Restaurare tip de proiect',
          message: `Sunteți sigur că doriți să restaurați tipul de proiect cu titlul: "${this.projectType.title}"?`,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this._restore.emit(this.projectType.id);
      });
  }

  protected readonly ColorHelperService = ColorHelperService;
}
