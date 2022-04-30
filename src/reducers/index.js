import React from 'react';
import actions from './actions';

const AppContext = React.createContext(null);

const initialState = {
  // Global States
  processState: '',

  // Transaction States
  address: '0xdCBF3b2625790d9E0da6D5FD43792DAdAe01f6d5',
  transactions: [],
};

const reducer = (state, action) => {
  const { SET_TRANSACTIONS, START_FETCHING, SET_ERROR } = actions;

  switch (action.type) {
    case START_FETCHING:
      return {
        ...state,
      };

    case SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload.data.items,
      };

    case SET_ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export { AppContext, initialState, reducer };
