import { Component, Input } from '@angular/core';
import { EProjectStatus } from '../../../shared/enums/EProjectStatus';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-issue-status',
  standalone: true,
  imports: [NgIf],
  templateUrl: './issue-status.component.html',
  styleUrl: './issue-status.component.scss',
})
export class IssueStatusComponent {
  @Input() status: EProjectStatus;
  protected readonly EProjectStatus = EProjectStatus;
}
