import * as types from '../constants/constants-counter';

export default function Counter(state = 0, action) {
  let quantity = 0;
  switch (action.type) {
    case types.INCREMENT:
      quantity = state + 1;
      return quantity;
    case types.NULLIFY: quantity = 0;
      return quantity;
    default: break;
  }
  return state;
}
