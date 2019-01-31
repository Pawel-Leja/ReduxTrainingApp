import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm'

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
  };

  render() {
    return (
      <View style={styles.container}>
        <LoginForm />
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});