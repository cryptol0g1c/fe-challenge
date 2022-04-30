// Module dependencies
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../reducers';

// UI Components
import { Box, Tabs, Tab, Typography } from '@mui/material';
import SearchForm from '../search-form';
import Loading from '../loading';
import DashboardTabs from '../dashboard-tabs';
// import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

// Assets
import { wording } from '../../utils/constants';

const MainContainer = () => {
  const { state, dispatch } = useContext(AppContext);

  const { processing } = state;

  const { PAGE_TITLE } = wording;

  return (
    <Box sx={{ width: '100%' }} mt={4}>
      {/* <AppsOutlinedIcon color='primary' /> */}
      <Typography
        variant='h4'
        component='h1'
        color='primary'
        align='center'
        mb={3}
      >
        {PAGE_TITLE}
      </Typography>

      <SearchForm />

      { processing ? <Loading /> : <DashboardTabs /> }
    </Box>
  );
};

export default MainContainer;
