/* eslint-disable max-len */
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
import color from 'color';
import style from './styles';

const Input = (props) => {
    const { onPress, buttonText, editable = true } = props;
    const underlayColor = color(style.$butttonBackgroundBaseColor).darken(style.$butttonBackgroundBaseColorModifier);
    const containerStyles = [style.container];
    if (editable === false) {
        containerStyles.push(style.contentDisabled);
    }
    return (
    <View style={style.container}>
        <TouchableHighlight onPress={onPress} style={style.buttonContainer} underlayColor={underlayColor}>
            <Text style={style.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
        <View style={style.border} />
        <TextInput style={style.input} {...props} underlineColorAndroid="transparent" />
    </View>
    );
};
Input.propTypes = {
    onPress: propTypes.func,
    buttonText: propTypes.string,
    editable: propTypes.bool,
};

export default Input;
