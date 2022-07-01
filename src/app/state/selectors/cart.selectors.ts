import { createSelector } from '@ngrx/store';
import { CartStore } from 'src/app/models/cart.state';
import { PokeStore } from 'src/app/models/pokemons.state';
import { AppState } from '../app.state';

export const selectCartFeature = (state: AppState) => state.cart;

export const selectLoading = createSelector(
  selectCartFeature,
  (state: CartStore) => {
    return state.loading;
  }
);

export const selectCart = createSelector(
  selectCartFeature,
  (state: CartStore) => {
    return state.pokemons;
  }
);

export const selectQuantity = createSelector(
  selectCartFeature,
  (state: CartStore) => {
    return state.quantity;
  }
);

export const selectError = createSelector(
  selectCartFeature,
  (state: CartStore) => {
    return state.error;
  }
);
