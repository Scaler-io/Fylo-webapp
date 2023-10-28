import { SET_DARK_MODE, SET_LIGHT_MODE, SharedActions } from './shared.action';

export const SHARED_STATE_NAME = 'sharedState';

export interface SharedState {
  darkMode: boolean;
}

const initialState: SharedState = {
  darkMode: null,
};

export function sharedReducer(
  state: SharedState = initialState,
  action: SharedActions
) {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: true,
      };
    case SET_LIGHT_MODE:
      return {
        ...state,
        darkMode: false,
      };
    default:
      return state;
  }
}
