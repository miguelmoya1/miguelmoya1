import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [ContactComponent],
})
export class ContactModule {}
