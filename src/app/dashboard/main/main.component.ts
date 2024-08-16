import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, MatIcon],
  host: {
    class: 'flex-grow',
  },
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
