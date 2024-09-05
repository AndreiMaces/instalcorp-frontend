import { Component } from '@angular/core';
import { WeekComponent } from './week/week.component';

@Component({
  selector: 'app-employees-layout',
  standalone: true,
  imports: [WeekComponent],
  templateUrl: './employees-layout.component.html',
  styleUrl: './employees-layout.component.scss',
})
export class EmployeesLayoutComponent {
  get today(): Date {
    return new Date();
  }

  getNextWeek(index: number): Date {
    return new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + index * 7);
  }
}
