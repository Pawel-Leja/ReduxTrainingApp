import React from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

class LoginForm extends React.Component {
    state = {
        login: '',
        password: ''
    };

    // While mounting this component, it will fetch the user data by fetchUsers action
    componentWillMount() {
        this.props.fetchUsers();
    }

    onPress() {
        // Returns true, if found user with correct login and password in the store
        const userFound = this.props.users.find(user => {
            return user.login === this.state.login && user.password === this.state.password;
        });
        if (userFound) Alert.alert('User found');
        else Alert.alert('User not found');

        // Clears text inputs
        this.setState({
            login: '',
            password: ''
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='login' autoCorrect={false} onChangeText={text => this.setState({ login: text })} value={this.state.login} />
                <TextInput style={styles.input} placeholder='password' autoCorrect={false} onChangeText={text => this.setState({ password: text })} value={this.state.password} />
                <TouchableOpacity style={styles.button} onPress={this.onPress.bind(this)}><Text style={{ textAlign: 'center', }}>SIGN IN</Text></TouchableOpacity>
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
LoginForm.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
}

// Maps store state to the component props
mapStateToProps = state => ({
    users: state.users.items,
});

export default connect(mapStateToProps, { fetchUsers })(LoginForm);