import { Component } from '@angular/core';
import { openClose } from './shared/animations/openClose.aimation';

@Component({
  selector: 'app-root',
  animations: [openClose],
  template: `
    <main
      class="flex flex-col items-stretch justify-center z-10 sm:gap-4 sm:flex-row sm:items-center sm:h-screen sm:mx-4"
    >
      <app-menu class="sticky top-0"></app-menu>
      <div class="sm:flex sm:items-center">
        <app-profile></app-profile>
        <router-outlet></router-outlet>
      </div>
    </main>

    <app-background></app-background>
  `,
})
export class AppComponent {}
