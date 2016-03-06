import {setEntries, next} from './core';

export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_ENTRIES':
      return setEntries(state, action.entries);
    case 'NEXT':
      return next(state);
  }
}
