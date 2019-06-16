/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import {
TouchableOpacity,
View,
Text,
Image,
} from 'react-native';
import propTypes from 'prop-types';
import style from './styles';

const ClearButton = ({ text, onPress }) => (
    <TouchableOpacity style={style.container} onPress={onPress}>
        <View style={style.wrapper}>
            <Image resizeMode="contain" style={style.icon} source={require('./images/logo.png')} />
            <Text style={style.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);
ClearButton.propTypes = {
    text: propTypes.string,
    onPress: propTypes.func,
};
export default ClearButton;
