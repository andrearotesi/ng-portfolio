import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksPageComponent } from './works-page.component';
import { RouterModule, Routes } from '@angular/router';
import { WorkItemComponent } from 'src/app/components/work-item/work-item.component';

const routes: Routes = [
  { 
    path: '',
    component: WorksPageComponent
  }
];

@NgModule({
  declarations: [
    WorksPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WorkItemComponent
  ]
})
export class WorksPageModule { }
