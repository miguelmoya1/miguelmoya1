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
    <app-page>
      <app-title [title]="'Frameworks'"></app-title>

      <ng-container *ngFor="let aptitude of aptitudes">
        <div class="aptitude" *ngFor="let data of aptitude.data">
          <app-svg [type]="data.value"></app-svg>
          <h2 class="title">{{ data.title }}</h2>
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
      ],
    },
  ];
}
