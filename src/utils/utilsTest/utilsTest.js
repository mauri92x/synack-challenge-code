import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducers from "../../store/reducers/index";

export const renderWithState = (
  ui,
  { initialState, ...renderOptions } = {}
) => {
  const store = createStore(Reducers, initialState);
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
