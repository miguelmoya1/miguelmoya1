import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Interceptor } from './shared/interceptor/interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { BackgroundComponent } from './components/background/background.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ComponentsModule } from './components/components.module';
import { AboutMeModule } from './pages/about-me/about-me.module';
import { AptitudesModule } from './pages/aptitudes/aptitudes.module';
import { ContactModule } from './pages/contact/contact.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { ResumeModule } from './pages/resume/resume.module';

@NgModule({
  declarations: [AppComponent, BackgroundComponent, ProfileComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    AboutMeModule,
    AptitudesModule,
    ContactModule,
    ProjectsModule,
    ResumeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
