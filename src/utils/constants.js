const wording = {
  // Globals
  PAGE_TITLE: 'Blockchain Data',
  SEARCH: 'search',

  // Transactions
  TRANSACTION_TAB: 'Transactions by Address',
  TRANSACTION_PLACEHOLDER: 'Wallet address',
  TRANSACTION_ERROR: 'Please, insert a valid address',

  // Analitics
  ANALITICS_TAB: 'Analitics by Token',
  SELECT_TOKEN: 'Select Token',

};

const tokenslist = [
  {
    value: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    label: 'Tether USD (USDT)',
  },
  {
    value: '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',
    label: 'BNB (BNB)',
  },
  {
    value: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    label: 'USD Coin (USDC)',
  },
  {
    value: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
    label: 'HEX (HEX)',
  },
];

export { wording, tokenslist };
