import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-view',
  standalone: true,
  host: {
    class: 'flex-grow',
  },
  imports: [],
  templateUrl: './calendar-view.component.html',
  styleUrl: './calendar-view.component.scss',
})
export class CalendarViewComponent {}
