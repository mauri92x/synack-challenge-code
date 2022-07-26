import React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import { SEARCH_ENGINES } from "../../../utils/constant/searchEngines.constants";

export const HomePage = ({
  propsInputText,
  propsSelectValue,
  propsButtonSubmit,
}) => {
  return (
    <div className="homeInput">
      <h1>Home Page</h1>
      <Stack direction="row" spacing={2}>
        <TextField {...propsInputText} />
        <TextField select {...propsSelectValue}>
          {SEARCH_ENGINES.map(({ value, name }, i) => {
            return (
              <MenuItem key={i} value={value} name={name}>
                {name}
              </MenuItem>
            );
          })}
        </TextField>

        <Button {...propsButtonSubmit}>Search</Button>
      </Stack>
    </div>
  );
};

export default HomePage;
