/* eslint-disable no-console */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { View, Text, Keyboard, Animated, Platform } from 'react-native';
import style from './styles';

const ANIMATION_DURATION = 300;

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.containerImageWidth = new Animated.Value(style.$largeContainerSize);
        this.imageWidth = new Animated.Value(style.$largeImageSize);
    }

    componentDidMount() {
        let showListener = 'keyboardWillShow';
        let hideListener = 'keyboardWillHide';
        if (Platform.OS === 'android') {
            showListener = 'keyboardDidShow';
            hideListener = 'keyboardDidHide';
        }
        this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
        this.keyboardHideListener = Keyboard.addListener(hideListener, this.KeyboardHide);
    }

    componentWillUnmount() {
        this.keyboardShowListener.remove();
        this.keyboardHideListener.remove();
    }

    keyboardShow = () => {
        Animated.parallel([
            Animated.timing(this.containerImageWidth, {
                toValue: style.$smallContainerSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(this.imageWidth, {
                toValue: style.$smallImageSize,
                duration: ANIMATION_DURATION,
            }),
        ]).start();
    }

    keyboardHide = () => {
        Animated.parallel([
            Animated.timing(this.containerImageWidth, {
                toValue: style.$largeContainerSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(this.imageWidth, {
                toValue: style.$largeImageSize,
                duration: ANIMATION_DURATION,
            }),
        ]).start();
    }

    render() {
        const containerImageStyle = [
            style.containerImageS,
            { width: this.containerImageWidth, height: this.containerImageWidth },
        ];

        const imageStyle = [
            style.logo,
            { width: this.imageWidth },
        ];

        return (
            <View style={style.container}>
                <Animated.Image
                resizeMode="contain"
                source={require('./images/background.png')}
                style={containerImageStyle}
                >
                    <Animated.Image
                    resizeMode="contain"
                    source={require('./images/logo.png')}
                    style={imageStyle}
                    />
                </Animated.Image>
                <Text style={style.text}>Currency Converter</Text>
            </View>
        );
    }
}

export default Logo;
