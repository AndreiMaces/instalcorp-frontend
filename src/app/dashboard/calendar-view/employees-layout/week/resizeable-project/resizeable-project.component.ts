import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgForOf, NgIf, NgStyle } from '@angular/common';
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';
import { IEmployeeProject } from '../../../../../core/models/IEmployeeProject';
import { DateHelperService } from '../../../../../core/helpers/date-helper.service';

@Component({
  selector: 'app-resizeable-project',
  standalone: true,
  imports: [CdkDrag, NgForOf, ResizableModule, NgStyle, NgIf],
  templateUrl: './resizeable-project.component.html',
  styleUrl: './resizeable-project.component.scss',
})
export class ResizeableProjectComponent implements OnInit {
  @Input({
    transform: (value: IEmployeeProject): IEmployeeProject & { style: { left: string; width: string } } => {
      return {
        ...value,
        style: {
          left: '0px',
          width: '200px',
        },
      } as unknown as IEmployeeProject & { style: { left: string; width: string } };
    },
  })
  employeeProject: IEmployeeProject & { style: { left: string; width: string } };
  @ViewChild('container') div: ElementRef;
  isDragDisabled = false;
  maxSpace = 998;

  ngOnInit(): void {
    this.computeStyle();
  }

  computeStyle(): any {
    this.employeeProject.style = {
      width: `${this.computeWidth()}px`,
      left: `${this.computeLeft()}px`,
    };
  }

  computeLeft(): number {
    const startDate = new Date(this.employeeProject.startDate);
    const monday = DateHelperService.getMonday(startDate);
    const daysDifference = startDate.getDate() - monday.getDate();
    let left = daysDifference * 200;
    if (left + this.computeWidth() > this.maxSpace) left = this.maxSpace - this.computeWidth();
    return left;
  }

  computeWidth(): number {
    const startDate = new Date(this.employeeProject.startDate);
    const endDate = new Date(this.employeeProject.endDate);
    const daysDifference = endDate.getDate() - startDate.getDate();
    let width = (daysDifference + 1) * 200;
    if (width > this.maxSpace) width = this.maxSpace;
    return width;
  }

  onResizeEnd(event: ResizeEvent): void {
    event.rectangle.width = event.rectangle.width < 200 ? 200 : Math.trunc(event.rectangle.width / 200 + 1) * 200;
    if (event.rectangle.width > this.maxSpace) event.rectangle.width = this.maxSpace;
    event.rectangle.left = event.rectangle.left - (window.innerWidth - this.div.nativeElement.clientWidth) / 2 - 91;

    if ((event.edges.left as number) < 0) {
      if (!this.canStretchLeft) {
        event.rectangle.width = parseInt(this.employeeProject.style.width);
      } else if (this.canStretchLeft) {
        if (event.rectangle.width > parseInt(this.employeeProject.style.left) + parseInt(this.employeeProject.style.width)) {
          event.rectangle.width = parseInt(this.employeeProject.style.left) + parseInt(this.employeeProject.style.width);
        }
      }
    }

    event.rectangle.left = event.rectangle.left < 200 ? 0 : Math.trunc(event.rectangle.left / 200) * 200;

    if (event.rectangle.left + event.rectangle.width > this.maxSpace) {
      event.rectangle.width = this.maxSpace - event.rectangle.left;
    }
    this.employeeProject.style = {
      left: `${event.rectangle.left}px`,
      width: `${event.rectangle.width}px`,
    };
    this.isDragDisabled = false;
  }

  get canStretchLeft(): boolean {
    return parseInt(this.employeeProject.style.left) !== 0;
  }
}
