import { Box, Typography, Card, Button } from "@mui/material";
import { GlobalContext } from "../context/GlobalState";
import { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { TransactionType } from "../context/AppReducer";

const TranscationCard = ({ id, text, amount }: TransactionType) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      key={id}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: 1,
        borderRight: amount > 0 ? "solid green 5px" : "solid red 5px",
        marginBottom: "5px",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box>{text}</Box>
      <Box>{amount}€</Box>
      {isHovered && (
        <Button size="small" variant="text" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      )}
    </Card>
  );
};

export const History = () => {
  const { transactions } = useContext(GlobalContext);

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
        {transactions.map(({ id, text, amount }) => (
          <TranscationCard id={id} text={text} amount={amount} />
        ))}
      </Box>
    </Box>
  );
};
