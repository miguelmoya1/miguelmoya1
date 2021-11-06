import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptitudesComponent } from './aptitudes.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [AptitudesComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [AptitudesComponent],
})
export class AptitudesModule {}
