import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateDirective } from '@ngx-translate/core';

@Component({
    selector: 'app-about-me',
    imports: [RouterLink, TranslatePipe, TranslateDirective],
    templateUrl: './about-me.html',
    styleUrl: './about-me.scss',
})
export class AboutMe {}
