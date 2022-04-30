import React from 'react';
import actions from './actions';

const AppContext = React.createContext(null);

const initialState = {
  // Global States
  processState: '',
  processing: false,
  // Transaction States
  address: '',
  // address: '0xdCBF3b2625790d9E0da6D5FD43792DAdAe01f6d5',
  // address: '0x9d30fb5Ffd9B117edA461F4655AaB8C7ddC0C36E',
  transactions: [],
};

const reducer = (state, action) => {
  const { SET_TRANSACTIONS, START_FETCHING, SET_ERROR } = actions;

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
