/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent-props */
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
    const buttonTextStyles = [style.buttonText];
    if (props.textColor) {
        buttonTextStyles.push({ color: props.textColor });
    }

    return (
    <View style={containerStyles}>
        <TouchableHighlight
        onPress={onPress}
        style={style.buttonContainer}
        underlayColor={underlayColor}
        >
            <Text style={buttonTextStyles}>{buttonText}</Text>
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
    textColor: propTypes.string,
};

export default Input;
