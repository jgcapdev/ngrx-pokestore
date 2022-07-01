import { createAction, props } from '@ngrx/store';
import { PokemonModel } from 'src/app/models/Pokemon.interface';

export const loadPokemons = createAction('[Pokemon List] Load Pokemons');

export const loadedPokemons = createAction(
  '[Pokemon List] Loaded success',
  props<{ pokemons: PokemonModel[] }>()
);

export const loadedPokemonsError = createAction('[Pokemon List] Loaded error');
