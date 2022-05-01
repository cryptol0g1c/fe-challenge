// Module dependencies
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../reducers';
import actionsDisptachers from '../reducers/actions-dispatchers';

// Assets
import { tokensList } from '../utils/constants';


const useAnaliticsForm = () => {
  const { dispatch } = useContext(AppContext);
  const [tokenAddress, setTokenAddress] = useState(tokensList[0].value);

  const actions = actionsDisptachers(dispatch);

  // Set Dates for fetch
  let to = new Date();
  let from = new Date();
  from.setDate(from.getDate()-30);

  // Fetch token information every time that the token address change
  useEffect(() => {
    actions.getHistoricalPrices(
      tokenAddress,
      from.toISOString().split('T')[0],
      to.toISOString().split('T')[0]
    );
  }, [tokenAddress])
  
  /**
   * Handle the token selection.
   * @param {*} event Interface, represent the default html event. 
   */
  const handleDropdownChange = ({ target }) => {
    setTokenAddress(target.value);
  };

  return { handleDropdownChange, tokenAddress };
};

export default useAnaliticsForm;
