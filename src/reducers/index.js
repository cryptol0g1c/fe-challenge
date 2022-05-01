import { createContext } from 'react';
import actions from './actions';

const AppContext = createContext(null);

const initialState = {
  // Global States
  processing: false,

  // Transaction States
  address: '',
  transactions: [],

  // Prices States
  tokenData: [],
  tokenPrices: [],
};

const reducer = (state, action) => {
  const { SET_TRANSACTIONS, SET_ERROR, SET_PRICES, START_FETCHING } = actions;

  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
        processing: true,
      };

    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload.data.items,
        processing: false,
      };

    case SET_PRICES:
      return {
        ...state,
        tokenData: action.payload.data[0],
        tokenPrices: action.payload.data[0].prices,
        processing: false,
      };

    case SET_ERROR:
      return {
        ...state,
        processing: false,
      };

    default:
      return state;
  }
};

export { AppContext, initialState, reducer };
