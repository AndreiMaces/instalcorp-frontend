import { Component } from '@angular/core';

@Component({
  selector: 'app-project-types',
  standalone: true,
  imports: [],
  host: {
    class: 'flex-grow',
  },
  templateUrl: './project-types.component.html',
  styleUrl: './project-types.component.scss',
})
export class ProjectTypesComponent {
  constructor() {}
}
