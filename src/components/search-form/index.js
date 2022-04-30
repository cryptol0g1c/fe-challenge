// Module dependencies
import { useContext, useEffect, useState } from "react";
import actionsDisptachers from "../../reducers/actions-dispatchers";
import { AppContext } from "../../reducers";
import useTransactionsForm from "../../hooks/useTransactionsForm";

// UI components
import { Button, Container, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// Assets
import { wording } from '../../utils/constants';

const SearchForm = () => {
  const {
    formValues,
    formState,
    isFormValid,
    handleInputChange,
    handleOnBlurEvent,
    checkInputError,
    handleSubmit,
  } = useTransactionsForm();

  const { TRANSACTION_ERROR, TRANSACTION_PLACEHOLDER, SEARCH } = wording;

  return (
    <>
      <Container>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField 
            label={TRANSACTION_PLACEHOLDER}
            variant="outlined"
            fullWidth
            required
            onChange={handleInputChange}
            onBlur={handleOnBlurEvent}
            name='address'
            error={checkInputError('address')}
            value={formValues.address}
            helperText={checkInputError('address') ? TRANSACTION_ERROR : ''}
          />

          <Button
            variant="contained"
            type="submit"
            disableElevation
            disabled={!isFormValid}
            endIcon={<SearchIcon />}
            sx={{
              marginTop: "16px",
            }}
            
          >
            {SEARCH}
          </Button>
 
        </form>
      </Container>
    </>

  );
};

export default SearchForm;
