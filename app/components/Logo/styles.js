/* eslint-disable indent */
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        height: imageWidth,
        width: imageWidth,
    },
    image: {
        width: imageWidth / 2,
    },
    text: {
        fontWeigth: '500',
        fontSize: 26,
        marginTop: 10,
        color: '$white',
    },
});
