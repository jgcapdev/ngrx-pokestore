import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokeStore } from 'src/app/core/models/pokemons.state';
import { AppState } from '../app.state';
import { pokemonAdapter, PokemonState } from '../reducers/pokemons.reducer';

export const getPokemonsState = createFeatureSelector<PokemonState>('pokemons');
export const selectPokemonsFeature = (state: AppState) => state.pokemons;

export const pokemonsSelectors = pokemonAdapter.getSelectors();

export const selectListPokemons = createSelector(
  getPokemonsState,
  pokemonsSelectors.selectAll
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

export const selectPokemon = createSelector(
  selectPokemonsFeature,
  (state: PokeStore) => {
    return state.pokemon;
  }
);
