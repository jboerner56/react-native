/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
const SWAP_CURRENCY = 'SWAP_CURRENCY';
const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
const CHANGE_QUOTE_CURRENCY = 'CHANGE_QUOTE_CURRENCY';

export const swapCurrencies = () => ({
    type: SWAP_CURRENCY,
});

export const changeCurrencyAmount = amount => ({
    type: CHANGE_CURRENCY_AMOUNT,
    amount: parseFloat(amount),
});

export const changeBaseCurrency = currency => ({
    type: CHANGE_BASE_CURRENCY,
    currency,
});

export const changeQuoteCurrency = currency => ({
    type: CHANGE_QUOTE_CURRENCY,
    currency,
});
