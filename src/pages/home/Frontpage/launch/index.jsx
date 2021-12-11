import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "./index.css";

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

const handleUploadImage = (event) => {
  console.log(event.target.files);
  const formData = new FormData();
  formData.append("file", event.target.files[0], event.target.files[0].name);
  // axios.put(url, formData);
};

export default function Launch() {
  return (
    <Box sx={{ width: 100, margin: "auto" }}>
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
              onChange={handleUploadImage}
            />
            <Button variant="contained" component="span">
              上传图片
            </Button>
          </label>
        </Stack>
      </Box>
    </Box>
  );
}
