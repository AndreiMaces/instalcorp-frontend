import { Component } from '@angular/core';
import { BradcrumbsMenuComponent } from '../../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { EmployeeComponent } from '../employee/employee.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { EmployeeControllerService } from '../../../core/api/controllers/employee-controller.service';
import { IEmployee } from '../../../core/models/IEmployee';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButton } from '@angular/material/button';
import { ColorHelperService } from '../../../core/helpers/color-helper.service';

@Component({
  selector: 'app-employee-page',
  standalone: true,
  imports: [BradcrumbsMenuComponent, EmployeeComponent, MatProgressSpinner, NgForOf, NgIf, MatButton, DatePipe],
  templateUrl: './employee-page.component.html',
  styleUrl: './employee-page.component.scss',
})
export class EmployeePageComponent {
  employee: IEmployee;
  isLoading = false;

  constructor(
    private employeeController: EmployeeControllerService,
    private route: ActivatedRoute,
    private snackBarService: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    this.isLoading = true;
    this.employeeController.getEmployee(this.route.snapshot.params['id']).subscribe({
      next: (response) => {
        this.employee = response;
        this.isLoading = false;
      },
      error: () => {
        this.snackBarService.open('A apărut o eroare la încărcarea angajațiului.');
        this.isLoading = false;
      },
    });
  }

  protected readonly ColorHelperService = ColorHelperService;
}
