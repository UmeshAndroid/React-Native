import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, Alert, View} from 'react-native';
import {CardSection} from './common';

class ListItem extends Component {

    onRowPress() {
        const {name} = this.props.employee;
        Alert.alert(name);
    }

    render() {
        console.log(this.props.employee);
        const {name} = this.props.employee;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text
                            style={styles.titleStyle}>

                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );

    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;