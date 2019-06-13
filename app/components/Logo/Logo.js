/* eslint-disable react/jsx-indent */
import React from 'react';
import { View, Text, Image } from 'react-native';

const Logo = () => (
    <View>
        <Image src={require('./images/background.png')}>
            <Image src={require('./images/logo.png')}/>
        </Image>
        <Text>Currency Converter</Text>
    </View>
);

export default Logo;
