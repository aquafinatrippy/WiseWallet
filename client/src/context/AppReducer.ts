// AppReducer.ts
interface Transaction {
  id: number;
  text: string;
  amount: number;
}

export interface AppState {
  transactions: Transaction[];
}

type AddTransactionAction = {
  type: "ADD_TRANSACTION";
  payload: Transaction;
};

type DeleteTransactionAction = {
  type: "DELETE_TRANSACTION";
  payload: number;
};

export type AppAction = AddTransactionAction | DeleteTransactionAction;

export const AppReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

