import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
    ImageBackground
} from 'react-native';

class TopBar extends Component {
    render() {
        return (
                <ImageBackground source={require("../resources/city.jpg")} style={{height:'100%', width:'100%'}} imageStyle={{opacity:.5}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 50, fontFamily:"Georgia"}}>{this.props.city}</Text>
            </View>
                </ImageBackground>
        );
    }
}

export default TopBar
