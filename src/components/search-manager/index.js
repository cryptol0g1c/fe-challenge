// Module dependencies
import { useContext, useEffect, useState } from "react";
import actionsDisptachers from "../../reducers/actions-dispatchers";
import { AppContext } from "../../reducers";
import useTransactionsForm from "../../hooks/useTransactionsForm";

// UI components
import Container from '@mui/material/Container';
import { Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchManager = () => {
  // const { state, dispatch } = useContext(AppContext);

  // const actions = actionsDisptachers(dispatch);

  // const { address } = state;

  // useEffect(() => {
  //   actions.getTransactions(address);
  // }, [address]);

  const {
    formValues,
    isFormValid,
    handleInputChange,
    handleOnBlurEvent,
  } = useTransactionsForm();

  return (
    <>
      <Container>
        <form noValidate autoComplete="off">
          <TextField 
            label="Address"
            variant="outlined"
            fullWidth
            required
            onChange={handleInputChange}
            onBlur={handleOnBlurEvent}
            name='address'
          />

          <Button
            variant="contained"
            type="submit"
            disableElevation
            endIcon={<SearchIcon />}
            sx={{
              marginTop: "10px"
            }}
          >
            Buscar
          </Button>
 
        </form>
      </Container>
    </>

  );
};

export default SearchManager;
