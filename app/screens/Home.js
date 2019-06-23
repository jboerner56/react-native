/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { connect } from 'react-redux';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import propTypes from 'prop-types';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { Input } from '../components/CurrencyInput';
// import ClearButton from '../components/Buttons';
import { ConvertedRate } from '../components/ConversionRate';
import { Header } from '../components/Header';
import { swapCurrencies, changeCurrencyAmount } from '../actions/currencyActions';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '80';
const TEMP_CONVERSION_RATE = 1;
const TEMP_CONVERSION_DATE = new Date();
class Home extends React.Component {
    static propTypes = {
        navigation: propTypes.object,
        dispatch: propTypes.func,
    }

    handleBaseCurrency = () => {
        const { navigation } = this.props;
        navigation.navigate('CurrencyList', { title: 'Base Currency' });
        };

    handleQuoteCurrency = () => {
        const { navigation } = this.props;
        navigation.navigate('CurrencyList', { title: 'Quote Currency' });
    };

    handleChange = (amount) => {
        this.props.dispatch(changeCurrencyAmount(amount));
    };

    handleSwap = () => {
        this.props.dispatch(swapCurrencies());
    };

    handleOptionsPress = () => {
        const { navigation } = this.props;
        navigation.navigate('Options');
    };

    render() {
        return (
        <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
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
        </KeyboardAvoidingView>
        </Container>
        );
    }
}

export default connect()(Home);
