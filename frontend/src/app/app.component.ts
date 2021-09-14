import { Component } from '@angular/core';
import { openClose } from './shared/animations/openClose.aimation';

@Component({
  selector: 'app-root',
  animations: [openClose],
  template: `
    <div
      class="h-full min-h-screen w-full xl:flex xl:justify-center xl:items-center"
    >
      <main
        class="flex flex-col items-stretch justify-center z-10 xl:w-min xl:gap-4 xl:flex-row xl:items-center xl:mx-4"
      >
        <app-menu class="sticky top-0 xl:self-start"></app-menu>
        <div class="xl:flex xl:items-center">
          <app-profile></app-profile>
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
    <app-background></app-background>
  `,
})
export class AppComponent {}
