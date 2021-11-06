import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div
      class="h-full min-h-screen w-full xl:flex xl:justify-center xl:items-center"
    >
      <main
        class="flex flex-col items-stretch justify-center z-10 xl:w-min xl:gap-4 xl:flex-row xl:items-center xl:mx-4"
      >
        <div class="xl:flex xl:items-center gap-4">
          <app-profile></app-profile>
          <app-page>
            <app-about-me></app-about-me>
            <app-projects></app-projects>
            <app-resume></app-resume>
            <app-aptitudes></app-aptitudes>
          </app-page>
        </div>
      </main>
    </div>
    <app-background></app-background>
  `,
})
export class AppComponent {}
