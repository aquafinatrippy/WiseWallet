import { Box, CardContent, Typography, Card } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const [income, setIncome] = useState<number>(0);
  const [outcome, setOutcome] = useState<number>(0);
  const [totalBalance, setTotalBalance] = useState<number>(0);

  useEffect(() => {
    let totalIncome = 0;
    let totalOutcome = 0;

    transactions.forEach((transaction) => {
      if (transaction.amount > 0) {
        totalIncome += transaction.amount;
      } else {
        totalOutcome += transaction.amount;
      }
    });

    setIncome((prevIncome) => prevIncome + totalIncome);
    setOutcome((prevOutcome) => prevOutcome + totalOutcome);
    setTotalBalance(totalIncome + totalOutcome);
  }, [transactions]);

  return (
    <Box sx={{ marginBottom: 5 }}>
      <Box sx={{ textAlign: "start" }}>
        <Typography variant="body1">Balance</Typography>
        <Typography variant="h6">{totalBalance}€</Typography>
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
                  {income}€
                </Typography>
              </Box>
              <Box>
                <Typography variant="h5" component="div">
                  Expense
                </Typography>
                <Typography variant="h5" component="div" color={"error"}>
                  {outcome}€
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
