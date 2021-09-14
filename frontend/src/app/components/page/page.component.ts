import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <div
      class="mx-auto w-11/12 my-4 p-4 rounded-xl sm:w-120 bg-gray-800 z-10 xl:overflow-x-auto xl:h-160 xl:p-8 xl:w-180 xl:rounded-l-none"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class PageComponent {}
