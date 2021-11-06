import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <div
      class="relative mb-8 flex items-center"
      [ngClass]="{ 'mt-16': withMarginTop }"
    >
      <div class="text-2xl text-center text-blue-500 font-bold">
        {{ title?.charAt(0) }}
      </div>
      <div class="text-gray-200 text-2xl font-bold">
        {{ title?.slice(1) }}
      </div>
    </div>
  `,
})
export class TitleComponent {
  @Input() title!: string;
  @Input() withMarginTop = true;
}
