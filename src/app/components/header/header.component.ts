import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
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

  @Output() onMobileMenuToggle = new EventEmitter<boolean>;

  isMobile: boolean = window.innerWidth < 600;
  showMobileMenu = false;

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
      name: 'Works',
      route: 'works'
    }, 
    {
      name: 'Résumé',
      fileLocation: 'assets/resume/Andrea-Rotesi-Resume-DEV.pdf'
    }
  ];

  ngOnInit() {
    this.randomMantra = this.mantras[Math.floor(Math.random() * this.mantras.length)];
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 600;
  }

  openResume(fileLocation: string) {
    window.open(fileLocation, '_blank');
  }

  toggleMobileMenu(showMenu: boolean) {
    this.showMobileMenu = showMenu;
    this.onMobileMenuToggle.emit(this.showMobileMenu);
  }

}
