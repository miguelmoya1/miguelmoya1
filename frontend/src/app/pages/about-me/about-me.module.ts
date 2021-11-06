import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [AboutMeComponent],
})
export class AboutMeModule {}
