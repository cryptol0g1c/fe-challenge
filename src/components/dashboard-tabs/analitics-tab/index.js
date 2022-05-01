// Module dependencies
import { useContext, useEffect } from 'react';
import { AppContext } from '../../../reducers';
import actionsDisptachers from '../../../reducers/actions-dispatchers';

// UI Components
import { Container, Grid, Paper } from "@mui/material";
import Chart from "react-apexcharts";
import TokenSelector from './token-selector';


// Assets
import { getLinealPricesConfig } from '../../../utils/chart-helpers';

const AnaliticsTab = () => {
  const { state, dispatch } = useContext(AppContext);
  const { tokenAddress, tokenPrices } = state;

  const dataSeriesToken = tokenPrices.map(({ price }) => price.toFixed(2));
  const xaxisToken = tokenPrices.map(({ date }) => date);

  const monthlyConfig =  getLinealPricesConfig(dataSeriesToken, xaxisToken);
  const weeklyConfig =  getLinealPricesConfig(dataSeriesToken.slice(-7), xaxisToken.slice(-7));

  return (
      <>
        <TokenSelector />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3}>
              <Chart
                options={monthlyConfig.options}
                series={monthlyConfig.series}
                type="line"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
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
