import { Component, Input } from '@angular/core';
import { DatePipe, NgForOf } from '@angular/common';
import { IEmployeeProject } from '../../../core/models/IEmployeeProject';

@Component({
  selector: 'app-employees-table',
  standalone: true,
  imports: [DatePipe, NgForOf],
  templateUrl: './employees-table.component.html',
  styleUrl: './employees-table.component.scss',
})
export class EmployeesTableComponent {
  @Input() employeeIssues: IEmployeeProject[];
}
