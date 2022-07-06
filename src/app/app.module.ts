import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { cartReducer } from './state/reducers/cart.reducer';
import { pokemonsReducer } from './state/reducers/pokemons.reducer';
import { EffectsFeatureModule, EffectsModule } from '@ngrx/effects';
import { PokemonsEffects } from './state/effects/pokemons.effects';
import { PokemonContainerComponent } from './containers/pokemon-container/pokemon-container.component';
import { CartContainerComponent } from './containers/cart-container/cart-container.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { NavContainerComponent } from './containers/nav-container/nav-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    PokeListComponent,
    HomeComponent,
    PageNotFoundComponent,
    CartComponent,
    PokemonContainerComponent,
    CartContainerComponent,
    HomeContainerComponent,
    NavContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cart: cartReducer, pokemons: pokemonsReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    HttpClientModule,
    EffectsModule.forRoot([PokemonsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
