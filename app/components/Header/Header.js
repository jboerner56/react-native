/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import propTypes from 'prop-types';
import style from './styles';

const Header = ({ onPress }) => (
    <View style={style.container}>
        <TouchableOpacity style={style.button} onPress={onPress}>
            <Image resizeMode="contain" source={require('./images/gear.png')} style={style.icon} />
        </TouchableOpacity>
    </View>
);

Header.propTypes = {
    onPress: propTypes.func,
};

export default Header;
