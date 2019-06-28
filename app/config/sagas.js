/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable indent */
import {
    takeEvery,
    select,
    call,
    put,
} from 'redux-saga/effects';
import {
    SWAP_CURRENCY,
    CHANGE_BASE_CURRENCY,
    GET_INITIAL_CONVERSION,
    CONVERSION_ERROR,
    CONVERSION_RESULT,
} from '../actions/currencyActions';

const getLatestRate = currency => fetch(`https://fixer.handlebarlabs.com/?base=${currency}`);

function* fetchLatestConverionRates(action) {
    try {
        let currency = action.currency;
        if (currency === undefined) {
            currency = yield select(state => state.currencies.baseCurrency);
        }
        const response = yield call(getLatestRate, currency);
        const result = yield response.json();
        if (result.error) {
            yield put({ type: CONVERSION_ERROR, error: result.error });
        } else {
            yield put({ type: CONVERSION_RESULT, result });
        }
    } catch (err) {
        yield put({ type: CONVERSION_ERROR, errpr: err.message });
    }
}

export default function* rootSage() {
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConverionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConverionRates);
    yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConverionRates);
}
