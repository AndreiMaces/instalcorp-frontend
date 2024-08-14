import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ProjectTypeFormComponent } from '../project-type-form/project-type-form.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface IConfirmationDialogData {
  title?: string;
  message?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  imports: [MatButton, ProjectTypeFormComponent],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IConfirmationDialogData,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
  ) {}

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
