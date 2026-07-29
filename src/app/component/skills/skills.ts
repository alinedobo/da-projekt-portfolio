import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})


export class Skills {
    rowOne = new Map([
    ["Agular", "assets/icons/Logo_angular.png"],
    ["TypeScript", "assets/icons/Logo_typescript.png"],
    ["JavaScript", "assets/icons/Logo_javascript.png"],
    ["HTML", "assets/icons/Logo_html.png"],
    ["CSS", "assets/icons/Logo_css.png"],
  ]);

  rowTwo = new Map([
    ["Supabase", "assets/icons/Logo_supabase.png"],
    ["Git", "assets/icons/Logo_git.png"],
    ["Scrum", "assets/icons/Logo_scrum.png"],
    ["REST-API", "assets/icons/Logo_api.png"],
    ["Material Design", "assets/icons/Logo_materialdesign.png"],
  ]);
}