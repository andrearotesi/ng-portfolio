import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ptf-social-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent {

  socials = [
    {
      link: 'https://www.linkedin.com/in/andrea-rotesi/',
      iconPath: 'assets/icons/linkedin-logo.svg'
    },
    {
      link: 'https://github.com/andrearotesi',
      iconPath: 'assets/icons/github-logo.svg'
    }
  ]

}
