import { Component, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-headercontent',
    imports: [RouterLink, TranslatePipe],
    templateUrl: './headercontent.html',
    styleUrl: './headercontent.scss',
})
export class Headercontent {
    navigationOpen = false;
    englishActive = true;
    germanActive = false;

    private translate = inject(TranslateService);

    useLanguage(language: string): void {
        this.translate.use(language);
    }

    activateGerman() {
        this.germanActive = true;
        this.englishActive = false;
        this.useLanguage('de');
    }

    activateEnglish() {
        this.englishActive = true;
        this.germanActive = false;
        this.useLanguage('en');
    }

    ngOnInit() {
        this.navigationOpen = false;
    }

    toggleNavigation() {
        this.navigationOpen = !this.navigationOpen;
        console.log('Navigation open: ', this.navigationOpen);
        if (this.navigationOpen) {
            document.body.classList.add('overflow-hidden');
        } else if (!this.navigationOpen) {
            document.body.classList.remove('overflow-hidden');
        }
    }
}
