import { Component, Input } from '@angular/core';
import { DatePipe, NgForOf } from '@angular/common';
import { IEmployeeIssue } from '../../../core/models/IEmployeeIssue';

@Component({
  selector: 'app-employees-table',
  standalone: true,
  imports: [DatePipe, NgForOf],
  templateUrl: './employees-table.component.html',
  styleUrl: './employees-table.component.scss',
})
export class EmployeesTableComponent {
  @Input() employeeIssues: IEmployeeIssue[];
}
