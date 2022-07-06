import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonModel } from 'src/app/core/models/Pokemon.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() cart$: Observable<any> = new Observable();
  @Input() items$: Observable<any> = new Observable();
  @Input() loading$: Observable<boolean> = new Observable();
  @Input() error$: Observable<boolean> = new Observable();

  @Output() deletePokemonEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  deletePokemon(pokemon: PokemonModel) {
    this.deletePokemonEvent.emit(pokemon);
  }
}
