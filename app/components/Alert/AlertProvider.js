/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import propTypes from 'prop-types';
import { View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

class AlertProvider extends React.Component {
static childContextTypes = {
    alertWithType: propTypes.func,
    alert: propTypes.func,
};

static propTypes = {
    children: propTypes.any,
};

getChildContext() {
    return {
    alert: (...args) => this.dropdown.alert(...args),
    alertWithType: (...args) => this.dropdown.alertWithType(...args),
    };
}

render() {
    const { children } = this.props;
    return (
    <View style={{ flex: 1 }}>
        {React.Children.only(children)}
        <DropdownAlert
        ref={(ref) => {
            this.dropdown = ref;
        }}
        />
    </View>
    );
}
}

export default AlertProvider;
