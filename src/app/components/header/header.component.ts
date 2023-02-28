import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NavItem } from './interfaces/nav-item.interface';

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

  navItems: NavItem[] = [
    {
      displayName: 'Home',
      route: ''
    },
    {
      displayName: 'Works',
      route: 'works'
    }, 
    {
      displayName: 'Résumé',
      fileLocation: 'assets/resume/Andrea-Rotesi-Resume-DEV.pdf'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.randomMantra = this.mantras[Math.floor(Math.random() * this.mantras.length)];
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 600;
  }

  // Navigates to the selected page and closes the mobile menu
  openPage(item: NavItem) {
    if (item.fileLocation) {
      // Item is a file: opening it in a new tab
      window.open(item.fileLocation, '_blank');
    } else if (item.route !== undefined) {
      this.router.navigate([item.route]);
    }

    // If I am on mobile and the menu is open, close it
    if (this.isMobile && this.showMobileMenu) {
      this.toggleMobileMenu(false);
    }
  }

  // Toggles mobile menu view, and emits current value
  toggleMobileMenu(showMenu: boolean) {
    this.showMobileMenu = showMenu;
    this.onMobileMenuToggle.emit(this.showMobileMenu);
  }

}
