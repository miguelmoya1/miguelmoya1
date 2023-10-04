import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../components/title/title.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <ng-container *ngFor="let study of resumes()">
      <app-title [title]="study.title" />
      <div
        *ngIf="study.totalYears"
        class="italic -mt-8 mb-8 text-sm ml-2 text-gray-500"
      >
        {{ study.totalYears }} years of experience
      </div>

      <div
        class="flex flex-col relative mb-8 mx-4"
        *ngFor="let experience of study.data; let i = index"
      >
        <div
          class="w-8/12 text-primary font-bold text-lg overflow-ellipsis overflow-hidden whitespace-nowrap"
        >
          {{ experience.title }}
        </div>
        <div class="text-sm text-gray-400 italic">
          {{ experience.subtitle }}
        </div>
        <div
          class="absolute right-0 top-0 text-xs text-gray-600 border-gray-600 p-1 border rounded"
          [ngClass]="{
            '!text-primary border-primary': i === 0 && study.first
          }"
        >
          {{ experience.years }}
        </div>
      </div>
    </ng-container>
  `,
})
export class ResumeComponent {
  public readonly title = signal('Resume');
  
  protected readonly experience = signal([
    {
      title: 'Nax Solutions',
      subtitle: 'Frontend Lead Developer',
      years: '2023 - now',
    },
    {
      title: 'Gesco 1880',
      subtitle: 'Frontend Developer',
      years: '2021 - 2023',
    },
    {
      title: 'Boon Agency',
      subtitle: 'Full Stack Developer',
      years: '2018 - 2021',
    },
    {
      title: 'Conwork | Partner i+d+i tecnológico',
      subtitle: 'Full Stack Developer',
      years: '2017 - 2018',
    },
  ]);

  protected readonly education = signal([
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
  ]);

  protected readonly totalYears = signal(new Date().getFullYear() - 2017);


  protected readonly resumes = computed(() => [
    { title: 'Experience', data: this.experience(), first: true, totalYears: this.totalYears() },
    { title: 'Studies', data: this.education() },
  ]);

}
