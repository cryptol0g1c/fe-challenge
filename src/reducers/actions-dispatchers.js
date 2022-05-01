import client from '../configs/client';
import actions from './actions';


const actionsDisptachers = (dispatch) => {
  const apiKey = process.env.REACT_APP_COVALENT_API_KEY;
  
  const { SET_TRANSACTIONS, SET_ERROR, SET_PRICES, START_FETCHING } = actions;

  /**
   * Funtion to handle error with reducer (save error message in context).
   * @param {*} err Error.
   */
  const handleError = err => {
    dispatch({
      type: SET_ERROR,
      errorMessage: err?.error_message || 'An error occurrs',
      errorCode: err?.error_code || 500,
    });
  };
  

  const getTransactions = (address) => {
    const transactionUrl = `/1/address/${address}/transactions_v2/`;
    const params = {
      key: apiKey,
    };

    dispatch({ type: START_FETCHING });

    client.get(transactionUrl, { params })
      .then(({ data }) => {
        dispatch({
          type: SET_TRANSACTIONS,
          payload: data,
        });
      })
      .catch(err => handleError(err.response.data));
  };


  const getHistoricalPrices = (address, from, to) => {
    const pricesUrl = `/pricing/historical_by_addresses_v2/1/usd/${address}/`;

    const params = {
      key: apiKey,
      from,
      to,
    };

    client.get(pricesUrl, { params })
      .then(({ data }) => {
        dispatch({
          type: SET_PRICES,
          payload: data,
        });
      })
      .catch(err => handleError(err.response.data));
  };


  return { getTransactions, getHistoricalPrices };
};

export default actionsDisptachers;
