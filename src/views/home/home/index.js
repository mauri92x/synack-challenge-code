import { Box } from "@mui/system";
import "./home.css";
import HomePage from "./homePage";
import HomeInputs from "./homeInputs";
import { useHome } from "./useHome";
import CircularProgress from "@mui/material/CircularProgress";

export function CircularIndeterminate() {
  return (
    <Box>
      <CircularProgress />
      LOADING...
    </Box>
  );
}

export const Home = () => {
  const {
    data,
    loading,
    inputText,
    selectValue,
    handleInputText,
    handleSelectValue,
    handleSubmitData,
  } = useHome();

  const propsInputText = {
    onChange: (event) => {
      handleInputText(event.target.value);
    },
    value: inputText,
    id: "outlined-basic",
    label: "Write Something...",
    variant: "outlined",
    className: "homeInput__input",
  };

  const propsSelectValue = {
    onChange: (event) => {
      handleSelectValue(event.target.value);
    },
    value: selectValue,
    id: "outlined-select-currency",
    label: "Select Search Engines",
    helperText: "Please select your search engine",
  };

  const propsButtonSubmit = {
    onClick: () => {
      handleSubmitData();
    },
    variant: "contained",
  };

  return (
    <>
      <Box>
        <HomeInputs
          propsInputText={propsInputText}
          propsSelectValue={propsSelectValue}
          propsButtonSubmit={propsButtonSubmit}
        ></HomeInputs>
        <Box className="container">
          {loading ? (
            CircularIndeterminate()
          ) : (
            <HomePage data={data} term={inputText}></HomePage>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Home;
