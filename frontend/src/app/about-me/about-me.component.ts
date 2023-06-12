import { Component, computed, signal, } from '@angular/core';
import { TableComponent } from '../components/table/table.component';
import { TitleComponent } from '../components/title/title.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TitleComponent, TableComponent],
  template: `
    <app-title [withMarginTop]="false" [title]="title()" />

    <div class="text-gray-200 mx-4 text-justify mb-8">
      <p>{{ description() }}</p>
    </div>

    <app-table [data]="table()" />
  `,
})
export class AboutMeComponent {
  public readonly title = signal('About Me');

  protected readonly date = signal(new Date().getFullYear() - new Date('01/03/2017').getFullYear());
  protected readonly description = computed(() => {
    return `My name is Miguel Moya Ortega. I'm a Full Stack Developer based in San
    Vicente del Raspeig, Spain, and I'm very passionate and dedicated to my
    work. With ${this.date()} years experience as a professional Full Stack
    Developer, I have acquired the skills necessary to build great and premium
    websites, apps and services.`;
  });
  protected readonly table = signal([
    { header: 'residence', value: 'Spain' },
    { header: 'address', value: 'San Vicente del Raspeig, Alicante' },
  ]);
}
