import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptitudesComponent } from './aptitudes.component';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [AptitudesComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([{ path: '', component: AptitudesComponent }]),
  ],
})
export class AptitudesModule {}
