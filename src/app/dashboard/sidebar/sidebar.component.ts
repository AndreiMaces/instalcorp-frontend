import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatRipple } from '@angular/material/core';
import { SidebarService } from '../../core/services/sidebar.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, MatRipple, MatIcon],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private sidebarService: SidebarService) {}

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }
}
