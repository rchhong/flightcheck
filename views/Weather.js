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
      let allCombo = [{"weather" : "Rain", weatherIcon : require('../resources/rain.png')}, {"weather" : "Snow", weatherIcon : require('../resources/snow.png')}];
      let correct = [{"weather" : `Max: ${Math.round(this.props.data.max)} °F`, weatherIcon : require('../resources/hot.png')}, {"weather" : `Min: ${Math.round(this.props.data.min)} °F`, weatherIcon : require('../resources/min.png')}];

      if(this.props.data["rain"]) {
        correct.push(allCombo[0]);
      }
      if(this.props.data["snow"]) {
        correct.push(allCombo[1]);
      }

      

      this.setState({icons: correct}, () => {this.setState({ready: true})})


    }

    render() {
      return (
        <>
        {
          this.state.ready && (
            <View style={{flex: 1, backgroundColor: "white", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
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
