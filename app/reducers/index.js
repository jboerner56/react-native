/* eslint-disable indent */
import { combineReducers } from 'redux';
import currencyReducer from './currencyReducers';
import themeReducer from './themeReducer';

export default combineReducers({
    currencyReducer,
    themeReducer,
});
