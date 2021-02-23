import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { openClose } from './shared/animations/openClose.aimation';

@Component({
  selector: 'app-root',
  animations: [openClose],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name!: string;
  constructor(private router: Router) {}

  public setNamePage() {
    this.name = this.router.url.replace(/\//g, '');
  }
}
