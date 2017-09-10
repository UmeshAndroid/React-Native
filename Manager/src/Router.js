import React from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import {Alert} from 'react-native';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {

    return (
        <Router>
            <Scene key="root" hideNavBar={true}>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login" />
                </Scene>

                <Scene key="main">
                    <Scene
                        onRight={()=> Actions.employeeCreate()}
                        rightTitle="Add"
                        key="employeeList"
                        component={EmployeeList}
                        title="Employee List"
                        initial
                    />
                <Scene
                    key="employeeCreate"
                    component={EmployeeCreate}
                    title="Employee Create"
                />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;