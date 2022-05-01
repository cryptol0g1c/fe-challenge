// Module dependencies
import { useContext } from 'react';
import { AppContext } from '../../../reducers';
import {
  getLinealPricesConfig,
  mapPricesToDataSeries,
  mapPricesToXAxis
} from '../../../utils/chart-helpers';

// UI Components
import { Grid } from '@mui/material';
import TokenSelector from './token-selector';
import ChartCard from './chart-card';
import Loading from '../../loading';

// Assets
import { wording } from '../../../utils/constants';


const AnaliticsTab = () => {
  const { state } = useContext(AppContext);
  const { tokenPrices, processing } = state;

  const { CHART_TITLE_MONTHLY, CHART_TITLE_WEEKLY } = wording;

  // Charts Configs and Data processing
  const dataSeriesToken = mapPricesToDataSeries(tokenPrices);
  const xaxisToken = mapPricesToXAxis(tokenPrices);

  const monthlyConfig =  getLinealPricesConfig(dataSeriesToken, xaxisToken);
  const weeklyConfig =  getLinealPricesConfig(dataSeriesToken.slice(-7), xaxisToken.slice(-7));

  const chartsList = [
    {
      options: monthlyConfig.options,
      series: monthlyConfig.series,
      title: CHART_TITLE_MONTHLY,
    },
    {
      options: weeklyConfig.options,
      series: weeklyConfig.series,
      title: CHART_TITLE_WEEKLY,
    },
  ];

  return (
    <>
      <TokenSelector />

      {
        processing ? ( <Loading /> ) : (
          <Grid container spacing={2}>
            {
              chartsList.map(chartConfig => (
                <Grid item xs={12} sm={6} key={chartConfig.title}>
                  <ChartCard {...chartConfig} />
                </Grid>
              ))
            }
          </Grid>
        )
      }
    </>
  );
};

export default AnaliticsTab;
