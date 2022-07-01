import { createReducer, on } from '@ngrx/store';
import { CartStore } from 'src/app/models/cart.state';
import { PokeStore } from 'src/app/models/pokemons.state';
import { loadCart, loadedCart, loadedCartError } from '../actions/cart.actions';

export const initialState: CartStore = {
  loading: false,
  error: false,
  pokemons: [],
  quantity: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(loadCart, (state) => {
    return { ...state, loading: true, error: false, pokemons: [], quantity: 0 };
  }),
  on(loadedCart, (state, { pokemons, quantity }) => {
    return {
      ...state,
      loading: false,
      error: false,
      quantity,
      pokemons,
    };
  }),
  on(loadedCartError, (state) => {
    return { ...state, loading: false, error: true };
  })
);
