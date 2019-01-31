import React from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createUser } from '../actions/userActions';

class RegistrationForm extends React.Component {
    state = {
        login: '',
        password: '',
        name: '',
        age: ''
    };


    onPress() {
        // Create object user ready to send to the store
        const user = {
            login: this.state.login,
            password: this.state.password,
            name: this.state.name,
            age: this.state.age
        }
        // Sends user to the store
        this.props.createUser(user);

        // Clears text inputs
        this.setState({
            login: '',
            password: '',
            name: '',
            age: ''
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='login' autoCorrect={false} onChangeText={text => this.setState({ login: text })} value={this.state.login} />
                <TextInput style={styles.input} placeholder='password' autoCorrect={false} onChangeText={text => this.setState({ password: text })} value={this.state.password} />
                <TextInput style={styles.input} placeholder='name' autoCorrect={false} onChangeText={text => this.setState({ name: text })} value={this.state.name} />
                <TextInput style={styles.input} placeholder='age' keyboardType='numeric' autoCorrect={false} onChangeText={text => this.setState({ age: text })} value={this.state.age} />
                <TouchableOpacity style={styles.button} onPress={this.onPress.bind(this)}><Text style={{ textAlign: 'center', }}>SIGN UP</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 30,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 20,
        paddingHorizontal: 40
    },
    button: { // style for simple button
        backgroundColor: '#F9E0ED',
        paddingVertical: 15,
        marginBottom: 15,
        opacity: 0.9
    }
});

// Sets proptypes for the component
RegistrationForm.propTypes = {
    createUser: PropTypes.func.isRequired
};

export default connect(null, { createUser })(RegistrationForm);