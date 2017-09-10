import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card, CardSection,Button, Input, Spinner} from './common';
import firebase from 'firebase';



class LoginInForm extends Component{
    state = {email:'',password:'', error:'',loading:false};

    onButtonPress(){
        const {email, password} = this.state;
        this.setState({error:'', loading:true});
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(this.onLoginSuccess.bind(this))
                .catch(
                this.onLoginFailure.bind(this)
                );
            });
    }


    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:''
        });
    }

    onLoginFailure(){
        this.setState({error:'Authentication Failed.', loading:false});
    }
    renderButton(){
        if(this.state.loading){
            return <Spinner/>;
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        );
    }


    render(){
        return(
        <View >
            <Card>
                <CardSection>

                    <Input
                        placeHolder="abc@gmail.com"
                        label="Email"
                        value = {this.state.email}
                        onChangeText={email=> this.setState({email})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeHolder="*****"
                        label="Password"
                        value = {this.state.password}
                        onChangeText={password=> this.setState({password})}
                    />
                </CardSection>

                <Text style={ styles.errorStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        </View>
        );
    }
}


const styles={

    errorStyle:{
        fontSize:18,
        color:'red',
        alignSelf:'center'
    }
}

export default LoginInForm;