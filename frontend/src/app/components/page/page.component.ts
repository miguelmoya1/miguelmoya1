import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <div
      class="mx-auto w-11/12 my-4 rounded-xl bg-gray-800 z-10 sm:w-full sm:overflow-x-auto"
      [ngClass]="[addClass, withPadding ? 'p-4' : '']"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class PageComponent {
  @Input() withPadding = true;
  @Input() addClass = '';
}
