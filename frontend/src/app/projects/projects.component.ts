import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '../components/title/title.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TitleComponent, CommonModule],
  template: `
    <app-title [withMarginTop]="false" [title]="'Projects'" />
    <a
      class="rounded hover:bg-gray-600 bg-opacity-50 mb-4 h-16 flex items-center justify-center"
      target="_blank"
      [href]="project.link"
      *ngFor="let project of projects()"
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
  public readonly title = signal('Projects');
  
  protected readonly projects = signal([
    {
      name: 'Playrol.app',
      link: 'https://playrol.app',
      
    },
    {
      name: 'sequelize-do-migrations',
      link: 'https://www.npmjs.com/package/sequelize-do-migrations',
      image: './assets/npm.svg',
      mini: true,
    },
    {
      name: 'Outfits',
      link: 'https://outfit.support',
      image: './assets/outfit.png',
      mini: true,
    },
    {
      name: 'Classroom',
      link: 'https://classroom.miguelmo.dev',
      image: './assets/favicon.ico',
      mini: true,
    },
    {
      name: 'Perseo - Games',
      link: 'https://perseo.games',
      image: './assets/pg.png',
    },
  ]);
}
