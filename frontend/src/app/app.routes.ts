import { Routes } from '@angular/router';

const APP_ROUTES: Routes = [{ path: '**', redirectTo: '', pathMatch: 'full' }];

export default APP_ROUTES;
