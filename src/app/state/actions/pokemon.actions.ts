import { createAction, props } from '@ngrx/store';
import { PokemonModel } from 'src/app/core/models/Pokemon.interface';

export const loadPokemons = createAction('[Pokemon List] Load Pokemons');
export const loadPokemon = createAction('[Pokemon List] Load Pokemon');

export const loadedPokemons = createAction(
  '[Pokemon List] Loaded success',
  props<{ pokemons: PokemonModel[] }>()
);

export const loadedPokemon = createAction(
  '[Pokemon List] Loaded pokemon success',
  props<{ name: string }>()
);

export const getPokemon = createAction(
  '[Pokemon List] Get pokemon',
  props<{ pokemon: any }>()
);

export const loadedPokemonsError = createAction('[Pokemon List] Loaded error');
