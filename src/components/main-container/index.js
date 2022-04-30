// UI Components
import { Box, Typography } from '@mui/material';
import SearchForm from '../search-form';
import DashboardTabs from '../dashboard-tabs';
// import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

// Assets
import { wording } from '../../utils/constants';

const MainContainer = () => {
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

      <DashboardTabs />
    </Box>
  );
};

export default MainContainer;
