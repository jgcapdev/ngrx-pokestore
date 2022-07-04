import { PokemonModel } from './Pokemon.interface';

export interface CartStore {
  pokemons: PokemonModel[];
  loading: boolean;
  error: boolean;
}
