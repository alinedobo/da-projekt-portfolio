import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  readonly projectList = [
    {
      name: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      asset: 'portfolio_join.png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      githubUrl: 'https://github.com/alinedobo/',
      projectUrl: ''
    },
    {
      name: 'El Pollo Loco',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      asset: 'portfolio-ellpolloloco.png',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/alinedobo/da-projekt-elpolloloco',
      projectUrl: 'https://sterndemo.de/'
    },
  ];
}
