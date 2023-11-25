import { Box, Typography, Card } from "@mui/material";

export const History = () => {
  return (
    <Box sx={{ marginBottom: 5 }}>
      <Box
        sx={{
          textAlign: "start",
          borderBottom: "solid white 1px",
          margin: "10px 0",
        }}
      >
        <Typography>History</Typography>
      </Box>
      <Box>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 1,
            borderRight: "solid green 5px",
          }}
        >
          <Box>Name</Box>
          <Box>500.00</Box>
        </Card>
      </Box>
    </Box>
  );
};
