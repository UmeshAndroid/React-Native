import React from 'react';
import {View, Text, TextInput} from 'react-native';


const Input = ({label, value, onChangeText, placeHolder,secureTextEntry}) => {
const {containerStyle, inputStyle, labelStyle} = styles;
    return (
        <View style={containerStyle}>

            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeHolder}
            value={value}
            onChangeText={onChangeText}
            style={inputStyle}
            underlineColorAndroid="transparent"
            />
        </View>
    );
}

const styles={
    containerStyle:{
        flex:1,
        flexDirection:'row',
        height:40,
        alignItems:'center',
    },

    inputStyle:{
        flex:2,
        paddingRight:5,
        paddingLeft:5,
        color:'#000',
        lineHeight:23,
        fontSize:18
    },
    labelStyle:{
        flex:1,
        color:'#000',
        fontSize:18,
        paddingLeft:20

    }
}

export {Input};