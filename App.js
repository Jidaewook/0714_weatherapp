import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Weather from "./weather";


export default class App extends Component {
  state = {
    isLoaded: false,
    lat: null,
    long: null,
    error: null
  };

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          isLoaded: true
        });
      },
      error => {
        this.setState({
          error: error.message
        });
      }
    );
  };




  render(){
    const {isLoaded, error} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />

        {isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Data Loaded</Text>
            {error ? <Text>error</Text> : null}
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
