import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CardComponent } from "./components/card/card.component";
import { WorksPageComponent } from './pages/works-page/works-page.component';
import { WorkItemComponent } from './components/work-item/work-item.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        WorksPageComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderComponent,
        FooterComponent,
        CardComponent,
        WorkItemComponent
    ]
})
export class AppModule { }
