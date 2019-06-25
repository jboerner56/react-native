/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import propTypes from 'prop-types';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import { changePrimaryColor } from '../actions/themeActions';

const style = EStyleSheet.create({
    $blue: '$primaryBlue',
    $green: '$primaryGreen',
    $orange: '$primaryOrange',
    $purple: '$primaryPurple',
});

class Themes extends React.Component {
    static propTypes = {
        navigation: propTypes.object,
        dispatch: propTypes.func,
    }

    handleThemePress = (color) => {
        const { navigation, dispatch } = this.props;
        dispatch(changePrimaryColor(color));
        navigation.goBack();
    }

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
                <ListItem
                    text="Blue"
                    onPress={() => this.handleThemePress(style.$blue)}
                    selected
                    checkmark={false}
                    iconBackground={style.$blue}
                />
                <Separator />
                <ListItem
                    text="Orange"
                    onPress={() => this.handleThemePress(style.$orange)}
                    selected
                    checkmark={false}
                    iconBackground={style.$orange}
                />
                <Separator />
                <ListItem
                    text="Green"
                    onPress={() => this.handleThemePress(style.$green)}
                    selected
                    checkmark={false}
                    iconBackground={style.$green}
                />
                <Separator />
                <ListItem
                    text="Purple"
                    onPress={() => this.handleThemePress(style.$purple)}
                    selected
                    checkmark={false}
                    iconBackground={style.$purple}
                />
                <Separator />
            </ScrollView>
        );
    }
}

export default connect()(Themes);
