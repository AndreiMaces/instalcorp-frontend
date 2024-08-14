import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenavContainer } from '@angular/material/sidenav';
import { SidebarService } from '../core/services/sidebar.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, MatSidenavContainer, MatDrawerContent, MatDrawer, MatDrawerContainer, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('drawer') drawer: MatDrawer;

  constructor(public sidebarService: SidebarService) {}

  ngAfterViewInit() {
    this.sidebarService.sidebarRef = this.drawer;
  }
}
