// UI Components
import { Box, Typography } from '@mui/material';
import DashboardTabs from '../dashboard-tabs';
import TopBar from '../top-bar';

// Assets
import { wording } from '../../utils/constants';

const MainContainer = () => {
  const { PAGE_TITLE } = wording;

  return (
    <>
      <TopBar />
      
      <Box sx={{ width: '100%' }} mt={4}>
        <Typography
          variant='h4'
          component='h1'
          color='primary'
          align='center'
          mb={3}
        >
          {PAGE_TITLE}
        </Typography>

        <DashboardTabs />
      </Box>
    </>

  );
};

export default MainContainer;
