import { ACTION_TYPES } from "../../utils/constant/actionTypes.constant";

const intialState = {
  data: [],
};

export const homeReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SUCCESS_GET_DATA:
      console.log("entra");
      return { ...state, data: payload };

    case ACTION_TYPES.START_GET_DATA:
      console.log("entra");
      return { ...state, data: payload };
    default:
      return state;
  }
};
