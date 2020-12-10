const innitialState = {
  transactions: null,
  loading: true,
};

const Transactions = (state = innitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOAD_TRANSACTIONS":
      return {
        ...state,
        transactions: payload,
        loading: false,
      };
    case "TRANS_ERROR":
      return {
        ...state,
        ...innitialState,
      };
    default:
      return state;
  }
};

export default Transactions;
