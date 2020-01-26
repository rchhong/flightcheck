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

class WeatherIcon extends Component {

        render() {
            return (
                <View style={{height: "100%", flex: 1, backgroundColor: "white", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Image style={{width: 50, height: 50}} source={this.props.icon} />
                    <Text style={{color: "black", fontFamily:"Verdana", marginTop: 10}}>{this.props.weather}</Text>
                </View>
            )
        }
}

export default WeatherIcon;
