import { createReducer, on } from '@ngrx/store';
import { CartStore } from 'src/app/core/models/cart.state';
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
    return { ...state, loading: true, error: false };
  }),
  on(loadedCart, (state) => {
    return {
      ...state,
      loading: false,
      error: false,
    };
  }),
  on(addToCart, (state, { pokemon }) => {
    let pokemonCopy = { ...pokemon, quantity: 1, isAdded: true };

    return {
      ...state,
      loading: false,
      error: false,
      pokemons: [
        ...state.pokemons.filter((pk) => pk.name !== pokemon.name),
        pokemonCopy,
        //...[{ ...pokemon, isAdded: true }],
      ],
    };
  }),
  on(removeToCart, (state, { pokemon }) => {
    return {
      ...state,
      loading: false,
      error: false,
      pokemons: [...state.pokemons.filter((pk) => pk.name !== pokemon.name)],
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
    return { ...state, loading: false, error: true, pokemons: [] };
  })
);
