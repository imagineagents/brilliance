import type { Action } from "../actions/types";
import { SET_INDEX } from "../actions/list";

export type State = {
  list: string
};

const initialState = {
  list: [
    require("../../images/round.png"),
    require("../../images/princess.png"),
    require("../../images/pear.png"),
    require("../../images/cushion.png")
  ],
  selectedIndex: undefined
};

export default function(state: State = initialState, action: Action): State {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload
    };
  }
  return state;
}
