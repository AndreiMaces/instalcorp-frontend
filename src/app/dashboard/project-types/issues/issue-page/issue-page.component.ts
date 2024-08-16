import { Component } from '@angular/core';
import { BradcrumbsMenuComponent } from '../../../../shared/components/bradcrumbs-menu/bradcrumbs-menu.component';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { NgForOf, NgIf } from '@angular/common';
import { ProjectTypeComponent } from '../../project-type/project-type.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-issue-page',
  standalone: true,
  imports: [BradcrumbsMenuComponent, MatAnchor, MatButton, MatIcon, MatProgressSpinner, NgForOf, NgIf, ProjectTypeComponent, RouterLink],
  templateUrl: './issue-page.component.html',
  styleUrl: './issue-page.component.scss',
})
export class IssuePageComponent {}
