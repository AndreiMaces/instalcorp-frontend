import { Component } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgForOf, NgIf } from '@angular/common';
import { ProjectTypeComponent } from '../project-type/project-type.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IssueTypeControllerService } from '../../../core/api/controllers/issue-type-controller.service';
import { IIssueType } from '../../../core/models/IIssueType';
import { BradcrumbsMenuComponent } from '../../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { ProjectTypeIssueComponent } from './project-type-issue/project-type-issue.component';

@Component({
  selector: 'app-project-type-page',
  standalone: true,
  imports: [
    MatAnchor,
    MatButton,
    MatIcon,
    MatProgressSpinner,
    NgForOf,
    NgIf,
    ProjectTypeComponent,
    RouterLink,
    BradcrumbsMenuComponent,
    ProjectTypeIssueComponent,
  ],
  host: {
    class: 'flex-grow',
  },
  templateUrl: './project-type-page.component.html',
  styleUrl: './project-type-page.component.scss',
})
export class ProjectTypePageComponent {
  projectType: IIssueType;
  isLoading = false;

  constructor(
    private issueTypeController: IssueTypeControllerService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getProjectType();
  }

  getProjectType(): void {
    this.isLoading = true;
    this.issueTypeController.getIssueType(this.route.snapshot.params['id']).subscribe({
      next: (projectType) => {
        this.projectType = projectType;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      },
    });
  }

  openCreateIssueDialog(): void {}
}
