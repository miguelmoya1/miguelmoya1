import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { TableModule } from '../table/table.module';
import { TitleModule } from '../title/title.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    TitleModule,
    TableModule,
    RouterModule.forChild([{ path: '', component: ContactComponent }]),
  ],
})
export class ContactModule {}
