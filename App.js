import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Number extends Component {
  componentDidMount(){
    setInterval(() => (
      this.setState(previousState => ({
        isShowingText: !previousState.isShowingText
      }))
    ), 1000);
  }

  state = {isShowingText: true};

  render() {
    if (!this.state.isShowingText) {
      return <Text>--------state is false--------------</Text>
    }
    
    return <Text>----------------state is true</Text>
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Open up App.js to start working on your app!</Text>
      <Number />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'auto',
  },

});
