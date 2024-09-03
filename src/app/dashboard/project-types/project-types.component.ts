import { Component, OnInit } from '@angular/core';
import { ProjectTypeControllerService } from '../../core/api/controllers/project-type-controller.service';
import { IProjectType } from '../../core/models/IProjectType';
import { ProjectTypeRowComponent } from './project-type-row/project-type-row.component';
import { NgForOf, NgIf } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectTypeDialogComponent } from './shared/components/create-project-type-dialog/create-project-type-dialog.component';
import { Router, RouterLink } from '@angular/router';
import { ArchivedProjectTypeComponent } from './project-types-archive/archived-project-type/archived-project-type.component';
import { BradcrumbsMenuComponent } from '../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { CreateProjectDialogComponent } from './project-type-page/create-project-dialog/create-project-dialog.component';
import { IProject } from '../../core/models/IProject';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-project-types',
  standalone: true,
  imports: [
    ProjectTypeRowComponent,
    NgForOf,
    NgIf,
    MatProgressSpinner,
    MatButton,
    MatIcon,
    RouterLink,
    MatAnchor,
    ArchivedProjectTypeComponent,
    BradcrumbsMenuComponent,
    CdkDropList,
    CdkDrag,
    MatMenuTrigger,
    MatMenu,
  ],
  host: {
    class: 'flex-grow',
  },
  templateUrl: './project-types.component.html',
  styleUrl: './project-types.component.scss',
})
export class ProjectTypesComponent implements OnInit {
  projectTypes: IProjectType[];
  isLoading = true;

  constructor(
    private projectTypeController: ProjectTypeControllerService,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getIssueTypes();
  }

  getIssueTypes(): void {
    this.isLoading = true;
    this.projectTypeController.getProjectTypes().subscribe({
      next: (projectTypes) => {
        this.projectTypes = projectTypes;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      },
    });
  }

  openCreateProjectTypeDialog(): void {
    this.dialog
      .open(CreateProjectTypeDialogComponent, {
        maxWidth: '100%',
        width: '800px',
        maxHeight: '90vh',
        disableClose: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) this.getIssueTypes();
      });
  }

  openCreateIssueDialog(): void {
    this.dialog
      .open(CreateProjectDialogComponent, {
        width: '1200px',
        maxWidth: '100%',
        maxHeight: '90vh',
        disableClose: true,
      })
      .afterClosed()
      .subscribe((res: Partial<IProject>) => {
        if (res) {
          this.router.navigateByUrl(`/dashboard/project-types/${res.type.id}/${res.type.title}/${res.id}/${res.title}`);
        }
      });
  }

  removeIssueType(projectTypeId: number): void {
    this.isLoading = true;
    this.projectTypeController.deleteProjectType(projectTypeId).subscribe({
      next: () => {
        this.getIssueTypes();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.projectTypes, event.previousIndex, event.currentIndex);
    this.projectTypeController.updateProjectTypeOrder(this.projectTypes).subscribe({
      next: () => {},
      error: (error) => {
        console.error(error);
      },
    });
  }
}
