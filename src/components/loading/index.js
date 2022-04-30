// UI Components
import { Box, CircularProgress } from '@mui/material';


const Loading = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', zIndex: '10', height: '100%' }}>
      <CircularProgress />
    </Box>
  )
};

export default Loading;
