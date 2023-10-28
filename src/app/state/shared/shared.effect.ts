import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap , switchMap} from 'rxjs';
import { SET_DARK_MODE, SET_LIGHT_MODE, SharedActions } from './shared.action';

@Injectable({ providedIn: 'root' })
export class SharedEffects {
  darkThemeEffecte = createEffect(() => {
    return this.actions$.pipe(
      ofType(SET_DARK_MODE, SET_LIGHT_MODE),
      tap((action: SharedActions) => {
        localStorage.setItem('theme', action.type === SET_DARK_MODE ? 'dark' : 'light');
      })
    );
  }, {dispatch: false});
  constructor(private actions$: Actions) {}
}
