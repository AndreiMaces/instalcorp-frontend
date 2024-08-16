import { Component, Input } from '@angular/core';
import { IIssue } from '../../../../core/models/IIssue';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-type-issue',
  standalone: true,
  imports: [MatIcon, MatIconButton, MatMenu, MatMenuItem, RouterLink, MatMenuTrigger],
  templateUrl: './project-type-issue.component.html',
  styleUrl: './project-type-issue.component.scss',
})
export class ProjectTypeIssueComponent {
  @Input() issue: IIssue;

  openEditIssueDialog(): void {}

  openDeleteIssueDialog(): void {}
}
