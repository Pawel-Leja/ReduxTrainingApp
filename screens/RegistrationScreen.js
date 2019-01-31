import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Users from '../components/Users'
import RegistrationForm from '../components/RegistrationForm'

class RegistrationScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <RegistrationForm />

        </View>
        <ScrollView style={styles.scrollView}>
          <Users />
        </ScrollView>
      </View>
    );
  }
}

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  scrollView: {
    marginTop: 20,
  }
});
