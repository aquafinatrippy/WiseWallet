import { Box, Button, TextField, Typography, Input } from "@mui/material";
import { useState } from "react";

export const AddTranscation = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const amountChange = (event) => {
    setAmount(event.target.value.replace(/[^0-9]/g, ""));
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
            pattern: "^[0-9]*$",
          }}
          fullWidth
        />
      </Box>
      <Button variant="contained">Add transcation</Button>
    </Box>
  );
};
