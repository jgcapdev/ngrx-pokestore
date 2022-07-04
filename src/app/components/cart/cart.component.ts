import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  getCartItems,
  loadCart,
  loadedCart,
} from 'src/app/state/actions/cart.actions';
import { AppState } from 'src/app/state/app.state';
import {
  selectCart,
  selectLoading,
} from 'src/app/state/selectors/cart.selectors';
import { PokemonModel } from 'src/app/models/Pokemon.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart$: Observable<any> = new Observable();
  items: any[] = [];
  loading$: Observable<boolean> = this.store.select(selectLoading);
  pokemons: PokemonModel[] = [];
  counter: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCart()); // Cargando carrito
    this.store.dispatch(getCartItems());

    this.cart$ = this.store.select(selectCart); // Cogiendo el carro de store

    this.cart$.subscribe((pokemon) => {});

    this.store.dispatch(loadedCart({ pokemons: this.pokemons })); // Accion
  }
}
