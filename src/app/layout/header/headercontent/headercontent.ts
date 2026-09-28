import { Component, signal, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import {TranslatePipe, TranslateDirective, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-headercontent',
  imports: [RouterLink, TranslatePipe, TranslateDirective],
  templateUrl: './headercontent.html',
  styleUrl: './headercontent.scss',
})
export class Headercontent {
  navigationOpen = false;

  private translate = inject(TranslateService);

  useLanguage(language: string): void {
      this.translate.use(language);
  }

  ngOnInit(){
    this.navigationOpen = false;
  }

  toggleNavigation(){
    this.navigationOpen = !this.navigationOpen;
    console.log("Navigation open: ", this.navigationOpen);
    if(this.navigationOpen){
      document.body.classList.add('overflow-hidden');
    } else if(!this.navigationOpen){
      document.body.classList.remove('overflow-hidden');
    }
  }
}
