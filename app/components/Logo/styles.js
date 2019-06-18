/* eslint-disable indent */
import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
    $largeContainerSize: imageWidth,
    $largeImageSize: imageWidth / 2,
    $smallContainerSize: imageWidth / 2,
    $smallImageSize: imageWidth / 4,
    container: {
        alignItems: 'center',
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '$largeContainerSize',
        width: '$largeContainerSize',
    },
    image: {
        width: '$largeImageSize',
    },
    text: {
        fontWeight: '500',
        fontSize: 26,
        marginTop: 10,
        color: '$white',
    },
});
