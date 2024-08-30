import { Component } from '@angular/core';
import { BradcrumbsMenuComponent } from '../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { EmployeesLayoutComponent } from './employees-layout/employees-layout.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgForOf, NgIf } from '@angular/common';
import { ProjectTypeComponent } from '../project-types/project-type/project-type.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-calendar-view',
  standalone: true,
  host: {
    class: 'flex-grow',
  },
  imports: [
    BradcrumbsMenuComponent,
    EmployeesLayoutComponent,
    CdkDrag,
    CdkDropList,
    MatAnchor,
    MatButton,
    MatIcon,
    MatProgressSpinner,
    NgForOf,
    NgIf,
    ProjectTypeComponent,
    RouterLink,
    MatFormField,
    RouterOutlet,
  ],
  templateUrl: './calendar-view.component.html',
  styleUrl: './calendar-view.component.scss',
})
export class CalendarViewComponent {}
