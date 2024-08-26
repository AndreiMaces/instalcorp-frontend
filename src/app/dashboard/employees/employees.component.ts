import { Component, OnInit } from '@angular/core';
import { EmployeeControllerService } from '../../core/api/controllers/employee-controller.service';
import { IEmployee } from '../../core/models/IEmployee';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgForOf, NgIf } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { BradcrumbsMenuComponent } from '../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [MatProgressSpinner, NgIf, EmployeeComponent, NgForOf, BradcrumbsMenuComponent],
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
}
