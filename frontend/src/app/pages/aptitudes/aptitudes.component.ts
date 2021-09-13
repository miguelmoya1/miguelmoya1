import { Component } from '@angular/core';
import { Types } from '../../components/svg/svg.component';
import { openClose } from '../../shared/animations/openClose.aimation';

type Aptitude = {
  title: string;
  value: Types;
};

@Component({
  selector: 'app-aptitudes',
  template: `
    <app-page addClass="sm:max-h-96 sm:w-96">
      <ng-container *ngFor="let aptitude of aptitudes">
        <app-title [title]="aptitude.title"></app-title>
        <div class="grid sm:grid-cols-2 justify-center">
          <div
            class="mt-4 text-transparent hover:text-blue-500 grid "
            *ngFor="let data of aptitude.data"
          >
            <app-svg [type]="data.value"></app-svg>
            <h2 class="duration-500 font-bold text-xl mt-4 mb-8 text-center">
              {{ data.title }}
            </h2>
          </div>
        </div>
      </ng-container>
    </app-page>
  `,
  animations: [openClose],
})
export class AptitudesComponent {
  public title = 'Aptitudes';

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
    {
      title: 'Programming Languages',
      data: [
        { title: 'Typescript', value: 'typescript' },
        { title: 'Javascript', value: 'javascript' },
      ],
    },
    {
      title: 'Languages',
      data: [
        { title: 'English', value: 'english' },
        { title: 'Spanish', value: 'spanish' },
      ],
    },
  ];
}
