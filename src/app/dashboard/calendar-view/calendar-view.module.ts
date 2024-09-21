import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { CalendarViewRoutingModule } from './calendar-view-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CalendarViewRoutingModule, QuillModule.forRoot()],
})
export class CalendarViewModule {}
