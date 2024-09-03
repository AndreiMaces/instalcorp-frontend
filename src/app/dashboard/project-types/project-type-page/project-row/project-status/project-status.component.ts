import { Component, Input } from '@angular/core';
import { EProjectStatus } from '../../../shared/enums/EProjectStatus';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-project-status',
  standalone: true,
  imports: [NgIf],
  templateUrl: './project-status.component.html',
  styleUrl: './project-status.component.scss',
})
export class ProjectStatusComponent {
  @Input() status: EProjectStatus;
  protected readonly EProjectStatus = EProjectStatus;
}
