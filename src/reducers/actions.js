const actions = {
  SET_TRANSACTIONS: Symbol('SET_TRANSACTIONS'),
  SET_PRICES: Symbol('SET_PRICES'),

  // Fetch
  START_FETCHING: Symbol('START_FETCHING'),
  STOP_FETCHING: Symbol('STOP_FETCHING'),

  // Error
  SET_ERROR: Symbol('SET_ERROR'),
  CLEAR_ERROR: Symbol('CLEAR_ERROR'),
};

export default actions;
