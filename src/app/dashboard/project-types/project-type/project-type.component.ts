import { Component, Input } from '@angular/core';
import { IIssueType } from '../../../core/models/IIssueType';
import {
  MatExpansionPanel,
  MatExpansionPanelActionRow,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-project-type',
  standalone: true,
  imports: [
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatButton,
    MatExpansionPanelActionRow,
    MatIconButton,
    MatSuffix,
    MatIcon,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
  ],
  templateUrl: './project-type.component.html',
  styleUrl: './project-type.component.scss',
})
export class ProjectTypeComponent {
  @Input() projectType: IIssueType;
}
