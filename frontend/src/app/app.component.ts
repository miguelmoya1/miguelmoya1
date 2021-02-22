import { Component } from '@angular/core';
import { openClose } from './shared/animations/openClose.aimation';

@Component({
  selector: 'app-root',
  animations: [openClose],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
