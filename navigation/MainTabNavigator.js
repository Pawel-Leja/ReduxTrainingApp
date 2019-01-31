import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';

const RegistrationStack = createStackNavigator({
  SignUp: RegistrationScreen,
});

RegistrationStack.navigationOptions = {
  tabBarLabel: 'Sign Up',
};

const LoginStack = createStackNavigator({
  SignIn: LoginScreen,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Sign In',
};

export default createBottomTabNavigator({
  RegistrationStack,
  LoginStack
});
