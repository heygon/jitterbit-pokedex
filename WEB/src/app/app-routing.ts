import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const APP_ROUTES: Routes = [
  {path : '', component : PokemonListComponent},
  {path : 'pokemon-detail/:name', component : PokemonDetailComponent}
];


export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);


