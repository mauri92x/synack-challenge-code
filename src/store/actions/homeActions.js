import { ACTION_TYPES } from "../../utils/constant/actionTypes.constant";

export const startGetData = (payload) => {
  return {
    type: ACTION_TYPES.START_GET_DATA,
    ...payload,
  };
};

export const successGetData = (payload) => {
  return {
    type: ACTION_TYPES.SUCCESS_GET_DATA,
    ...payload,
  };
};

export const errorGetData = (payload) => {
  return {
    type: ACTION_TYPES.ERROR_GET_DATA,
    ...payload,
  };
};

export const fetchData = () => {
  return {
    type: ACTION_TYPES.FETCH_DATA,
  };
};
