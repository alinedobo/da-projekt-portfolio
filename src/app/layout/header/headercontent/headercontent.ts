import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-headercontent',
  imports: [RouterLink],
  templateUrl: './headercontent.html',
  styleUrl: './headercontent.scss',
})
export class Headercontent {
  navigationOpen = false;

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
