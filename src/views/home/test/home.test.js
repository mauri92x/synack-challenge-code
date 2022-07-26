import { screen, renderHook } from "@testing-library/react";
import Home from "../../../views/home/home/index";
import { renderWithState } from "../../../utils/utilsTest/utilsTest";
import { useHome } from "../home/useHome";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe("Test Home", () => {
  it("render learn react home page", () => {
    renderWithState(<Home />);
    const HomePage = screen.getByText(/Home Page/i);
    expect(HomePage).toBeInTheDocument();
  });

  it("useHome Hook", () => {
    const { result } = renderHook(() => useHome());
    console.log(result);
  });
});
