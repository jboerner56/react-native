/* eslint-disable indent */
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        '@media ios': {
            paddingTop: 15,
        },
    },
    button: {
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    icon: {
        width: 16,
    },
});

export default styles;
