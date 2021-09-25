import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <app-page>
      <app-title [title]="'Projects'"></app-title>
      <a target="_blank" [href]="project.link" *ngFor="let project of projects">
        <div class="w-full h-32 rounded flex items-center">
          <img
            class="w-28 h-28 rounded-full"
            [src]="project.image"
            [alt]="project.name"
          />
          <div class="text-xl text-gray-200 font-bold">{{ project.name }}</div>
        </div>
      </a>
    </app-page>
  `,
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Perseo - Games',
      link: 'https://perseo.games',
      image: './assets/pg.png',
    },
  ];
}
