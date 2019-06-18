/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import propTypes from 'prop-types';
import { View, Image } from 'react-native';
import style from './style';

const Icon = ({ checkmark, visible, iconBackground }) => {
    const iconStyle = [style.icon];
    if (visible) {
        iconStyle.push(style.iconVisible);
    }
    if (iconBackground) {
        iconStyle.push({ backgroundColor: iconBackground });
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
    iconBackground: propTypes.string,
};

export default Icon;
