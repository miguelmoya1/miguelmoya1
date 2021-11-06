import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [ResumeComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [ResumeComponent],
})
export class ResumeModule {}
