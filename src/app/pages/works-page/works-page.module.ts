import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksPageComponent } from './works-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    component: WorksPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WorksPageModule { }
