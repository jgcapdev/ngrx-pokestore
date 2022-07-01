import { CartStore } from '../models/cart.state';
import { PokeStore } from '../models/pokemons.state';

export interface AppState {
  pokestore: PokeStore;
  cart: CartStore;
}
