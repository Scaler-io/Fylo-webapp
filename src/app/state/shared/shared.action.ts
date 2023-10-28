import { Action } from "@ngrx/store";

export const DARK_MODE_TOGGLE = 'DARK_MODE_TOGGLE';

export class DarkModeToggle implements Action{
    readonly type = DARK_MODE_TOGGLE;
    constructor(){}
}

export type SharedActions = DarkModeToggle;