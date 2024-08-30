import { Component } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-resizeable-project',
  standalone: true,
  imports: [CdkDrag, NgForOf],
  templateUrl: './resizeable-project.component.html',
  styleUrl: './resizeable-project.component.scss',
})
export class ResizeableProjectComponent {
  @Input() project: any;
}
