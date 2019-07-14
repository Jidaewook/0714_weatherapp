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
        // console.log(position);
        // this.setState({
        //   lat: position.coords.latitude,
        //   long: position.coords.longitude,
        //   isLoaded: true
        // });
        this.getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        console.log(error);
        this.setState({
          error: error.message
        });
      }
    );
  };

  getWeather = (lat, long) => {
    fetch(`https://samples.openweathermap.org/data/2.5/weather?lat={lat}&lon={long}&appid=b6907d289e10d714a6e88b30761fae22`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          temperature: json.main.temp,
          name: json.weather[0].main,
          isLoaded: true
        });
      })
      .catch(err => console.log(err));
  };


  render(){
    const {isLoaded, error, temperature} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />

        {isLoaded ? (
          <Weather 
            temperature={Math.floor(temperature - 273.15)}
          />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Data Loaded</Text>
            {error ? <Text>{error.message}</Text> : null}
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
