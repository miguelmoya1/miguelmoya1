import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'about-me', pathMatch: 'full' },
  {
    path: 'about-me',
    loadChildren: () =>
      import('./pages/about-me/about-me.module').then((m) => m.AboutMeModule),
  },
  {
    path: 'aptitudes',
    loadChildren: () =>
      import('./pages/aptitudes/aptitudes.module').then(
        (m) => m.AptitudesModule
      ),
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./pages/resume/resume.module').then((m) => m.ResumeModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
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
