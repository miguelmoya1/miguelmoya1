import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AptitudesComponent } from './aptitudes.component';
import { RouterModule } from '@angular/router';
import { TitleModule } from '../title/title.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AptitudesComponent],
  imports: [
    CommonModule,
    TitleModule,
    MatProgressSpinnerModule,
    RouterModule.forChild([{ path: '', component: AptitudesComponent }]),
  ],
})
export class AptitudesModule {}
