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

class Weather extends Component {
    render() {
      return (
        <View style={{flex: 1, backgroundColor: "#FFc0cb", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <View style={{height: "100%", flex: 1, backgroundColor: "#FF0000", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Image style={{width: 50, height: 50}}source={require('../resources/asdf.jpg')} />
            <Text>Hot</Text>
          </View>
          <View style={{height: "100%", flex: 1, backgroundColor: "#443355", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <Image style={{width: 50, height: 50}}source={require('../resources/asdf.jpg')} />
            <Text>Cold</Text>
          </View>
          <View style={{height: "100%", flex: 1, backgroundColor: "#98ff33", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <Image style={{width: 50, height: 50}}source={require('../resources/asdf.jpg')} />
            <Text>Snow</Text>
          </View>
          <View style={{height: "100%", flex: 1, backgroundColor: "#887766", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <Image style={{width: 50, height: 50}}source={require('../resources/asdf.jpg')} />
            <Text>Rain</Text>
          </View>
        </View>
      );
    }
}

export default Weather;