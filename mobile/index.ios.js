/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

const onButtonPress23on = () => {
  fetch('http://192.168.0.3/23/on', {  
  method: 'GET',
})
};

const onButtonPress23off = () => {
  fetch('http://192.168.0.3/23/off', {  
  method: 'GET',
})
};

export default class mobile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Room automation!
        </Text>
        <Text style={styles.instructions}>
          Control Sebastin's Room
        </Text>
        <Button
        onPress={onButtonPress23on}
        title="Switch Backlight On"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        <Button
        onPress={onButtonPress23off}
        title="Switch Backlight Off"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mobile', () => mobile);
