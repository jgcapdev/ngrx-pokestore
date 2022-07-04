import { createReducer, on } from '@ngrx/store';
import { CartStore } from 'src/app/models/cart.state';
import {
  addToCart,
  getCartItems,
  loadCart,
  loadedCart,
  loadedCartError,
  removeToCart,
} from '../actions/cart.actions';

export const initialState: CartStore = {
  loading: false,
  error: false,
  pokemons: [],
};

export const cartReducer = createReducer(
  initialState,
  on(loadCart, (state) => {
    return { ...state, loading: true, error: false, pokemons: [] };
  }),
  on(loadedCart, (state, { pokemons }) => {
    return {
      ...state,
      loading: false,
      error: false,
      pokemons,
    };
  }),
  on(addToCart, (state, { pokemon }) => {
    return {
      ...state,
      loading: false,
      error: false,
      pokemons: [
        ...state.pokemons.filter((pk) => pk.name !== pokemon.name),
        ...[pokemon],
      ],
    };
  }),
  on(removeToCart, (state, { pokemon }) => {
    /*
     const index = this.cart.indexOf(pokemon);

    if (index > -1) {
      this.cart.splice(index, 1);
      console.log('Quitado');
    }
    */
    return {
      ...state,
      loading: false,
      error: false,
      pokemons: [
        ...state.pokemons.filter((pk) => pk.name == pokemon.name),
        ...[pokemon],
      ],
    };
  }),
  on(getCartItems, (state) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  }),
  on(loadedCartError, (state) => {
    return { ...state, loading: false, error: true };
  })
);
