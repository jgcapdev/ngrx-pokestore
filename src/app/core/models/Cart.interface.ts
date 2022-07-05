import { PokemonModel } from './Pokemon.interface';

export interface CartModel {
  pokemons: ReadonlyArray<PokemonModel>;
  quantity: number;
  loading: boolean;
  error: boolean;
}
