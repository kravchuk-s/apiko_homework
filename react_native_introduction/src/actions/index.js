import * as types from '../constants/constants-counter';

export function increment() {
  return {
    type: types.INCREMENT,
  };
}

export function nullify() {
  return {
    type: types.NULLIFY,
  };
}
