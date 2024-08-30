import { Component } from '@angular/core';
import { WeekComponent } from './week/week.component';

@Component({
  selector: 'app-employees-layout',
  standalone: true,
  imports: [WeekComponent],
  templateUrl: './employees-layout.component.html',
  styleUrl: './employees-layout.component.scss',
})
export class EmployeesLayoutComponent {}
