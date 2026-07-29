import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Landing } from './component/landing/landing';
import { AboutMe } from './component/about-me/about-me';
import { Skills } from './component/skills/skills';
import { Portfolio } from './component/portfolio/portfolio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Landing, AboutMe, Skills, Portfolio],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('da-projekt-portfolio');
}
