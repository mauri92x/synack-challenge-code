import axios from "axios";
import { ACTION_TYPES } from "../../utils/constant/actionTypes.constant";
import { API_KEY, CONTEXT_KEY } from "../../utils/constant/googleKeys.constant";

export const startGetData = (payload) => {
  return {
    type: ACTION_TYPES.START_GET_DATA,
    ...payload,
  };
};

export const successGetData = () => {
  return {
    type: ACTION_TYPES.SUCCESS_GET_DATA,
  };
};

export const errorGetData = () => {
  return {
    type: ACTION_TYPES.ERROR_GET_DATA,
  };
};

export const loadData = (payload) => {
  return {
    type: ACTION_TYPES.LOAD_DATA,
    payload: payload,
  };
};

export const emptyData = () => {
  return {
    type: ACTION_TYPES.LOAD_DATA,
  };
};

export const fetchDataBing = (payload) => {
  const { term, value } = payload;
  return async (dispatch) => {
    const response = await axios
      .get(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
      .then(({ data }) => {
        if (value !== 3) {
          dispatch(loadData(data));
          dispatch(successGetData());
        }

        return data;
      })
      .catch((error) => {
        if (value !== 3) {
          dispatch(errorGetData());
        }
        return error;
      });

    return response;
  };
};

export const fetchDataGoogle = (payload) => {
  const { term, value } = payload;
  return async (dispatch) => {
    const response = await axios
      .get(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
      .then(({ data }) => {
        if (value !== 3) {
          dispatch(loadData(data));
          dispatch(successGetData());
        }

        return data;
      })
      .catch((error) => {
        if (value !== 3) {
          dispatch(errorGetData());
        }
        return error;
      });

    return response;
  };
};

export const fetchAllData = (payload) => {
  const { term, value } = payload;

  return async (dispatch) => {
    const googleData = await dispatch(fetchDataGoogle({ term, value }));
    const bingData = await dispatch(fetchDataBing({ term, value }));
    const AllData = { ...googleData, bingData };
    dispatch(loadData(AllData));
    dispatch(successGetData());

    return AllData;
  };
};
