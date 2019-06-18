/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import propTypes from 'prop-types';
import style from './style';
import Icon from './Icon';

const ListItem = ({
    text,
    onPress,
    selected = false,
    checkmark = true,
    visible = true,
    customIcon = null,
    iconBackGround,
}) => (
    <TouchableHighlight onPress={onPress} underlayColor={style.$underlayColor}>
        <View style={style.row}>
            <Text style={style.text}>{text}</Text>
            {selected ? <Icon checkmark={checkmark} visible={visible} iconBackGround={iconBackGround} /> : <Icon />}
            {customIcon}
        </View>
    </TouchableHighlight>
);
ListItem.propTypes = {
    text: propTypes.string,
    onPress: propTypes.func,
    selected: propTypes.bool,
    checkmark: propTypes.bool,
    visible: propTypes.bool,
    customIcon: propTypes.element,
    iconBackGround: propTypes.string,
};

export default ListItem;
