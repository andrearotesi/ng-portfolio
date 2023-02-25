import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ptf-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  randomMantra: string = 'You shouldn\'t see this';

  mantras: string[] = [
    'Today is a great day to break production',
    'It\'s not a feature, it\'s a bug',
    'Have you finished your automated tests yet?',
    'How to center a div?',
    '!{false} - it\'s funny because it\'s true',
    'I � Unicode!',
  ];

  navItems = [
    {
      name: 'Home',
      route: ''
    }
  ]

  ngOnInit(): void {
    this.randomMantra = this.mantras[Math.floor(Math.random() * this.mantras.length)];
  }

}
