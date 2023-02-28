import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) 
  },
  { 
    path: 'works',
    loadChildren: () => import('./pages/works-page/works-page.module').then(m => m.WorksPageModule) 
  },
  { 
    path: 'contact',
    loadChildren: () => import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
