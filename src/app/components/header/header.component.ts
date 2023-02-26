import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'ptf-header',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient) { }

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
    }, 
    {
      name: 'Résumé',
      fileLocation: 'assets/resume/Rotesi-Resume-Dev-ENG.pdf'
    }
  ]

  ngOnInit() {
    this.randomMantra = this.mantras[Math.floor(Math.random() * this.mantras.length)];
  }

  openResume(fileLocation: string) {
    window.open(fileLocation, '_blank');
  }

}
