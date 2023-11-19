import { Box, CardContent, Typography, Card } from "@mui/material";

export const Balance = () => {
  return (
    <Box>
      <Box>
        <Typography>Balance</Typography>
        <Typography>260.00</Typography>
      </Box>
      <Box>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Box>
                <Typography variant="h5" component="div">
                  Income
                </Typography>
                <Typography variant="h5" component="div" color={"primary"}>
                  500.00
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" component="div">
                  Expense
                </Typography>
                <Typography variant="h5" component="div" color={"error"}>
                  240.00
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
