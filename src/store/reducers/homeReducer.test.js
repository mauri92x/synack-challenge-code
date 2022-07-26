import { homeReducer } from "./homeReducer";
import { ACTION_TYPES } from "../../utils/constant/actionTypes.constant";

describe("Test Home Reducer", () => {
  const intialState = {
    data: null,
    loading: false,
    success: false,
    error: false,
  };

  it("should return default state", () => {
    const responseState = {
      data: null,
      loading: false,
      success: false,
      error: false,
    };
    const action = { type: "" };
    const result = homeReducer(intialState, action);
    expect(result).toEqual(responseState);
  });

  it("should return a new state if have a type", () => {
    const responseState = {
      data: {},
      loading: false,
      success: false,
      error: false,
    };
    const action = {
      type: ACTION_TYPES.LOAD_DATA,
      payload: {},
    };
    const result = homeReducer(intialState, action);
    expect(result).toEqual(responseState);
  });
});
