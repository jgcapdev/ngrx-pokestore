import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import {
  selectError,
  selectListPokemons,
  selectLoading,
} from 'src/app/state/selectors/pokemons.selectors';
import { loadPokemons } from 'src/app/state/actions/pokemon.actions';
import { addToCart } from 'src/app/state/actions/cart.actions';

@Component({
  selector: 'app-pokemon-container',
  templateUrl: './pokemon-container.component.html',
  styleUrls: ['./pokemon-container.component.css'],
})
export class PokemonContainerComponent implements OnInit {
  loading$: Observable<boolean> = this.store.select(selectLoading);
  error$: Observable<boolean> = this.store.select(selectError);
  pokemons$: Observable<any> = new Observable();
  isAdded$: Observable<boolean> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadPokemons());
    this.pokemons$ = this.store.select(selectListPokemons);
  }

  addPokemon(pokemon: any) {
    this.store.dispatch(addToCart({ pokemon }));
  }
}
