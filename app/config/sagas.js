/* eslint-disable no-console */
/* eslint-disable indent */
import { takeEvery } from 'redux-saga/effects';
import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION } from '../actions/currencyActions';

function* fetchLatestConverionRates(action) {
    console.log('need to do still', action);
    yield;
}

export default function* rootSage() {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConverionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConverionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConverionRates);
}
