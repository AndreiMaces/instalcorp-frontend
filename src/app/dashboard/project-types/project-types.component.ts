import { Component, OnInit } from '@angular/core';
import { IssueTypeControllerService } from '../../core/api/controllers/issue-type-controller.service';
import { IIssueType } from '../../core/models/IIssueType';
import { ProjectTypeComponent } from './project-type/project-type.component';
import { NgForOf, NgIf } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectTypeDialogComponent } from './create-project-type-dialog/create-project-type-dialog.component';
import { Router, RouterLink } from '@angular/router';
import { ArchivedProjectTypeComponent } from './project-types-archive/archived-project-type/archived-project-type.component';
import { BradcrumbsMenuComponent } from '../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import { CreateProjectDialogComponent } from './project-type-page/create-project-dialog/create-project-dialog.component';
import { IIssue } from '../../core/models/IIssue';
import { MatMenu, MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: 'app-project-types',
  standalone: true,
  imports: [
    ProjectTypeComponent,
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
    MatMenu
  ],
  host: {
    class: 'flex-grow',
  },
  templateUrl: './project-types.component.html',
  styleUrl: './project-types.component.scss',
})
export class ProjectTypesComponent implements OnInit {
  issueTypes: IIssueType[];
  isLoading = true;

  constructor(
    private issueTypeController: IssueTypeControllerService,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getIssueTypes();
  }

  getIssueTypes(): void {
    this.isLoading = true;
    this.issueTypeController.getIssueTypes().subscribe({
      next: (issueTypes) => {
        this.issueTypes = issueTypes;
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
      .subscribe((res: Partial<IIssue>) => {
        if (res) {
          this.router.navigateByUrl(`/dashboard/project-types/${res.type.id}/${res.type.title}/${res.id}/${res.title}`);
        }
      });
  }

  removeIssueType(issueTypeId: number): void {
    this.isLoading = true;
    this.issueTypeController.deleteIssueType(issueTypeId).subscribe({
      next: () => {
        this.getIssueTypes();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.issueTypes, event.previousIndex, event.currentIndex);
    this.issueTypeController.updateIssueTypeOrder(this.issueTypes).subscribe({
      next: () => {},
      error: (error) => {
        console.error(error);
      },
    });
  }
}
