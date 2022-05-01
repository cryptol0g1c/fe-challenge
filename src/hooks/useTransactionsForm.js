// Module dependencies
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../reducers';
import actionsDisptachers from '../reducers/actions-dispatchers';
import { validateAddress } from '../utils/form-helpers';

const useTransactionsForm = () => {
  const { state, dispatch } = useContext(AppContext);

  const actions = actionsDisptachers(dispatch);

  // Initial States
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
  
  /**
   * Handle inputs change and save in form state.
   * @param {*} event Interface, represent the default html event. 
   */
  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  /**
   * Handle on blur events, mark the form control as touched and checks for validity.
   * @param {*} event Interface, represent the default html event. 
   */
  const handleOnBlurEvent = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: {
        isTouched: true,
        isValid: validateAddress(target.value),
      },
    });
  };

  /**
   * Checks if the inpunt has an invalid value.
   * @param {string} inputName Name of the control form.
   * @returns Boolean.
   */
  const checkInputError = (inputName) => (
    (formState[inputName].isTouched && !formState[inputName].isValid)
  );
  
  /**
   * Submit the form, call the action disptacher to init fetch proccess.
   * @param {*} event Interface, represent the default html event.  
   */
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
