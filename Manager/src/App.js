import  React, { Component} from 'react';
import {View} from 'react-native';
import {Header} from './components/common';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from "./components/LoginForm";
import Router from './Router';

class App extends Component{

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCQ3qNMU3BuWjj6hPaHDN_vpW_rDGGj04w',
            authDomain: 'auth-4aae5.firebaseapp.com',
            databaseURL: 'https://auth-4aae5.firebaseio.com',
            projectId: 'auth-4aae5',
            storageBucket: 'auth-4aae5.appspot.com',
            messagingSenderId: '575225024043'
        });

    }


    render() {
        const store = createStore(reducers, {},applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}
};

export default App;