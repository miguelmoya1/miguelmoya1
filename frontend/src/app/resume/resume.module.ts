import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { RouterModule } from '@angular/router';
import { TitleModule } from '../title/title.module';

@NgModule({
  declarations: [ResumeComponent],
  imports: [
    CommonModule,
    TitleModule,
    RouterModule.forChild([{ path: '', component: ResumeComponent }]),
  ],
})
export class ResumeModule {}
