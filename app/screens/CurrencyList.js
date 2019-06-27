/* eslint-disable react/destructuring-assignment */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import {
    FlatList,
    View,
    StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencyActions';

class CurrencyList extends React.Component {
static propTypes = {
    navigation: propTypes.object,
    dispatch: propTypes.func,
    baseCurrency: propTypes.string,
    quoteCurrency: propTypes.string,
    primaryColor: propTypes.string,
}

    handlePress = (currency) => {
        const { type } = this.props.navigation.state.params;
        const { navigation } = this.props;
        if (type === 'base') {
            this.props.dispatch(changeBaseCurrency(currency));
        } else if (type === 'quote') {
            this.props.dispatch(changeQuoteCurrency(currency));
        }
        navigation.goBack(null);
    }

    render() {
        const { baseCurrency, quoteCurrency, navigation } = this.props;
        let comparisonCurrency = baseCurrency;
        if (navigation.state.params.type === 'quote') {
            comparisonCurrency = quoteCurrency;
        }
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === comparisonCurrency}
                            onPress={() => this.handlePress(item)}
                            iconBackGround={this.props.primaryColor}
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
}
const mapStateToProps = state => ({
    baseCurrency: state.currencies.baseCurrency,
    quoteCurrency: state.currencies.quoteCurrency,
    primaryColor: state.theme.primaryColor,
});

export default connect(mapStateToProps, null)(CurrencyList);
