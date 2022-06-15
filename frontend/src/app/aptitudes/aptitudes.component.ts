import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgComponent, Types } from '../components/svg/svg.component';
import { TitleComponent } from '../components/title/title.component';

type Aptitude = {
  title: string;
  value: Types;
};

@Component({
  selector: 'app-aptitudes',
  standalone: true,
  imports: [TitleComponent, SvgComponent, CommonModule],
  template: `
    <ng-container *ngFor="let aptitude of aptitudes">
      <app-title [title]="aptitude.title"></app-title>
      <div class="grid xl:grid-cols-2 justify-items-center">
        <div
          class="mt-4 text-transparent hover:text-blue-500 grid"
          *ngFor="let data of aptitude.data"
        >
          <app-svg [type]="data.value"></app-svg>
          <h2 class="duration-500 font-bold text-xl mt-4 mb-8 text-center">
            {{ data.title }}
          </h2>
        </div>
      </div>
    </ng-container>
  `,
})
export class AptitudesComponent {
  public aptitudes: { title: string; data: Aptitude[] }[] = [
    {
      title: 'Frameworks',
      data: [
        { title: 'Angular', value: 'angular' },
        { title: 'Nestjs', value: 'nest' },
        { title: 'Ionic', value: 'ionic' },
        { title: 'Node', value: 'node' },
        { title: 'React', value: 'react' },
        { title: 'Nextjs', value: 'next' },
      ],
    },
  ];
}
