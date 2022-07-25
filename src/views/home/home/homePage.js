import React from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import { SEARCH_ENGINES } from "../../../utils/constant/searchEngines.constants";

export const HomePage = () => {
  return (
    <>
      <FormControl fullWidth>
        <h1>Home Page</h1>
        <Stack direction="row" spacing={2}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <InputLabel id="demo-simple-select-label">Search Engine</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={age}
            label="Age"
            //onChange={handleChange}
          >
            {SEARCH_ENGINES.map(({ value, name }, i) => {
              return <MenuItem value={value}>{name}</MenuItem>;
            })}
          </Select>
          <Button variant="contained">Search</Button>
        </Stack>
      </FormControl>
    </>
  );
};

export default HomePage;
