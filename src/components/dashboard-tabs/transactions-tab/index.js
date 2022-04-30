// Module dependencies
import { useContext } from 'react';
import { AppContext } from '../../../reducers';

// UI Components
import { Typography } from "@mui/material";

import MUIDataTable from "mui-datatables";


const TransationsTab = () => {
  const { state } = useContext(AppContext);
  const { transactions } = state;

  const columns = [
    {
     name: 'tx_hash',
     label: 'Txn Hash',
     options: {
      filter: true,
      sort: true,
      setCellProps: () => ({ style: {
        width: "100px",
        maxWidth: "100px",
      }}),
      customBodyRender: (value) => (
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
      )
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
        sort: false,
        customBodyRender: (value) => (
          new Date(value).toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' })
        )
      }
    },
    {
     name: 'value',
     label: 'Value',
     options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        if (parseInt(value, 10) !== 0 && !Number.isNaN(parseInt(value, 10))) {
          return (value / 1.0e+18).toFixed(3)
        } else {
          return value
        }
      }
     }
    },
    {
     name: 'fees_paid',
     label: 'Txn Fee',
     options: {
      filter: true,
      sort: false,
      customBodyRender: (value) => {
        if (parseInt(value, 10) !== 0 && !Number.isNaN(parseInt(value, 10))) {
          return (value / 1.0e+18).toFixed(6)
        } else {
          return value
        }
      }
     }
    },
  ];

  const options = {
    filter: true,
    filterType: 'dropdown',
    esponsive: 'standard',
    elevation: 0,
    selectableRowsHideCheckboxes: true,
  };

  return (
    <MUIDataTable
      title={'Transactions'}
      data={transactions}
      columns={columns}
      options={options}
    />
  );
};


export default TransationsTab;
