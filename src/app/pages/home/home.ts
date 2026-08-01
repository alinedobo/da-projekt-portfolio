import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Landing } from '../../component/landing/landing';
import { AboutMe } from '../../component/about-me/about-me';
import { Skills } from '../../component/skills/skills';
import { Portfolio } from '../../component/portfolio/portfolio';
import { References } from '../../component/references/references';
import { Contact } from '../../component/contact/contact';
import { FooterContent } from '../../layout/footer-content/footer-content';

@Component({
  selector: 'app-home',
  imports: [Header, Landing, AboutMe, Skills, Portfolio, References, Contact, FooterContent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
