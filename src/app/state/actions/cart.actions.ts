import { createAction, props } from '@ngrx/store';
import { PokemonModel } from 'src/app/models/Pokemon.interface';

export const loadCart = createAction('[Cart List] Load Cart');

export const loadedCart = createAction(
  '[Cart List] Loaded success',
  props<{ pokemons: ReadonlyArray<PokemonModel>; quantity: number }>()
);

export const loadedCartError = createAction('[Cart List] Loaded error');
