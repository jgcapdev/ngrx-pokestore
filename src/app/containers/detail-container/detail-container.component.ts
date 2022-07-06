import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';

import { AppState } from 'src/app/state/app.state';
import { Observable } from 'rxjs';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-detail-container',
  templateUrl: './detail-container.component.html',
  styleUrls: ['./detail-container.component.css'],
})
export class DetailContainerComponent implements OnInit {
  name: string = '';
  pokemonData: any = {};
  pokemon$: Observable<any> = new Observable();

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private pokemonService: PokemonServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.name = res['name'];
    });

    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService.getPokemon(this.name).subscribe((poke: any) => {
      this.pokemonData = {
        name: this.name,
        image: poke.sprites.front_default,
      };
    });
  }
}
