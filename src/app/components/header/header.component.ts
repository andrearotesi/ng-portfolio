import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ptf-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  randomMantra: string = 'You shouldn\'t see this';

  mantras: string[] = [
    'Today is a great day to break production',
    'It\'s not a feature, it\'s a bug',
    'Have you finished your automated tests?',
    'How to center a div?',
    '!{false} - it\'s funny because it\'s true'
  ];

  ngOnInit(): void {
    this.randomMantra = this.mantras[Math.floor(Math.random() * this.mantras.length)];
  }

}
