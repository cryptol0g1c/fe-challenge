// Module dependencies
import { useContext } from 'react';
import useAnaliticsForm from '../../../hooks/useAnaliticsForm';
import { AppContext } from '../../../reducers';

// UI Components
import { Avatar, Box, MenuItem, Chip, TextField, Stack } from '@mui/material';

// Assets
import { tokenslist, wording } from '../../../utils/constants';

const TokenSelector = () => {
  const { state } = useContext(AppContext);
  const { tokenData } = state;

  const { handleDropdownChange, tokenAddress } = useAnaliticsForm();

  const { SELECT_TOKEN } = wording;

  return (
    <Stack direction="row" spacing={2} mb={2} sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
      <TextField
        id="select-token"
        select
        label={SELECT_TOKEN}
        value={tokenAddress}
        onChange={handleDropdownChange}
        mb={4}
        size="small"
        sx={{
          width: '200px'
        }}
      >
        {tokenslist.map(({ value, label}) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>

      <Chip
        avatar={<Avatar alt="Natacha" src={tokenData.logo_url} />}
        label={tokenData.contract_ticker_symbol}
        variant="outlined"
      />
     </Stack>
  )
}

export default TokenSelector;
