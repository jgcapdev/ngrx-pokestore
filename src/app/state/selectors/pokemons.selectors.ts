import { createSelector } from '@ngrx/store';
import { PokeStore } from 'src/app/models/pokemons.state';
import { AppState } from '../app.state';

export const selectPokemonsFeature = (state: AppState) => state.pokemons;

export const selectListPokemons = createSelector(
  selectPokemonsFeature,
  (state: PokeStore) => {
    return state.pokemons;
  }
);

export const selectLoading = createSelector(
  selectPokemonsFeature,
  (state: PokeStore) => {
    return state.loading;
  }
);

export const selectError = createSelector(
  selectPokemonsFeature,
  (state: PokeStore) => {
    return state.error;
  }
);
