/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-console */
/* eslint-disable react/jsx-indent */
// eslint-disable-next-line react/jsx-indent
/* eslint-disable indent */
import React from 'react';
import {
    ScrollView, StatusBar, Platform, Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import propTypes from 'prop-types';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.os === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = '#25';

class Options extends React.Component {
    static propTypes = {
        navigation: propTypes.object,
        alertWithType: propTypes.func,
    }

    handleThemesPress = () => {
        const { navigation } = this.props;
        navigation.navigate('Themes');
    }

    handleSitePress = () => {
        const { alertWithType } = this.props;
        Linking.openURL('http://fixer.io').catch(() => alertWithType('Error', 'We Apologize', 'database can not be opened right now'));
    }

    render() {
        return (
        <ScrollView>
            <StatusBar translucent={false} barStyle="default" />
            <ListItem
                text="Themes"
                onPress={this.handleThemesPress}
                customIcon={
                    <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
                }
            />
            <Separator />
            <ListItem
            text="Fixer.io"
            onPress={this.handleSitePress}
            customIcon={
                <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />
            }
            />
            <Separator />
        </ScrollView>
        );
    }
}

export default connectAlert(Options);
