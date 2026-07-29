import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  projectList = [
    {
      name: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      asset: 'portfolio_join.png',
      skills: 'Angular | TypeScript | CSS | HTML | Firebase'
    },
    {
      name: 'El Pollo Loco',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      asset: 'portfolio-ellpolloloco.png',
      skills: ['JavaScript', 'CSS', 'HTML'],
    },
  ];
}
