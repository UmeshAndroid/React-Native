import  React from 'react';
import {Text, TouchableOpacity, Alert} from 'react-native';

const Button = ({onPress, children}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonSyle}>
            <Text style={styles.textStyle}>
                { children}
            </Text>
        </TouchableOpacity>
    );
};


const styles = {
    textStyle: {
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: '600',
        color: '#007aff'
    },
    buttonSyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderColor: '#007aff',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: "#fff"
    }
}
export {Button};