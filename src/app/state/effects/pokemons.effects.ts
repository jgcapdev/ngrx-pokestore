import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

let pokemonObj = {};

@Injectable()
export class PokemonsEffects {
  loadPokemons$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Pokemon List] Load Pokemons'),
      mergeMap(() =>
        this.pokemonService.getPokemons().pipe(
          map((pokemons: any) => ({
            type: '[Pokemon List] Loaded success',
            pokemons: pokemons?.results,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonServiceService
  ) {}
}
