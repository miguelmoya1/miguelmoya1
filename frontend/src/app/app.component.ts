import { Component } from '@angular/core';
import { openClose } from './shared/animations/openClose.aimation';

@Component({
  selector: 'app-root',
  animations: [openClose],
  template: `
    <main class="flex flex-col items-stretch justify-center z-10">
      <app-menu></app-menu>
      <app-profile></app-profile>

      <router-outlet></router-outlet>
    </main>

    <app-background></app-background>
  `,
})
export class AppComponent {
  constructor() {}
}
