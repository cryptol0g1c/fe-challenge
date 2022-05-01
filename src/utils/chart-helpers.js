// Assets
import { wording } from './constants';

const {
  SERIES_NAME,
  CHART_AXIS_LABEL,
 } = wording;

/**
 * Create the config object to feed into line chart.
 * @param {Array} dataSeriesToken 
 * @param {Array} xaxisToken 
 * @returns Object. 
 */
const getLinealPricesConfig = (dataSeriesToken, xaxisToken) => ({
  series: [
    {
      name: SERIES_NAME,
      data: dataSeriesToken
    }
  ],
  options: {
    chart: {
      height: 350,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#77B6EA', '#545454'],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: xaxisToken,
      title: {
        text: CHART_AXIS_LABEL
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  },
});

/**
 * Map the API response to match the data series array.
 * @param {Array} tokenPrices 
 * @returns Array.
 */
const mapPricesToDataSeries = (tokenPrices) => (
  tokenPrices.map(({ price }) => price.toFixed(2))
);

/**
 * Map the API response to match the x axis array.
 * @param {Array} tokenPrices 
 * @returns Array.
 */
const mapPricesToXAxis = (tokenPrices) => (
  tokenPrices.map(({ date }) => date)
);

export { getLinealPricesConfig, mapPricesToDataSeries, mapPricesToXAxis };
