import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IRoutes } from '../../shared/types/routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  actualRoute!: IRoutes;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter<any>((event) => event instanceof NavigationEnd))
      .subscribe(
        (event) => (this.actualRoute = event.url.replace(/\//gi, '') as IRoutes)
      );
  }
}
