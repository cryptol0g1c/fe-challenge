import { useState, useEffect, useContext } from 'react';
import { AppContext, reducer } from '../reducers';
import actionsDisptachers from '../reducers/actions-dispatchers';

import { validateAddress } from '../utils/helpers';

const useTransactionsForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const actions = actionsDisptachers(dispatch);

  const [formValues, setFormValues] = useState({
    address: state.address,
  });
  const [formState, setFormState] = useState({
    address: {
      isTouched: false,
      isValid: false,
    }
  });
  const [isFormValid, setIsFormValid] = useState(false);

  /**
   * Effect. Control the validity of the overall form.
   * Runs every time an input change (reflected in the formState).
   */
  useEffect(() => {
    setIsFormValid(!(Object.values(formState).some(obj => obj.isValid === false)));
  }, [formState]);
  

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
        isValid: validateAddress(target.value),
      },
    });
  };

  const checkInputError = (inputName) => (
    (formState[inputName].isTouched && !formState[inputName].isValid)
  );
  
  const handleSubmit = (event) => {
    event.preventDefault();
    actions.getTransactions(formValues.address);
  };

  return {
    formValues,
    formState,
    isFormValid,
    handleInputChange,
    handleOnBlurEvent,
    checkInputError,
    handleSubmit,
  };
};

export default useTransactionsForm;
