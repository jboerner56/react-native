/* eslint-disable react/destructuring-assignment */
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

class Home extends React.Component {
    static propTypes = {
        navigation: propTypes.object,
        dispatch: propTypes.func,
        baseCurrency: propTypes.string,
        quoteCurrency: propTypes.string,
        amount: propTypes.number,
        conversionRate: propTypes.number,
        isFetching: propTypes.bool,
        lastConvertedDate: propTypes.object,
    }

    handleBaseCurrency = () => {
        const { navigation } = this.props;
        navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
        };

    handleQuoteCurrency = () => {
        const { navigation } = this.props;
        navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
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
        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
        if (this.props.isFetching) {
            quotePrice = '...';
        }
        return (
        <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
            <Logo />
            <Input
                buttonText={this.props.baseCurrency}
                onPress={this.handleBaseCurrency}
                defaultValue={this.props.amount.toString()}
                keyboardType="numeric"
                onChangeText={this.handleChange}
            />
            <Input
            buttonText={this.props.quoteCurrency}
            onPress={this.handleQuoteCurrency}
            editable={false}
            value={quotePrice}
            />
            <ConvertedRate
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.lastConvertedDate}
            conversionRate={this.props.conversionRate}
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

const mapStateToProps = (state) => {
    const { baseCurrency } = state.currency.baseCurrency;
    const { quoteCurrency } = state.currency.quoteCurrency;
    const { conversionSelector } = state.currency.conversions[baseCurrency] || {};
    const { rates } = conversionSelector.rates || {};
    return {
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    };
};

export default connect(mapStateToProps, null)(Home);
