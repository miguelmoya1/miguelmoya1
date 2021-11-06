import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
