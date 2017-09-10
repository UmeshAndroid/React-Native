// import libraries for making a component

import React from 'react';
import {Text, View } from 'react-native';




// Make a Component

const Header  = (props) =>{
return (
    <View style={styles.viewStyle}>
    <Text style={styles.textStyle}> {props.headerText} </Text>
    </View>
);
};


const styles= {
    viewStyle:{
        backgroundColor:'#f8f8f8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'

    },
    textStyle:{
        fontSize:20,  color:'#000000'
    }
};
// Make the components available to other parts of the app
export { Header };
