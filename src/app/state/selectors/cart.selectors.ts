import { createSelector } from '@ngrx/store';
import { CartStore } from 'src/app/core/models/cart.state';
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

export const selectItems = createSelector(
  selectCartFeature,
  (state: CartStore) => {
    return state.pokemons.length;
  }
);

export const selectError = createSelector(
  selectCartFeature,
  (state: CartStore) => {
    return state.error;
  }
);
