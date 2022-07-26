import { ACTION_TYPES } from "../../utils/constant/actionTypes.constant";

const intialState = {
  data: null,
  loading: false,
  success: false,
  error: false,
};

export const homeReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SUCCESS_GET_DATA:
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
      };

    case ACTION_TYPES.ERROR_GET_DATA:
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };

    case ACTION_TYPES.START_GET_DATA:
      return { ...state, data: {}, loading: true };

    case ACTION_TYPES.LOAD_DATA:
      return { ...state, data: payload };

    case ACTION_TYPES.EMPTY_DATA:
      return { ...state, data: null };
    default:
      return state;
  }
};
