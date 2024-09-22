import { Component, Input } from '@angular/core';
import { EStatus } from '../../../shared/enums/EStatus';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-project-status',
  standalone: true,
  imports: [NgIf],
  templateUrl: './project-status.component.html',
  styleUrl: './project-status.component.scss',
})
export class ProjectStatusComponent {
  @Input() status: EStatus;
  protected readonly EProjectStatus = EStatus;
}
