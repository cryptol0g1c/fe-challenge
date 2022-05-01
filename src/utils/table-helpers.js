// Module dependencies
import { Typography, Tooltip } from '@mui/material';


// Array with the configs for each independent column. 
const tableColumns = [
  {
    name: 'tx_hash',
    label: 'Txn Hash',
    options: {
      filter: true,
      sort: false,
      setCellProps: () => ({ style: {
        width: '200px',
        maxWidth: '200px',
      }}),
      customBodyRender: (value) => formatTxCell(value)
    }
  },
  {
    name: 'block_height',
    label: 'Block',
    options: {
      filter: true,
      sort: true,
    }
  },
  {
    name: 'block_signed_at',
    label: 'Signed At',
    options: {
      filter: true,
      sort: true,
      customBodyRender: (value) => formatDate(value)
    }
  },
  {
    name: 'value',
    label: 'Value',
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => parseWeiToEther(value, 3),
    }
  },
  {
    name: 'fees_paid',
    label: 'Txn Fee',
    options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => parseWeiToEther(value, 6),
    }
  },
];

// Global table options.
const tableOptions = {
  filter: true,
  filterType: 'dropdown',
  esponsive: 'standard',
  elevation: 0,
  selectableRowsHideCheckboxes: true,
};

/**
 * Parse the value from wei to ether.
 * @param {String} value Current value in wei.
 * @param {Number} digits Number of decimals.
 * @returns Number. 
 */
const parseWeiToEther = (value, digits) => {
  if (parseInt(value, 10) !== 0 && !Number.isNaN(parseInt(value, 10))) {
    return (value / 1.0e+18).toFixed(digits);
  } else {
    return value;
  }
};

/**
 * Format the raw date to a more redeable string format.
 * @param {Date} value Date to be formated.
 * @returns String.
 */
const formatDate = (value) => (
  new Date(value).toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })
);

/**
 * Custom formater to handle long string addresses.
 * @param {String} value Address.
 * @returns React Component.
 */
const formatTxCell = (value) => (
  <Tooltip title={value} placement='right'>
    <Typography
      variant='string'
      component='p'
      sx={{
        textOverflow: 'ellipsis',
        overflow: 'hidden',
      }}
      >
      {value}
    </Typography>
  </Tooltip>
);

export { tableColumns, tableOptions };
