import { DARK_MODE_TOGGLE, SharedActions } from './shared.action';

export const SHARED_STATE_NAME = 'sharedState';

export interface SharedState {
  darkMode: boolean;
}

const initialState: SharedState = {
  darkMode: false,
};

export function sharedReducer(
  state: SharedState = initialState,
  action: SharedActions
) {
  switch (action.type) {
    case DARK_MODE_TOGGLE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
}
