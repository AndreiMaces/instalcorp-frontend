import { Component, Input, ViewChild } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgForOf, NgStyle } from '@angular/common';
import { ResizableModule, ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-resizeable-project',
  standalone: true,
  imports: [CdkDrag, NgForOf, ResizableModule, NgStyle],
  templateUrl: './resizeable-project.component.html',
  styleUrl: './resizeable-project.component.scss',
})
export class ResizeableProjectComponent {
  @Input() project: any = {
    style: {
      left: '0px',
      width: '200px',
    },
  };
  @ViewChild('container') div: { nativeElement: HTMLElement };
  isDragDisabled = false;

  validate(event: ResizeEvent): boolean {
    return event.rectangle.width <= 995;
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log(event);

    event.rectangle.width = event.rectangle.width < 200 ? 200 : Math.trunc(event.rectangle.width / 200 + 1) * 200;

    event.rectangle.left = event.rectangle.left - (window.innerWidth - this.div.nativeElement.clientWidth) / 2 - 91;
    console.log('event.rectangle.left - (window.innerWidth - this.div.nativeElement.clientWidth) / 2 - 91', event.rectangle.left);
    event.rectangle.left = event.rectangle.left < 200 ? 0 : Math.trunc(event.rectangle.left / 200) * 200;
    console.log('event.rectangle.left < 200 ? 0 : Math.trunc(event.rectangle.left / 200) * 200', event.rectangle.left);

    //if (Math.abs(event?.edges?.left as number) < 200) return;

    this.project.style = {
      left: `${event.rectangle.left}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`,
    };
    this.isDragDisabled = false;
  }
}
