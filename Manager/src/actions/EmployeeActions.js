import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_FETCH_SUCCESS
} from '../actions/types';
import firebase from 'firebase';
import  {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};

export const employeeCreate = ({name, phone, shift}) => {
    const {currentUser} = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .push({name, phone, shift})
            .then(() => {
                dispatch({type: EMPLOYEE_CREATE});
                Actions.main().employeeList({type: 'reset'});
                // setTimeout(() => Actions.employeeList({type: 'reset'}), 0)

            });
    };
};

export const employeeFetch = () => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
            });
    };
};