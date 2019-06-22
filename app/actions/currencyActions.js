/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
const SWAP_CURRENCY = 'SWAP_CURRENCY';
const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';

export const swapCurrencies = () => ({
    type: SWAP_CURRENCY,
});

export const changeCurrencyAmount = amount => ({
    type: CHANGE_CURRENCY_AMOUNT,
    amount,
});
