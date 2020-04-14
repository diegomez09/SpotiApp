import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//Servicios

//Componentes
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'artista', component: ArtistaComponent },
    { path: 'search', component: SearchComponent },
    //{ path: 'navbar', component: NavbarComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
