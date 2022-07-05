import { PokemonModel } from './Pokemon.interface';

export interface PokeStore {
  loading: boolean;
  error: boolean;
  pokemons: ReadonlyArray<PokemonModel>;
}
