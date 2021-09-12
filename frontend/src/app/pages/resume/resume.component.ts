import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  template: `
    <app-page>
      <div class="mb-16" *ngFor="let study of resumes">
        <app-title [title]="study.title"></app-title>

        <div
          class="flex flex-col relative my-4"
          *ngFor="let experience of study.data; let i = index"
        >
          <div
            class="w-8/12 text-blue-500 font-bold text-lg overflow-ellipsis overflow-hidden whitespace-nowrap"
          >
            {{ experience.title }}
          </div>
          <div class="text-sm text-gray-400 italic">
            {{ experience.subtitle }}
          </div>
          <div
            class="absolute right-0 top-0 text-xs text-gray-600 border-gray-600 p-1 border rounded"
            [ngClass]="{
              'text-blue-500 border-blue-500': i === 0 && study.first
            }"
          >
            {{ experience.years }}
          </div>
        </div>
      </div>
    </app-page>
  `,
})
export class ResumeComponent {
  public title = 'Resume';
  public experience = [
    {
      title: 'Boon Agency.',
      subtitle: 'Full Stack Developer',
      years: '2018 - now',
    },
    {
      title: 'Conwork | Partner i+d+i tecnológico.',
      subtitle: 'Full Stack Developer',
      years: '2017 - 2018',
    },
  ];
  public education = [
    {
      title: 'IES San Vicente del Raspeig.',
      subtitle: 'Técnico Superior en Desarrollo de Aplicaciones Web',
      years: '2015 - 2017',
    },
    {
      title: 'IES San Vicente del Raspeig.',
      subtitle: 'Técnico en Sistemas Microinformáticos y Redes',
      years: '2012 - 2015',
    },
  ];
  public resumes = [
    { title: 'Experience', data: this.experience, first: true },
    { title: 'Studies', data: this.education },
  ];
}
