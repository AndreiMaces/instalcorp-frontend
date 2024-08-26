import { Component, Input } from '@angular/core';
import { IEmployee } from '../../../core/models/IEmployee';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [MatCardHeader, MatCardContent, MatCard, RouterLink],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent {
  @Input() employee: IEmployee;
}
