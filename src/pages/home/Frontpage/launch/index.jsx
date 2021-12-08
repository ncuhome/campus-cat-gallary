import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const Input = styled("input")({
  display: "none",
});

const MultilineTextFields = () => {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
        value={value}
        onChange={handleChange}
        variant="standard"
      />
    </div>
  );
};

export default function Launch() {
  return (
    <Box>
      <Box>
        <MultilineTextFields></MultilineTextFields>
      </Box>
      <Box>
        <Stack direction="row" alignItems="center" spacing={2}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Stack>
      </Box>
    </Box>
  );
}
