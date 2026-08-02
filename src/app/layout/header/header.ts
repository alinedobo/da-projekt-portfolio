import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Headercontent } from './headercontent/headercontent';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Headercontent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
}
