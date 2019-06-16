/* eslint-disable indent */
import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const inputHeight = 50;
const BORDER_RADIUS = 5;
export default EStyleSheet.create({
    $buttonBackgroundBaseColor: '$white',
    $buttonBackgroundBaseColorModifier: 0.3,
    container: {
        background: '$white',
        width: '90%',
        height: inputHeight,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    containerDisabled: {
        backgroundColor: '$lightGrey',
    },
    buttonContainer: {
        height: inputHeight,
        alignItems: 'center',
        justifyContent: 'center',
        background: '$white',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 20,
        paddingHorizonal: 15,
        color: '$primaryBlue',
    },
    input: {
        height: inputHeight,
        flex: 1,
        fontSize: 16,
        paddingHorizonal: 6,
        color: '$inputText',
    },
    border: {
        height: inputHeight,
        width: StyleSheet.hairlineWidth,
        backgroundColor: '$border',
    },
});
