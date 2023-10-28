import { Action } from '@ngrx/store';

export const SET_DARK_MODE = 'SET_DARK_MODE';
export const SET_LIGHT_MODE = 'SET_LIGHT_MODE';

export class SetDarkMode implements Action {
  readonly type = SET_DARK_MODE;
  constructor() {}
}

export class SetLightMode implements Action {
  readonly type = SET_LIGHT_MODE;
  constructor() {}
}

export type SharedActions = SetDarkMode | SetLightMode;
