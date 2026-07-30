import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Legal } from './pages/legal/legal';
import { Privacy } from './pages/privacy/privacy';


export const routes: Routes = [
    {path: "", component:Home},
    {path: "legal", component:Legal},
    {path: "privacy", component:Privacy}
];
