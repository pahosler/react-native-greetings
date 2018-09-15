import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './menu';
import Toolbar from './toolbar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar toolBar={styles.toolBar}>
          <Menu />
        </Toolbar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ededed',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  toolBar: {
    backgroundColor: '#00a5ba',
    height: 36,
    marginTop: 25
  }
});

/* <Text>Open up App.js to start working on your app!</Text>
  <Text>Changes you make will automatically reload.</Text>
  <Text>Shake your phone to open the developer menu.</Text> */
