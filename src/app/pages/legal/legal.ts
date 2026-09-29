import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import {TranslatePipe} from '@ngx-translate/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-legal',
  imports: [Header, Footer, TranslatePipe, DatePipe],
  templateUrl: './legal.html',
  styleUrl: './legal.scss',
})
export class Legal {
  today = new Date();
}
