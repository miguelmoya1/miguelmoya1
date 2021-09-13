import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IRoutes } from '../../shared/types/routes';

@Component({
  selector: 'app-menu',
  template: `
    <app-page>
      <div class="flex justify-between items-center gap-4 sm:flex-col">
        <ng-container *ngFor="let route of routes">
          <a
            [routerLink]="route.route"
            routerLinkActive="router-link-active"
            [ngClass]="{
              'text-blue-500':
                actualRoute === route.name[0] || actualRoute === route.name[1]
            }"
            class="flex flex-col items-center justify-center text-gray-200"
          >
            <mat-icon>{{ route.icon }}</mat-icon>
            <div class="text-xs text-center">
              {{ route.title }}
            </div>
          </a>
        </ng-container>
      </div>
    </app-page>
  `,
})
export class MenuComponent {
  actualRoute!: IRoutes;
  routes = [
    {
      name: ['about-me', ''],
      route: ['/about-me'],
      icon: 'person',
      title: 'About me',
    },
    {
      name: ['aptitudes'],
      route: ['/aptitudes'],
      icon: 'handyman',
      title: 'Aptitudes',
    },
    {
      name: ['resume'],
      route: ['/resume'],
      icon: 'build',
      title: 'Resume',
    },
    {
      name: ['projects'],
      route: ['/projects'],
      icon: 'work',
      title: 'Projects',
    },
    {
      name: ['contact'],
      route: ['/contact'],
      icon: 'alternate_email',
      title: 'Contact',
    },
  ];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter<any>((event) => event instanceof NavigationEnd))
      .subscribe(
        (event) => (this.actualRoute = event.url.replace(/\//gi, '') as IRoutes)
      );
  }
}
