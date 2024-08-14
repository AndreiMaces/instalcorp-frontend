import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from './core/services/sidebar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'instalcorp-frontend';

  constructor(private sidebarService: SidebarService) {}
}
