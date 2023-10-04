import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
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
      <app-title [title]="aptitudes().title" />
      <div class="grid xl:grid-cols-2 justify-items-center">
        <div
          class="mt-4 text-transparent hover:text-primary grid"
          *ngFor="let data of aptitudes().data"
        >
          <app-svg [type]="data.value" />
          <h2 class="duration-500 font-bold text-xl mt-4 mb-8 text-center">
            {{ data.title }}
          </h2>
        </div>
      </div>
  `,
})
export class AptitudesComponent {
  public readonly title = signal('Aptitudes');

  protected readonly aptitudes = signal<{title: string, data: {title: string, value: Types }[]}>(
    {
      title: 'Frameworks',
      data: [
        { title: 'Angular', value: 'angular' as Types },
        { title: 'Nestjs', value: 'nest' as Types  },
        { title: 'Ionic', value: 'ionic' as Types  },
        { title: 'Node', value: 'node' as Types  },
        { title: 'React', value: 'react' as Types  },
        { title: 'Nextjs', value: 'next' as Types  },
      ],
    },
  );
}
