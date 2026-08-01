import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { FooterContent } from '../../layout/footer-content/footer-content';

@Component({
  selector: 'app-legal',
  imports: [Header, Footer, FooterContent],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class Legal {}
