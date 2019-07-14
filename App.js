import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Weather from "./weather";

export default class App extends Component {
  state = {
    isLoaded: false
  };

  render(){
    const {isLoaded} = this.state;
    return (
      <View style={styles.container}>
        {!isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Data Loaded</Text>
          </View>
          
        )}
        {/* <Text style={{fontSize: 100, backgroundColor: 'red'}}>shut the Apple</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  loading: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: "flex-end",
    paddingLeft: 25
  }, 
  loadingText: {
    fontSize: 38, 
    marginBottom: 100
  }
});
