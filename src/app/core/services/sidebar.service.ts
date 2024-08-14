import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebar: MatDrawer;

  constructor() {}

  set sidebarRef(sidebar: MatDrawer) {
    this.sidebar = sidebar;
  }

  public toggle(): void {
    this.sidebar.toggle();
  }
}
