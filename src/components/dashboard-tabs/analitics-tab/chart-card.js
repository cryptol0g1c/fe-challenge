// Module dependencies
import { object, string } from 'prop-types';

// UI Components
import { Paper, Typography } from '@mui/material';
import Chart from 'react-apexcharts';


const ChartCard = ({ options, series, title }) => {
  return (
    <>
     <Typography
        variant="body1"
        color="primary"
        mb={2}
      >
        {title}
      </Typography>
      <Paper elevation={3}>
        <Chart
          options={options}
          series={series}
          type="line"
        />
      </Paper>
    </>
  );
}

ChartCard.propTypes = {
  options: object.isRequired,
  series: object.isRequired,
  title: string,
};

export default ChartCard;
