// Module dependencies
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../reducers';
import actionsDisptachers from '../reducers/actions-dispatchers';
import {
  getLinealPricesConfig,
  mapPricesToDataSeries,
  mapPricesToXAxis
} from '../utils/chart-helpers';

// Assets
import { tokenslist } from '../utils/constants';


const useAnaliticsForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const { tokenPrices } = state;

  const actions = actionsDisptachers(dispatch);

  const [tokenAddress, setTokenAddress] = useState(tokenslist[0].value);

  let to = new Date();
  let from = new Date();
  from.setDate(from.getDate()-30);

  useEffect(() => {
    actions.getHistoricalPrices(
      tokenAddress,
      from.toISOString().split('T')[0],
      to.toISOString().split('T')[0]
    );
  }, [tokenAddress])
  
  const handleDropdownChange = ({ target }) => {
    setTokenAddress(target.value);
  };

  return { handleDropdownChange, tokenAddress };
};

export default useAnaliticsForm;
