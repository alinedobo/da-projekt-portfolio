import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { Landing } from '../../component/landing/landing';
import { AboutMe } from '../../component/about-me/about-me';
import { Skills } from '../../component/skills/skills';
import { Portfolio } from '../../component/portfolio/portfolio';
import { References } from '../../component/references/references';
import { Contact } from '../../component/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, Landing, AboutMe, Skills, Portfolio, References, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
