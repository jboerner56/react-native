/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import style from './styles';

const Logo = () => (
    <View style={style.container}>
        <ImageBackground resizeMode="contain" source={require('./images/background.png')} style={style.containerImage}>
            <Image resizeMode="contain" source={require('./images/logo.png')} style={style.image} />
        </ImageBackground>
        <Text style={style.text}>Currency Converter</Text>
    </View>
);

export default Logo;
