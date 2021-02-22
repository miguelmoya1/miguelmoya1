import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'about-me', pathMatch: 'full' },
  {
    path: 'about-me',
    loadChildren: () =>
      import('./about-me/about-me.module').then((m) => m.AboutMeModule),
  },
  {
    path: 'aptitudes',
    loadChildren: () =>
      import('./aptitudes/aptitudes.module').then((m) => m.AptitudesModule),
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./resume/resume.module').then((m) => m.ResumeModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
