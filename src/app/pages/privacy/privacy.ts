import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-privacy',
  imports: [Header, Footer],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {}
