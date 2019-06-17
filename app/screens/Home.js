/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { Input } from '../components/CurrencyInput';
// import ClearButton from '../components/Buttons';
import { ConvertedRate } from '../components/ConversionRate';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '80';
const TEMP_CONVERSION_RATE = 1;
const TEMP_CONVERSION_DATE = new Date();

export default class Home extends React.Component {
    handleBaseCurrency = () => {
        console.log('press base currency');
    };

    handleQuoteCurrency = () => {
        console.log('press quote currency');
    };

    handleChange = (text) => {
        console.log('change text', text);
    };

    handleSwap = () => {
        console.log('currenty swapped');
    };

    handleOptionsPress = () => {
        console.log('handle options press');
    };

    render() {
        return (
        <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <Logo />
        <Input
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handleBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleChange}
        />
        <Input
        buttonText={TEMP_QUOTE_CURRENCY}
        onPress={this.handleQuoteCurrency}
        editable={false}
        value={TEMP_QUOTE_PRICE}
        />
        <ConvertedRate
        base={TEMP_BASE_CURRENCY}
        quote={TEMP_QUOTE_CURRENCY}
        date={TEMP_CONVERSION_DATE}
        conversionRate={TEMP_CONVERSION_RATE}
        />
        {/* <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwap}
        /> */}
        </Container>
        );
    }
}
