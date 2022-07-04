import { Injectable } from '@angular/core';
import { PokemonModel } from '../models/Pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: PokemonModel[] = [];

  constructor() {}

  addPokemon(pokemon: PokemonModel) {
    if (!this.cart.some((pk: PokemonModel) => pokemon.name == pk.name)) {
      this.cart.push(pokemon);
      console.log('Añadido');
    }
  }

  deletePokemon(pokemon: PokemonModel) {
    const index = this.cart.indexOf(pokemon);

    if (index > -1) {
      this.cart.splice(index, 1);
      console.log('Quitado');
    }
  }

  getCart() {
    return this.cart;
  }
}
