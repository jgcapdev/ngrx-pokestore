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
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css'],
})
export class PokeListComponent implements OnInit {
  loading$: Observable<boolean> = this.store.select(selectLoading);
  error$: Observable<boolean> = this.store.select(selectError);
  pokemons$: Observable<any> = new Observable();
  cart$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadPokemons());
    this.pokemons$ = this.store.select(selectListPokemons);
  }

  addPokemon(pokemon: any) {
    this.store.dispatch(addToCart({ pokemon }));
  }
}
