import { fromJS } from 'immutable';

export function setEntries(state, entries) {
  return state.set('entries', fromJS(entries));
}

export function next(state) {
  const entries = state.get('entries');
  return state.merge({
    vote: fromJS({ pair: entries.take(2) }),
    entries: entries.skip(2),
  });
}
