import { Component, EventEmitter, Output } from '@angular/core';
import { IRoutes } from '../shared/types/routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Output() changeRoute = new EventEmitter<IRoutes>();
  actualRoute: IRoutes = 'about';

  constructor() {}

  public change(route: IRoutes) {
    this.actualRoute = route;
    this.changeRoute.emit(this.actualRoute);
  }
}
