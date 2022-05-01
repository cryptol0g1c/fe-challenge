// Module dependencies
import { useContext } from 'react';
import { AppContext } from '../../../reducers';
import {
  getLinealPricesConfig,
  mapPricesToDataSeries,
  mapPricesToXAxis
} from '../../../utils/chart-helpers';

// UI Components
import { Grid, Paper, Typography } from "@mui/material";
import Chart from "react-apexcharts";
import TokenSelector from './token-selector';


const AnaliticsTab = () => {
  const { state } = useContext(AppContext);
  const { tokenPrices } = state;

  const dataSeriesToken = mapPricesToDataSeries(tokenPrices);
  const xaxisToken = mapPricesToXAxis(tokenPrices);

  const monthlyConfig =  getLinealPricesConfig(dataSeriesToken, xaxisToken);
  const weeklyConfig =  getLinealPricesConfig(dataSeriesToken.slice(-7), xaxisToken.slice(-7));

  return (
      <>
        <TokenSelector />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant='h6'
              component='h6'
              color='primary'
              mb={3}
            >
              Historical Prices - Monthly
            </Typography>
            <Paper elevation={3}>
              <Chart
                options={monthlyConfig.options}
                series={monthlyConfig.series}
                type="line"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant='h6'
              component='h6'
              color='primary'
              mb={3}
            >
              Historical Prices - Weekly
            </Typography>
            <Paper elevation={3}>
              <Chart
                options={weeklyConfig.options}
                series={weeklyConfig.series}
                type="line"
              />
            </Paper>
          </Grid>
    
        </Grid>
      </>

  );
};


export default AnaliticsTab;
