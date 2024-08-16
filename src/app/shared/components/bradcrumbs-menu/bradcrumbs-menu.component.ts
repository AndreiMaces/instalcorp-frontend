import { Component } from '@angular/core';
import { BreadcrumbService } from '../../../core/services/breadcrumb.service';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bradcrumbs-menu',
  standalone: true,
  imports: [NgIf, NgForOf, RouterLink],
  templateUrl: './bradcrumbs-menu.component.html',
  styleUrl: './bradcrumbs-menu.component.scss',
})
export class BradcrumbsMenuComponent {
  breadcrumbs: Array<{ label: string; url: string }> = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs;
  }
}
