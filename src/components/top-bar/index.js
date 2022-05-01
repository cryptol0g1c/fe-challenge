// UI Components
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

// Assets
import { wording } from '../../utils/constants';


const TopBar = () => {
  const { NAV_DESCRIPTION } = wording;

  return (
    <AppBar position="static" mb={4}>
      <Container maxWidth="xl">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            {NAV_DESCRIPTION}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopBar;
