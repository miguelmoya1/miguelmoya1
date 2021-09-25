import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([{ path: '', component: ContactComponent }]),
  ],
})
export class ContactModule {}
