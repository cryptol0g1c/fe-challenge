// Module dependencies
import { useState } from 'react';
import useAnaliticsForm from '../../../hooks/useAnaliticsForm';

// UI Components
import { Box, MenuItem, TextField } from '@mui/material';

// Assets
import { tokenslist, wording } from '../../../utils/constants';

const TokenSelector = () => {
  const { handleDropdownChange, tokenAddress } = useAnaliticsForm();

  const { SELECT_TOKEN } = wording;

  return (
    <Box mb={3}>
      <TextField
        id="select-token"
        select
        label={SELECT_TOKEN}
        value={tokenAddress}
        onChange={handleDropdownChange}
        mb={4}
      >
        {tokenslist.map(({ value, label}) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  )
}

export default TokenSelector;
