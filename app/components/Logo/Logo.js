/* eslint-disable react/jsx-indent */
import React from 'react';
import { View, Text, Image } from 'react-native';
import style from './styles';

const Logo = () => (
    <View style={style.container}>
        <Image resizeMode="contain" src={require('./images/background.png')} style={style.containerImage}>
            <Image resizeMode="contain" src={require('./images/logo.png')} style={style.image} />
        </Image>
        <Text style={style.text}>Currency Converter</Text>
    </View>
);

export default Logo;
