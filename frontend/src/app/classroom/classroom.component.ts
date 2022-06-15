import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../components/title/title.component';

@Component({
  selector: 'app-classroom',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="'Classroom'"></app-title>
    <a
      class="rounded hover:bg-gray-600 bg-opacity-50 mb-4 h-16 flex items-center justify-center"
      target="_blank"
      href="https://classroom.miguelmo.dev"
    >
      <div class="w-full flex items-center text-white">
        <div class="w-2/12 flex items-center justify-center">
          <img class="w-16 h-16" src="assets/favicon.ico" alt="classroom" />
        </div>
        <div class="text-xl text-gray-200 font-bold">Classroom</div>
      </div>
    </a>
  `,
})
export class ClassroomComponent {}
