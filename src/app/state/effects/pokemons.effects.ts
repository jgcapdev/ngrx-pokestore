import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, throwError } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { loadedPokemon } from '../actions/pokemon.actions';

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

  loadPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadedPokemon),
      mergeMap((action) =>
        this.pokemonService.getPokemon(action.name).pipe(
          map((pokemon: any) => ({
            type: '[Pokemon List] Load Pokemon',
            pokemon: pokemon,
          })),
          map((res: any) => ({
            type: '[Pokemon List] Get pokemon',
            pokemon: res,
          })),
          catchError((err) => throwError(err))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonServiceService
  ) {}
}
