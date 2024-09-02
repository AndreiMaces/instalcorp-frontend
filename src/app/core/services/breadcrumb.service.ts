import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  breadcrumbs: Array<{ label: string; url: string }> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
    });
  }

  private createBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Array<{ label: string; url: string }> = [],
  ): Array<{ label: string; url: string }> {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child?.snapshot?.url?.map((segment) => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      let label = child?.snapshot?.data['breadcrumb'];
      if (label === 'Project Type' && child?.snapshot?.params['name']) {
        label = child?.snapshot?.params['name'];
      }

      if (label === 'Employee' && child?.snapshot?.params['name']) {
        label = child?.snapshot?.params['name'];
      }

      if (label === 'Issue' && child?.snapshot?.params['issueName']) {
        label = child?.snapshot?.params['issueName'];
      }
      if (!breadcrumbs.find((breadcrumb) => breadcrumb.label === label)) {
        breadcrumbs.push({ label: label, url: url });
      }
      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
