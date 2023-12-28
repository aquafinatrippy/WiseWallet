// AppReducer.ts
export interface TransactionType {
  id: number;
  text: string;
  amount: number;
}

export interface AppState {
  transactions: TransactionType[];
}

type AddTransactionAction = {
  type: "ADD_TRANSACTION";
  payload: TransactionType;
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

