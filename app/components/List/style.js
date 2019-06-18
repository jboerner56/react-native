/* eslint-disable indent */
import EStyleSheet from 'react-native-extended-stylesheet';
import StyleSheet from 'react-native';

const styles = EStyleSheet.create({
    $underlayColor: '$border',
    row: {
        paddingHorizintal: 18,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '$white',
    },
    text: {
        fontSize: 14,
        color: '$darkText',
    },
    separator: {
        marginLeft: 20,
        backgroundColor: '$border',
        flex: 1,
        heigth: StyleSheet.hairLineWidth,
    },
    icon: {
        backgroundColor: 'transparent',
        width: 25,
        height: 25,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconVisible: {
        backgroundColor: '$primaryBlue',
    },
    checkIcon: {
        width: 16,
    },
});

export default styles;
