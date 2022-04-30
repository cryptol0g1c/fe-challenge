// Module dependencies
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../reducers';

// UI Components
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchManager from '../search-manager';
import Loading from '../loading';
// import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

// Assets
import { wording } from '../../utils/constants';

const MainContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const [tabValue, setTabValue] = useState(0);

  const { processing } = state;

  const { PAGE_TITLE } = wording;

  const handleTabChange = (_, newTabValue) => {
    setTabValue(newTabValue);
  }

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

      <SearchManager />

      {
        processing ? (
          <Loading />
          ) : (
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
                <Tab label="Item One" />
                <Tab label="Item Two" />
              </Tabs>
            </Box>
          )
      }
    </Box>
  );
};

export default MainContainer;
