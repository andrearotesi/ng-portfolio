import { Component } from '@angular/core';

@Component({
  selector: 'ptf-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  interests: string[] = [
    'Tech, programming, frameworks, web development',
    'Artificial intelligence',
    'Cars',
    'Wine',
    'Skiing, trekking',
    'Everything else'
  ];

}
