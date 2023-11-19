import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

export const AddTranscation = () => {
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
      <Box sx={{ marginBottom: 3, textAlign: 'start' }}>
        <TextField
          id="filled-basic"
          label="Transcation name"
          variant="standard"
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: 3, textAlign: 'start' }}>
        <TextField
          id="filled-basic"
          type="number"
          label="Enter amount..."
          variant="standard"
          fullWidth
        />
      </Box>
      <Button variant="contained">Add transcation</Button>
    </Box>
  );
};
