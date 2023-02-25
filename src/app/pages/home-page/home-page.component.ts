import { Component } from '@angular/core';

@Component({
  selector: 'ptf-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  company = {
    name: 'Lascaux',
    url: 'https://www.lascaux.it/'
  };

}
