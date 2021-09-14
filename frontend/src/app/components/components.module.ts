import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { MenuComponent } from './menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { TableComponent } from './table/table.component';
import { SvgComponent } from './svg/svg.component';

const all = [
  PageComponent,
  MenuComponent,
  TitleComponent,
  TableComponent,
  SvgComponent,
];

@NgModule({
  declarations: [...all],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [...all],
})
export class ComponentsModule {}
