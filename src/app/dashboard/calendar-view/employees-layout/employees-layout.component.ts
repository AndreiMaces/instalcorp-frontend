import { Component } from '@angular/core';
import { WeekComponent } from './week/week.component';
import { Subject } from 'rxjs';
import { MatButton } from '@angular/material/button';
import { CreateEmployeeProjectDialogComponent } from '../../../shared/components/create-employee-project-dialog/create-employee-project-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-employees-layout',
  standalone: true,
  imports: [WeekComponent, MatButton, MatIcon],
  templateUrl: './employees-layout.component.html',
  styleUrl: './employees-layout.component.scss',
})
export class EmployeesLayoutComponent {
  private _reloadSubject = new Subject<void>();
  public $reloadObservable = this._reloadSubject.asObservable();

  constructor(public dialog: MatDialog) {}

  openCreateEmployeeProjectDialog(): void {
    this.dialog
      .open(CreateEmployeeProjectDialogComponent, {
        width: '500px',
        maxHeight: '90vh',
        disableClose: true,
        data: {
          employeeProject: {
            startDate: new Date(),
            endDate: new Date(),
          },
        },
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this._reloadSubject.next();
        }
      });
  }

  get today(): Date {
    return new Date();
  }

  getNextWeek(index: number): Date {
    return new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + index * 7);
  }
}
