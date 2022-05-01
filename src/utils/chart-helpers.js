const getLinealPricesConfig = (dataSeriesToken, xaxisToken) => ({
  series: [
    {
      name: "series-1",
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
    title: {
      text: 'Average High & Low Temperature',
      align: 'left'
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    markers: {
      size: 1
    },
    xaxis: {
      categories: xaxisToken,
      title: {
        text: 'Month'
      }
    },
    // yaxis: {
    //   title: {
    //     text: 'Temperature'
    //   },
    //   min: 5,
    //   max: 40
    // },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    }
  },
});

const mapPricesToDataSeries = (tokenPrices) => (
  tokenPrices.map(({ price }) => price.toFixed(2))
);

const mapPricesToXAxis = (tokenPrices) => (
  tokenPrices.map(({ date }) => date)
);

export { getLinealPricesConfig, mapPricesToDataSeries, mapPricesToXAxis };
