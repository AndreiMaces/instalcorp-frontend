import { Component, OnInit } from '@angular/core';
import { EmployeeControllerService } from '../../core/api/controllers/employee-controller.service';
import { IEmployee } from '../../core/models/IEmployee';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { BradcrumbsMenuComponent } from '../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuContent, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateEmployeeDialogComponent } from './create-employee-dialog/create-employee-dialog.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [
    MatProgressSpinner,
    NgIf,
    EmployeeComponent,
    NgForOf,
    BradcrumbsMenuComponent,
    DatePipe,
    MatButton,
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuTrigger,
    MatMenuContent,
    MatMenuItem,
    RouterLink,
    MatAnchor,
  ],
  host: {
    class: 'flex-grow',
  },
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
})
export class EmployeesComponent implements OnInit {
  isLoading = true;
  employees: IEmployee[];

  constructor(
    private employeeController: EmployeeControllerService,
    private matsnackService: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.isLoading = true;
    this.employeeController.getEmployees().subscribe({
      next: (response) => {
        this.employees = response;
        this.isLoading = false;
      },
      error: () => {
        this.matsnackService.open('A apărut o eroare la încărcarea angajaților.');
        this.isLoading = false;
      },
    });
  }

  openCreateEmployeeDialog(): void {
    this.dialog
      .open(CreateEmployeeDialogComponent, {
        width: '500px',
        maxHeight: '90vh',
        maxWidth: '100%',
        disableClose: true,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this.getEmployees();
      });
  }

  deleteEmployee(employeeId: number): void {
    this.isLoading = true;
    this.employeeController.removeEmployee(employeeId).subscribe({
      next: () => {
        this.getEmployees();
      },
      error: () => {
        this.matsnackService.open('A apărut o eroare la încărcarea angajaților.');
        this.isLoading = false;
      },
    });
  }
}
