import { Component, Input, output } from '@angular/core';
import { IEmployee } from '../../../core/models/IEmployee';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { EditEmployeeDialogComponent } from '../edit-employee-dialog/edit-employee-dialog.component';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: '[app-employee]',
  standalone: true,
  imports: [MatCardHeader, MatCardContent, MatCard, RouterLink, MatIconButton, MatMenuTrigger, MatIcon, MatMenu, MatMenuItem],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  @Input() employee: IEmployee;
  _edit = output();
  _delete = output<number>();

  constructor(private dialog: MatDialog) {}

  openEditDialog(): void {
    this.dialog
      .open(EditEmployeeDialogComponent, {
        data: {
          employee: this.employee,
        },
        width: '500px',
        maxWidth: '100%',
        maxHeight: '90vh',
        disableClose: true,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this._edit.emit();
      });
  }

  openDeleteDialog(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          message: 'Sigur vrei sa stergi acest angajat?',
        },
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this._delete.emit(this.employee.id);
        }
      });
  }
}
