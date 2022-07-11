import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PokemonModel } from 'src/app/core/models/Pokemon.interface';
import {
  loadedPokemons,
  loadPokemons,
  loadedPokemonsError,
  getPokemon,
} from '../actions/pokemon.actions';

export interface PokemonState extends EntityState<PokemonModel> {
  selectPokemonName: string | null;
  selectPokemonLoading: boolean | null;
}

export function selectPokemonName(p: PokemonModel): string {
  return p.name;
}

export const pokemonAdapter = createEntityAdapter<PokemonModel>({
  selectId: selectPokemonName,
});

export const initialState: PokemonState = pokemonAdapter.getInitialState({
  selectPokemonName: null,
  selectPokemonLoading: false,
});

export const pokemonsReducer = createReducer(
  initialState,
  on(loadPokemons, (state) => {
    return { ...state, loading: true, error: false };
  }),
  on(loadedPokemons, (state, { pokemons }) => {
    let pokeObj: PokemonModel[] = [];
    pokemons.forEach((pokemon) => {
      let poke = {
        name: pokemon.name,
        url: pokemon.url,
        quantity: 0,
        isAdded: false,
      };

      pokeObj.push(poke);
    });

    return pokemonAdapter.setAll(pokemons, state);
  }),
  on(loadedPokemonsError, (state) => {
    return { ...state, loading: false, error: true };
  }),
  on(getPokemon, (state, { pokemon }) => {
    return {
      ...state,
      pokemon: pokemon,
    };
  })
);
