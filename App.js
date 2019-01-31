import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import store from './store';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };


  render() {

    return (
      // Provider allows all elements mounted below to use the store
      <Provider store={store}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
