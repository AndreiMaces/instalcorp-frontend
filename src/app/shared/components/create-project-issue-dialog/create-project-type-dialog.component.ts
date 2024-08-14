import { Component } from '@angular/core';
import { ProjectTypeFormComponent } from '../project-type-form/project-type-form.component';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-create-project-type-dialog',
  standalone: true,
  imports: [ProjectTypeFormComponent, MatButton],
  templateUrl: './create-project-type-dialog.component.html',
  styleUrl: './create-project-type-dialog.component.scss',
})
export class CreateProjectTypeDialogComponent {
  constructor(private dialog: MatDialog) {}

  openDenyConfirmationDialog(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        maxWidth: '100%',
        width: '800px',
        disableClose: true,
        data: {
          message: 'Sunteți sigur că doriți să anulați? Toate modificările vor fi pierdute.',
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this.dialog.closeAll();
      });
  }
}
