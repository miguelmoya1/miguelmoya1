import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <app-title [title]="'Projects'"></app-title>
    <a
      class="rounded hover:bg-gray-600 bg-opacity-50 mb-4 h-16 flex items-center justify-center"
      target="_blank"
      [href]="project.link"
      *ngFor="let project of projects"
    >
      <div class="w-full flex items-center text-white">
        <div class="w-2/12 flex items-center justify-center">
          <img
            *ngIf="project.image"
            [ngClass]="{
              'w-8 h-8': project.mini,
              'w-16 h-16': !project.mini
            }"
            [src]="project.image"
            [alt]="project.name"
          />
        </div>
        <div class="text-xl text-gray-200 font-bold">
          {{ project.name }}
        </div>
      </div>
    </a>
  `,
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Perseo - Games',
      link: 'https://perseo.games',
      image: './assets/pg.png',
    },
    {
      name: 'sequelize-do-migrations',
      link: 'https://www.npmjs.com/package/sequelize-do-migrations',
      image: './assets/npm.svg',
      mini: true,
    },
  ];
}
