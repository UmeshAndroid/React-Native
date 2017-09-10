import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import firebase from 'firebase';
import {Header, Spinner, Button, Card, CardSection} from './components/common';
import LoginInForm from './components/LoginInForm';

class App extends Component {

    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCQ3qNMU3BuWjj6hPaHDN_vpW_rDGGj04w',
            authDomain: 'auth-4aae5.firebaseapp.com',
            databaseURL: 'https://auth-4aae5.firebaseio.com',
            projectId: 'auth-4aae5',
            storageBucket: 'auth-4aae5.appspot.com',
            messagingSenderId: '575225024043'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("logged in");
                this.setState({loggedIn: true});
            } else {
                console.log("logged in false");
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                console.log("logged in switch");
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => {
                                firebase.auth().signOut();
                            }}>Logout</Button>
                        </CardSection>
                    </Card>
                );

            case false:
                console.log("logged in false switch");
                return <LoginInForm/>;

            default:
                return <Spinner size="large"/>;

        }
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>

        );
    };

}

const styles = {
    containerStyle: {
        flex: 1


    },
    textSytle: {
        padding: 10
    },
    errorStyle: {
        fontSize: 18,
        color: 'red',
        alignSelf: 'center'
    }
}

export default App;