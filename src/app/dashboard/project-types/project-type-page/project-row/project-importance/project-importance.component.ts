import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { EProjectImportance } from '../../../shared/enums/EProjectImportance';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-project-importance',
  standalone: true,
  imports: [NgIf, MatTooltip],
  templateUrl: './project-importance.component.html',
  styleUrl: './project-importance.component.scss',
})
export class ProjectImportanceComponent {
  @Input() importance: number;

  protected readonly EProjectImportance = EProjectImportance;
}
