import { Component } from '@angular/core';

@Component({
  selector: 'ptf-works',
  templateUrl: './works-page.component.html',
  styleUrls: ['./works-page.component.scss']
})
export class WorksPageComponent {
  
  workList = [
    {
      imageUrl: 'assets/images/angular-cert.png',
      title: 'Angular Expert <br> certification',
      description: `GDE issued after a 3-step exam`,
      more: `Do I know everything about Angular? Nope.<br>
      Will I always have the best answer and the most optimized solution? Nope.<br>
      The greatest aspect of this certification was the challenge itself, and most importantly, the studying that I did to obtain it.<br> 
      My Angular confidence and code quality improved dramatically, and it sparked my love for Google's framework.`
    },
    {
      imageUrl: 'assets/images/blob.png',
      title: '<a href="https://andrearotesi.github.io/blob-generator/">Blob Generator</a>',
      description: `Study on CSS manipulation<br>
        Using vanilla JavaScript.`,
      more: `My first side project deserves a spot in the list.<br>
      It's not perfect, but it represent my interest in web development and JavaScript as a whole.<br>
      It's a study project I did where I tried to manipulate CSS using Vanilla JS, while also making sure that it would work on mobile, just for the fun of it all.<br>`
    },
    {
      imageUrl: 'assets/images/handbook-preview.png',
      title: 'English improvement <br> handbook',
      description: `A collection of my best tips.<br>
        <a href="https://www.linkedin.com/posts/andrea-rotesi-0184b5198_how-to-improve-your-english-activity-6998301126357905410-qeOo?utm_source=share&utm_medium=member_desktop">
        Check it out!
        </a>`,
      more: `This project is near and dear to my heart, as it perfectly represent who I am.<br>
      I made it when a couple of team members asked for my help in improving their English, and I felt inspired to create this handbook and to make it available to anyone, free of charge.
      English is very important in this field, and anyone could use a few tips.<br>
      Feel free to download it from the linked post!`
    },
    {
      imageUrl: 'assets/images/panda-mech.png',
      title: '3D Artworks',
      description: `Animations, static artworks<br>
        Check them out on <a href="https://www.artstation.com/andrearotesi">ArtStation</a>`,
      more: `My love for design inspired me to try and create a few 3D artworks using blender, and even a few animations.<br>
      I love design and I try to bring it to every aspect of everything I do: from coding, to designing handbook covers.`
    }
  ]
}
