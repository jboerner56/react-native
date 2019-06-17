/* eslint-disable indent */
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        marginRight: 10,
    },
    text: {
        color: '$white',
        fontSize: 15,
        fontWeight: '300',
        paddingVertical: 15,
    },
});
