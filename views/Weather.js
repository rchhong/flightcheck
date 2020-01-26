import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';

import WeatherIcon from './WeatherIcon'

class Weather extends Component {
    constructor(props) {
      super(props);
      this.state = {
        icons: [],
        ready: false,
      }
    } 

    componentDidMount() {
      console.log(this.props.data);
      let allCombo = [{"weather" : "Cold", weatherIcon : require('../resources/asdf.jpg')}, {"weather" : "Hot", weatherIcon : require('../resources/asdf.jpg')}, 
      {"weather" : "Rain", weatherIcon : require('../resources/asdf.jpg')}, {"weather" : "Snows", weatherIcon : require('../resources/asdf.jpg')}];
      let correct = [];
      if(this.props.data["cold"]) {
        correct.push(allCombo[0]);
      }
      if(this.props.data["hot"]) {
        correct.push(allCombo[1]);
      }
      if(this.props.data["rain"]) {
        correct.push(allCombo[2]);
      }
      if(this.props.data["snow"]) {
        correct.push(allCombo[3]);
      }

      this.setState({icons: correct}, () => {this.setState({ready: true})})


    }

    render() {
      return (
        <>
        {
          this.state.ready && (
            <View style={{flex: 1, backgroundColor: "#FFc0cb", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            {
              this.state.icons.map((item, index) => {
                return <WeatherIcon weather={item.weather} icon={item.weatherIcon} key={index} />
              })          
            }
          </View>
          )
        }
        </>

        );
    }
}

export default Weather;