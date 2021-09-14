import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: AboutMeComponent }]),
  ],
})
export class AboutMeModule {}
