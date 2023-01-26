import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: true,
  template: `
    <div
      class="mx-auto w-11/12 p-4 rounded-xl sm:w-120 bg-gray-800 z-10 xl:overflow-x-auto xl:h-170 xl:p-8 xl:w-180 mb-4 xl:mb-0"
    >
      <ng-content />
    </div>
  `,
})
export class PageComponent {}
