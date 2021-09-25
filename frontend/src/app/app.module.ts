import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Interceptor } from './shared/interceptor/interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { BackgroundComponent } from './components/background/background.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent, BackgroundComponent, ProfileComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    ComponentsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
