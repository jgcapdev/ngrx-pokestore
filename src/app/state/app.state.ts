import { CartStore } from '../models/cart.state';
import { PokeStore } from '../models/pokemons.state';

export interface AppState {
  pokemons: PokeStore; // Si llamo a esta tabla 'pokestore' no funciona. Por alguna razón solo va si lo llamo 'pokemons'. AVERIGUAR por qué
  cart: CartStore;
}
