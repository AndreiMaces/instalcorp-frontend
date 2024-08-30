import { Component } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgForOf } from '@angular/common';
import { ResizeableProjectComponent } from './resizeable-project/resizeable-project.component';

@Component({
  selector: 'app-week',
  standalone: true,
  imports: [CdkDrag, CdkDropList, CdkDropListGroup, NgForOf, ResizeableProjectComponent],
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss',
})
export class WeekComponent {
  days: { name: string; id: number }[][] = [
    [
      {
        name: 'Get to work',
        id: 1,
      },
      {
        name: 'Pick up groceries',
        id: 2,
      },
    ],
    [
      {
        name: 'Get to work',
        id: 3,
      },
      {
        name: 'Pick up groceries',
        id: 4,
      },
    ],
    [
      {
        name: 'Get to work',
        id: 5,
      },
      {
        name: 'Pick up groceries',
        id: 6,
      },
    ],
    [
      {
        name: 'Get to work',
        id: 7,
      },
      {
        name: 'Pick up groceries',
        id: 8,
      },
    ],
    [
      {
        name: 'Get to work',
        id: 9,
      },
      {
        name: 'Pick up groceries',
        id: 10,
      },
    ],
  ];

  drop(event: CdkDragDrop<{ name: string; id: number }[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
