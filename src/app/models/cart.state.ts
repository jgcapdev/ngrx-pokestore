import { PokemonModel } from './Pokemon.interface';

export interface CartStore {
  pokemons: ReadonlyArray<PokemonModel>;
  quantity: number;
  loading: boolean;
  error: boolean;
}
