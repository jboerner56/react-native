/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
} from 'react-native';
import propTypes from 'prop-types';
import style from './styles';

const Input = ({ onPress, buttonText, editable = true }) => {
    <View style={style.container}>
        <TouchableHighlight onPress={onPress} style={style.buttonContainer}>
            <Text style={style.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
        <View style={style.border} />
        <TextInput style={style.input} />
    </View>
};
Input.propTypes = {
    onPress: propTypes.func,
    buttonText: propTypes.string,
    editable: propTypes.bool,
};

export default Input;
