import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page.component';
import { SocialLinksComponent } from "../../components/social-links/social-links.component";

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent
  }
];

@NgModule({
    declarations: [
        ContactPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SocialLinksComponent
    ]
})
export class ContactPageModule { }
