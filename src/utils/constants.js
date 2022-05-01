// List of wording.
const wording = {
  // Globals
  PAGE_TITLE: 'Blockchain Data',
  SEARCH: 'search',
  ARIA_LABEL_TABS: 'Data tabs',

  // Transactions
  TRANSACTION_TAB: 'Transactions by Address',
  TRANSACTION_PLACEHOLDER: 'Wallet address',
  TRANSACTION_ERROR: 'Please, insert a valid address',

  // Analitics
  ANALITICS_TAB: 'Analitics by Token',
  SELECT_TOKEN: 'Select Token',
  SERIES_NAME: 'Token value',
  CHART_TITLE_MONTHLY: 'Historical Prices - Monthly',
  CHART_TITLE_WEEKLY: 'Historical Prices - Weekly',
  CHART_AXIS_LABEL: 'Dates',
  TOKEN_LOGO_ALT: 'Token Logo',
};

// List of token, with the address value and the matching name.
const tokensList = [
  {
    value: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    label: 'Tether USD',
  },
  {
    value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    label: 'USD Coin',
  },
  {
    value: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
    label: 'HEX',
  },
  {
    value: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    label: 'BNB',
  },
];

export { wording, tokensList };
