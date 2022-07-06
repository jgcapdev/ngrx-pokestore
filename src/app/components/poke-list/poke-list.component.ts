import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css'],
})
export class PokeListComponent implements OnInit {
  @Input() loading$: Observable<boolean> = new Observable();
  @Input() error$: Observable<boolean> = new Observable();
  @Input() pokemons$: Observable<any> = new Observable();
  @Input() cart$: Observable<any> = new Observable();

  @Output() addPokemonEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  addPokemon(pokemon: any) {
    this.addPokemonEvent.emit(pokemon);
  }
}
