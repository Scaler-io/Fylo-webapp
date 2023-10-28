import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SHARED_STATE_NAME, SharedState } from './shared.reducer';

const state = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const isDarkMode = createSelector(state, (state) => {
  return state.darkMode;
});
