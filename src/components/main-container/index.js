// Module dependencies
import { useContext, useEffect, useState } from 'react';
import actionsDisptachers from '../../reducers/actions-dispatchers';
import { AppContext } from '../../reducers';

// UI Components
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchManager from '../search-manager';
import GridViewIcon from '@mui/icons-material/GridView';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

const MainContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const [tabValue, setTabValue] = useState(0);

  const actions = actionsDisptachers(dispatch);

  const { address } = state;

  useEffect(() => {
    actions.getTransactions(address);
  }, [address]);
  
  const handleTabChange = (_, newTabValue) => {
    setTabValue(newTabValue);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <AppsOutlinedIcon color='primary' />
      <Typography
        variant='h4'
        component='h1'
        color='primary'
        align='center'
      >
        Blockchain Data
      </Typography>

      <SearchManager />
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
        </Tabs>
      </Box>
    </Box>
  );
};

export default MainContainer;
