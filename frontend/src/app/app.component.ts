import { Component } from '@angular/core';
import { openClose } from './shared/animations/openClose.aimation';
import { IRoutes } from './shared/types/routes';

@Component({
  selector: 'app-root',
  animations: [openClose],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public actualPage: IRoutes = 'contact';

  changeRoute(actualPage: IRoutes) {
    this.actualPage = actualPage;
  }
}
