/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable indent */
import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import propTypes from 'prop-types';
import style from './styles';

const ConvertedRate = ({ base, quote, date, conversionRate }) => (
    <Text style={style.smallText}>
        1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
    </Text>
);

ConvertedRate.propTypes = {
    date: propTypes.object,
    base: propTypes.string,
    quote: propTypes.string,
    conversionRate: propTypes.number,
};

export default ConvertedRate;
