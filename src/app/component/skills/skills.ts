import { Component } from '@angular/core';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
    selector: 'app-skills',
    imports: [TranslatePipe, TranslateDirective],
    templateUrl: './skills.html',
    styleUrl: './skills.scss',
})
export class Skills {
    rowOne = new Map([
        ['Angular', 'assets/icons/Logo_angular.png'],
        ['TypeScript', 'assets/icons/Logo_typescript.png'],
        ['JavaScript', 'assets/icons/Logo_javascript.png'],
        ['HTML', 'assets/icons/Logo_html.png'],
        ['CSS', 'assets/icons/Logo_css.png'],
        ['Supabase', 'assets/icons/Logo_supabase.png'],
        ['Git', 'assets/icons/Logo_git.png'],
        ['Scrum', 'assets/icons/Logo_scrum.png'],
        ['REST-API', 'assets/icons/Logo_api.png'],
        ['Material Design', 'assets/icons/Logo_materialdesign.png'],
    ]);
}
