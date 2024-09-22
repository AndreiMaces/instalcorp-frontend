import { Component } from '@angular/core';
import { BradcrumbsMenuComponent } from '../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { EmployeesLayoutComponent } from './employees-layout/employees-layout.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgForOf, NgIf } from '@angular/common';
import { ProjectTypeRowComponent } from '../project-types/project-type-row/project-type-row.component';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatFormField } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../../shared/components/task-dialog/task-dialog.component';
import { CalendarLayoutHelperService } from '../../core/helpers/calendar-layout-helper.service';

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
    ProjectTypeRowComponent,
    RouterLink,
    MatFormField,
    RouterOutlet,
  ],
  templateUrl: './calendar-view.component.html',
  styleUrl: './calendar-view.component.scss',
})
export class CalendarViewComponent {
  taskId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (!!params['taskId'] && params['taskId'] !== this.taskId) {
        this.taskId = params['taskId'];
        this.dialog.closeAll();
        this.dialog
          .open(TaskDialogComponent, {
            data: { taskId: this.taskId },
            width: '80vw',
            maxWidth: '1200px',
            height: '80vh',
            maxHeight: '800px',
            autoFocus: false,
          })
          .afterClosed()
          .subscribe(() => {
            // flush queryParam
            this.taskId = null;
            this.router.navigate([], {
              queryParams: {
                taskId: null,
              },
              queryParamsHandling: 'merge',
            });
          });
      }
    });
  }

  protected readonly CalendarLayoutHelperService = CalendarLayoutHelperService;
}
