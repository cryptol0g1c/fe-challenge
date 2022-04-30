import { useState, useEffect, useContext } from 'react';
import { AppContext, reducer } from '../reducers';

import { validateSimpleInput } from '../utils/helpers';

const useTransactionsForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const { address } = state;

  const [formValues, setFormValues] = useState({
    address,
  });
  const [formState, setFormState] = useState({
    address: {
      isTouched: false,
      isValid: false,
    }
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleOnBlurEvent = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: {
        isTouched: true,
        isValid: validateSimpleInput(target.name, target.value),
      },
    });
  };

  return {
    formValues,
    isFormValid,
    handleInputChange,
    handleOnBlurEvent,
  };
};

export default useTransactionsForm;
