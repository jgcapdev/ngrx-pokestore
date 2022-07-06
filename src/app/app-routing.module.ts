import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartContainerComponent } from './containers/cart-container/cart-container.component';
import { DetailContainerComponent } from './containers/detail-container/detail-container.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { PokemonContainerComponent } from './containers/pokemon-container/pokemon-container.component';

const routes: Routes = [
  { path: 'poke-list', component: PokemonContainerComponent },
  { path: 'home', component: HomeContainerComponent },
  { path: 'cart', component: CartContainerComponent },
  { path: 'detail/:name', component: DetailContainerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
