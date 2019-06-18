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
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import currencies from '../data/currencies';

const TEMP_CURRENCY = 'US';

class CurrencyList extends React.Component {
    handlePress = () => {
        console.log('row press');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === TEMP_CURRENCY}
                            onPress={this.handlePress}
                            checkmark={false}
                            visible={false}
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
}

export default CurrencyList;
