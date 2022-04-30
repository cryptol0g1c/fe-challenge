// Module dependencies
import { useContext, useEffect, useState } from "react";
import actionsDisptachers from "../../reducers/actions-dispatchers";
import { AppContext } from "../../reducers";
import useTransactionsForm from "../../hooks/useTransactionsForm";

// UI components
import Container from '@mui/material/Container';
import { Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// Assets
import { wording } from '../../utils/constants';

const SearchManager = () => {


  const {
    formValues,
    formState,
    isFormValid,
    handleInputChange,
    handleOnBlurEvent,
    checkInputError,
    handleSubmit,
  } = useTransactionsForm();

  const { ERROR_TRANSACATION, PLACEHOLDER_TRANSACTION, SEARCH } = wording;

  return (
    <>
      <Container>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField 
            label={PLACEHOLDER_TRANSACTION}
            variant="outlined"
            fullWidth
            required
            onChange={handleInputChange}
            onBlur={handleOnBlurEvent}
            name='address'
            error={checkInputError('address')}
            value={formValues.address}
            helperText={checkInputError('address') ? ERROR_TRANSACATION : ''}
          />

          <Button
            variant="contained"
            type="submit"
            disableElevation
            disabled={!isFormValid}
            endIcon={<SearchIcon />}
            sx={{
              marginTop: "16px"
            }}
            
          >
            {SEARCH}
          </Button>
 
        </form>
      </Container>
    </>

  );
};

export default SearchManager;
