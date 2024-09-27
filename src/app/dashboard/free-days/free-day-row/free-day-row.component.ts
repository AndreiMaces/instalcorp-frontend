import { Component, Input, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { IFreeDay } from '../../../core/models/IFreeDay';
import { EditFreeDayComponent } from '../edit-free-day/edit-free-day.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: '[app-free-day-row]',
  standalone: true,
  imports: [MatIcon, MatIconButton, MatMenu, MatMenuItem, DatePipe, MatMenuTrigger],
  templateUrl: './free-day-row.component.html',
  styleUrl: './free-day-row.component.scss',
})
export class FreeDayRowComponent {
  @Input() freeDay: IFreeDay;
  _edit = output();
  _delete = output<number>();

  constructor(private dialog: MatDialog) {}

  openEditDialog(): void {
    this.dialog
      .open(EditFreeDayComponent, {
        data: {
          freeDay: this.freeDay,
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
          message: 'Sigur vrei sa stergi această zi liberă?',
        },
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this._delete.emit(this.freeDay.id);
        }
      });
  }
}
