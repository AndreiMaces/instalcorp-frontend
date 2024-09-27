import { Component } from '@angular/core';
import { BradcrumbsMenuComponent } from '../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { EmployeeComponent } from '../employees/employee/employee.component';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateFreeDayComponent } from './create-free-day/create-free-day.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IFreeDay } from '../../core/models/IFreeDay';
import { FreeDayControllerService } from '../../core/api/controllers/free-day-controller.service';
import { FreeDayRowComponent } from './free-day-row/free-day-row.component';

@Component({
  selector: 'app-free-days',
  standalone: true,
  imports: [
    BradcrumbsMenuComponent,
    EmployeeComponent,
    MatAnchor,
    MatButton,
    MatIcon,
    MatProgressSpinner,
    NgForOf,
    NgIf,
    RouterLink,
    FreeDayRowComponent,
  ],
  templateUrl: './free-days.component.html',
  styleUrl: './free-days.component.scss',
})
export class FreeDaysComponent {
  isLoading = true;
  freeDays: IFreeDay[];

  constructor(
    private freeDayController: FreeDayControllerService,
    private matsnackService: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getFreeDays();
  }

  getFreeDays(): void {
    this.isLoading = true;
    this.freeDayController.getFreeDays().subscribe({
      next: (response) => {
        this.freeDays = response;
        this.isLoading = false;
      },
      error: () => {
        this.matsnackService.open('A apărut o eroare la încărcarea angajaților.');
        this.isLoading = false;
      },
    });
  }

  openCreateFreeDayDialog(): void {
    this.dialog
      .open(CreateFreeDayComponent, {
        width: '500px',
        maxHeight: '90vh',
        maxWidth: '100%',
        disableClose: true,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this.getFreeDays();
      });
  }

  deleteFreeDay(freeDayId: number): void {
    this.isLoading = true;
    this.freeDayController.removeFreeDay(freeDayId).subscribe({
      next: () => {
        this.getFreeDays();
      },
      error: () => {
        this.matsnackService.open('A apărut o eroare la încărcarea zilelor libere.');
        this.isLoading = false;
      },
    });
  }
}
