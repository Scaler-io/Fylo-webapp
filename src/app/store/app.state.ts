import {
  SHARED_STATE_NAME,
  SharedState,
  sharedReducer,
} from '../state/shared/shared.reducer';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
};
