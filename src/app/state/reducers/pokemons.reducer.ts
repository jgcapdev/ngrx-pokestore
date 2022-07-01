import { createReducer, on } from '@ngrx/store';
import { PokeStore } from 'src/app/models/pokemons.state';
import {
  loadedPokemons,
  loadPokemons,
  loadedPokemonsError,
} from '../actions/pokemon.actions';

export const initialState: PokeStore = {
  loading: false,
  error: false,
  pokemons: [],
};

export const pokemonsReducer = createReducer(
  initialState,
  on(loadPokemons, (state) => {
    return { ...state, loading: true, error: false };
  }),
  on(loadedPokemons, (state, { pokemons }) => {
    return { ...state, loading: false, error: false, pokemons };
  }),
  on(loadedPokemonsError, (state) => {
    return { ...state, loading: false, error: true };
  })
);
