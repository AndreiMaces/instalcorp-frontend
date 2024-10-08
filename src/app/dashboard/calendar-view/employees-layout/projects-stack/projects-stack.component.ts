import { Component, Input } from '@angular/core';
import { IProjectType } from '../../../../core/models/IProjectType';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ProjectControllerService } from '../../../../core/api/controllers/project-controller.service';
import { MatTooltip } from '@angular/material/tooltip';
import { CdkDrag, CdkDragHandle, CdkDropList } from '@angular/cdk/drag-drop';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { IEmployee } from '../../../../core/models/IEmployee';
import { EmployeeControllerService } from '../../../../core/api/controllers/employee-controller.service';
import { ColorHelperService } from '../../../../core/helpers/color-helper.service';
import { CalendarLayoutHelperService } from '../../../../core/helpers/calendar-layout-helper.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-stack',
  standalone: true,
  imports: [NgForOf, NgIf, MatProgressSpinner, MatTooltip, DatePipe, CdkDrag, MatIconButton, MatIcon, CdkDropList, CdkDragHandle],
  templateUrl: './projects-stack.component.html',
  styleUrl: './projects-stack.component.scss',
})
export class ProjectsStackComponent {
  employees: IEmployee[];
  projectTypes: Partial<IProjectType>[];
  isLoading = false;
  isVisible = true;
  @Input() isGlobalDragDisabled = {
    value: false,
  };
  @Input() listIndexes: number[] = [];

  constructor(
    private projectsController: ProjectControllerService,
    private employeesController: EmployeeControllerService,
    private matSnackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getProjectTypes();
    this.getEmployees();
    this.route.queryParams.subscribe(() => this.getProjectTypes());
  }

  getEmployees(): void {
    this.isLoading = true;
    this.employeesController.getEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
        this.isLoading = false;
      },
      error: () => {
        this.matSnackBar.open('Eroare la preluarea de angajati', undefined, { duration: 3000 });
        this.isLoading = false;
      },
    });
  }

  getProjectTypes(): void {
    this.isLoading = true;
    this.projectsController.getStack().subscribe({
      next: (projectTypes) => {
        this.projectTypes = projectTypes;
        this.isLoading = false;
      },
      error: () => {
        this.matSnackBar.open('Eroare la preluarea de tipuri de proiecte', undefined, { duration: 3000 });
        this.isLoading = false;
      },
    });
  }

  getLinkedLists(): string[] {
    let lists: string[] = [];
    if (this.listIndexes && this.employees && this.listIndexes.length > 0 && this.employees.length > 0) {
      this?.listIndexes?.forEach((index) => {
        lists = [...lists, ...this?.employees?.map((day, i) => 'list' + i + index)];
      });
    }

    return lists;
  }

  protected readonly ColorHelperService = ColorHelperService;
  protected readonly CalendarLayoutHelperService = CalendarLayoutHelperService;
}
