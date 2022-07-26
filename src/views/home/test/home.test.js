import { screen, renderHook, render, act } from "@testing-library/react";
import Home from "../../../views/home/home/index";
import { useHome } from "../home/useHome";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import {
  fetchDataGoogle,
  fetchDataBing,
  fetchAllData,
} from "../../../store/actions/homeActions";
import thunk from "redux-thunk";
import axios from "axios";
const middlewares = [thunk];
const initialState = {
  home: {
    data: null,
    loading: false,
    success: false,
    error: false,
  },
};

jest.mock("axios");

const mockStore = configureStore(middlewares);

describe("With React Testing Library", () => {
  it("Render Component Home Page", () => {
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const HomePage = screen.getByText(/Home Page/i);
    expect(HomePage).toBeInTheDocument();
  });
});

describe("useHome Hook", () => {
  const store = mockStore(initialState);
  const wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  it("should call function handleInputText", () => {
    const { result } = renderHook(() => useHome(), { wrapper });
    act(() => {
      result.current.handleInputText("test");
    });
    expect(result.current.inputText).toBe("test");
  });

  it("should call function handleSelectValue", () => {
    const { result } = renderHook(() => useHome(), { wrapper });
    act(() => {
      result.current.handleInputText(1);
    });
    expect(result.current.selectValue).toBe(1);
  });

  it("should call function handleSubmitData for Google", async () => {
    const { result } = renderHook(() => useHome(), { wrapper });
    axios.get.mockResolvedValueOnce({ data: {} });
    const fetchData = store.dispatch(
      fetchDataGoogle({
        term: result.current.inputText,
        value: 1,
      })
    );
    act(() => {
      result.current.handleSubmitData();
    });

    expect(fetchData).toEqual(
      Promise.resolve({
        data: {},
      })
    );
  });

  it("should call function handleSubmitData for bing", async () => {
    const { result } = renderHook(() => useHome(), { wrapper });
    axios.get.mockResolvedValueOnce({ data: {} });

    const fetchData = store.dispatch(
      fetchDataBing({
        term: result.current.inputText,
        value: 2,
      })
    );

    act(() => {
      result.current.handleSubmitData();
    });

    expect(fetchData).toEqual(
      Promise.resolve({
        data: {},
      })
    );
  });

  it("should call function handleSubmitData for All", async () => {
    const { result } = renderHook(() => useHome(), { wrapper });

    axios.get.mockResolvedValueOnce({ data: {} });
    const fetchData = store.dispatch(
      fetchAllData({
        term: result.current.inputText,
        value: 3,
      })
    );
    act(() => {
      result.current.handleSubmitData();
    });

    expect(fetchData).toEqual(
      Promise.resolve({
        data: {},
      })
    );
  });
});
