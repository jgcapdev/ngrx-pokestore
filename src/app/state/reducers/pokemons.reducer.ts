import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PokemonModel } from 'src/app/core/models/Pokemon.interface';
import { PokeStore } from 'src/app/core/models/pokemons.state';
import {
  loadedPokemons,
  loadPokemons,
  loadedPokemonsError,
  getPokemon,
} from '../actions/pokemon.actions';

export const initialState: PokeStore = {
  loading: false,
  error: false,
  pokemons: [],
  pokemon: null,
};

export interface PokemonState extends EntityState<PokemonModel> {
  selectPokemonName: string | null;
}

export function selectPokemonName(p: PokemonModel): string {
  return p.name;
}

export const pokemonAdapter = createEntityAdapter<PokemonModel>({
  selectId: selectPokemonName,
});

export const initialStateE: PokemonState = pokemonAdapter.getInitialState({
  selectPokemonName: '',
});

export const pokemonsReducer = createReducer(
  initialStateE,
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

    //return { ...state, loading: false, error: false, pokemons: pokeObj };
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
