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

  aboutMe = {
    whoAmI: {
      title: 'Who am I?',
      info: `Ciao! I'm Andrea, I'm a Full Stack Engineer with a Front End focus and a vibrant
      passion for tech and design. I crave the satisfaction of solving complex
      problems, so that's why I am so passionate about coding!`
    },
    whatDoIDo: {
      title: 'What do I do?',
      info: `Many things! After my nine-to-five, I like to challenge myself with coding 
      projects (such as this website) and constantly work on my skills. I use my newly acquired
      knowledge to help my colleagues and other dev comunity members. Oh, and I also love skiing!`
    },
  }

}
