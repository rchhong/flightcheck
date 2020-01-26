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
                <View style={{height: "100%", flex: 1, backgroundColor: "#3399cc", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Image style={{width: 50, height: 50}} source={this.props.icon} />
                    <Text>{this.props.weather}</Text>
                </View>
            )
        }
}

export default WeatherIcon;