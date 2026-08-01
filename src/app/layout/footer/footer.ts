import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FooterContent } from '../footer-content/footer-content';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FooterContent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  
}
