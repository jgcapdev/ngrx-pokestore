import { createAction, props } from '@ngrx/store';
import { PokemonModel } from 'src/app/models/Pokemon.interface';

export const loadCart = createAction('[Cart List] Load Cart');

export const loadedCart = createAction(
  '[Cart List] Loaded success',
  props<{ pokemons: PokemonModel[] }>()
);

export const addToCart = createAction(
  '[Cart List] Add To cart',
  props<{ pokemon: PokemonModel }>()
);

export const removeToCart = createAction(
  '[Cart List] Remove To cart',
  props<{ pokemon: PokemonModel }>()
);

export const getCartItems = createAction('[Cart List] Get cart items');

export const loadedCartError = createAction('[Cart List] Loaded error');
