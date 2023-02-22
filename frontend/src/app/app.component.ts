import { Component, OnInit } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { AptitudesComponent } from './aptitudes/aptitudes.component';
import { BackgroundComponent } from './components/background/background.component';
import { PageComponent } from './components/page/page.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BackgroundComponent,
    ResumeComponent,
    ProfileComponent,
    PageComponent,
    AboutMeComponent,
    ProjectsComponent,
    AptitudesComponent,
    ContactComponent,
  ],
  template: `
    <main class="snap-y snap-proximity">
      <section class="animation-hidden snap-center">
        <div class="container flex items-center justify-center p-4">
          <app-profile class="w-full" />
        </div>
      </section>
      <section class="animation-hidden snap-center">
        <div class="container flex items-center justify-center p-4">
          <app-about-me class="w-full" />
        </div>
      </section>
      <section class="animation-hidden snap-center">
        <div class="container flex items-center justify-center p-4">
          <app-resume class="w-full" />
        </div>
      </section>
      <section class="animation-hidden snap-center">
        <div class="container flex items-center justify-center p-4">
          <app-aptitudes class="w-full" />
        </div>
      </section>
      <section class="animation-hidden snap-center">
        <div class="container flex items-center justify-center p-4">
          <app-projects class="w-full" />
        </div>
      </section>
      <section class="animation-hidden snap-center">
        <div class="container flex items-center justify-center p-4">
          <app-contact class="w-full" />
        </div>
      </section>
    </main>
    <app-background />
  `,
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animation-visible');
        } else {
          entry.target.classList.remove('animation-visible');
        }
      });
    });

    const elements = document.querySelectorAll('.animation-hidden');

    elements.forEach((element) => observer.observe(element));
  }
}
