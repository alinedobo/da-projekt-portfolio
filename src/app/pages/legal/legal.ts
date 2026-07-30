import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-legal',
  imports: [Header, Footer],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class Legal {}
