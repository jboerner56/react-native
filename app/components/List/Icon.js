/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import propTypes from 'prop-types';
import { View, Image } from 'react-native';
import style from './style';

const Icon = ({ checkmark, visible }) => {
    const iconStyle = [style.icon];
    if (visible) {
        iconStyle.push(style.iconVisible);
    }
    return (
    <View style={iconStyle}>
        {checkmark
            ? <Image
                style={style.checkIcon}
                resizeMode="contain"
                source={require('./images/check.png')}
            />
                : null}
    </View>
    );
};

Icon.propTypes = {
    checkmark: propTypes.bool,
    visible: propTypes.bool,
};

export default Icon;
