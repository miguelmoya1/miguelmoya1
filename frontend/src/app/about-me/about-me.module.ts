import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { RouterModule } from '@angular/router';
import { TitleModule } from '../title/title.module';
import { TableModule } from '../table/table.module';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    TitleModule,
    TableModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: AboutMeComponent }]),
  ],
})
export class AboutMeModule {}
