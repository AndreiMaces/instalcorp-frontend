import { ChangeDetectorRef, Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NgForOf } from '@angular/common';
import { ResizeableProjectComponent } from './resizeable-project/resizeable-project.component';

export interface IDay {
  name: string;
  id: number;
}

@Component({
  selector: 'app-week',
  standalone: true,
  imports: [CdkDrag, CdkDropList, CdkDropListGroup, NgForOf, ResizeableProjectComponent, DragDropModule],
  templateUrl: './week.component.html',
  styleUrl: './week.component.scss',
})
export class WeekComponent {
  days: any[][] = [
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

  constructor(private cd: ChangeDetectorRef) {}

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
    console.log(this.days);
  }

  getLinkedLists(index: number): string[] {
    const value = this?.days?.map((day, i) => 'list' + i);
    return value;
  }
}
