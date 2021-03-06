import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  loadCart,
  loadedCart,
  removeToCart,
} from 'src/app/state/actions/cart.actions';
import { AppState } from 'src/app/state/app.state';
import {
  selectCart,
  selectError,
  selectLoading,
} from 'src/app/state/selectors/cart.selectors';
import { PokemonModel } from 'src/app/core/models/Pokemon.interface';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css'],
})
export class CartContainerComponent implements OnInit {
  items$: Observable<any> = new Observable();
  loading$: Observable<boolean> = this.store.select(selectLoading);
  error$: Observable<boolean> = this.store.select(selectError);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCart());
    this.store.dispatch(loadedCart());

    this.items$ = this.store.select(selectCart);
  }

  deletePokemon(pokemon: PokemonModel) {
    this.store.dispatch(removeToCart({ pokemon }));
  }
}
