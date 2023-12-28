import { Box, Button, TextField, Typography } from "@mui/material";
import { useState, ChangeEvent } from "react";

export const AddTranscation = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const amountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (/^-?\d*\.?\d*$/.test(inputValue)) {
      setAmount(inputValue);
    }
  };

  return (
    <Box>
      <Box
        sx={{
          textAlign: "start",
          borderBottom: "solid white 1px",
          margin: "10px 0",
        }}
      >
        <Typography variant="h5">Add new transcation</Typography>
      </Box>
      <Box sx={{ marginBottom: 3, textAlign: "start" }}>
        <TextField
          id="filled-basic"
          label="Transcation name"
          variant="standard"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 3, textAlign: "start" }}>
        <TextField
          id="filled-basic"
          type="text"
          label="Enter amount..."
          variant="standard"
          value={amount}
          onChange={amountChange}
          inputProps={{
            inputMode: "numeric",
            pattern: /^-?[0-9]*$/,
          }}
          fullWidth
        />
      </Box>
      <Button variant="contained">Add transcation</Button>
    </Box>
  );
};
