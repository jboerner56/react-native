/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { View, StatusBar } from 'react-native';
import Container from '../components/Container';
import { Logo } from '../components/Logo';
import { Input } from '../components/CurrencyInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '80';


class Home extends React.Component {
    handleBaseCurrency = () => {
        console.log('press base currency');
    };

    handleQuoteCurrency = () => {
        console.log('press quote currency');
    };

    handleChange = () => {
        console.log('change text');
    };

    render() {
        return (
        <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <Input
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handleBaseCurrency}
        />
        <Input
        // eslint-disable-next-line react/jsx-indent-props
        buttonText={TEMP_QUOTE_CURRENCY}
        onPress={this.handleQuoteCurrency}
        editable={false}
        />
        <View />
        </Container>
        );
    }
}
export default Home;
