import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ActivityIndicator,
  StatusBar
} from 'react-native';

class Loading extends Component {
    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/forecast?appid=69ac8835b32b2d1e25552a9d3e29058f&id=4671654&units=imperial&q=Houston,us")
        .then(res => res.json())
        .then(res => {
            //console.log(res.list[0].weather[0].id)
            for(let i = 0; i < res.list.length; i++) {
                let data = {snow: false, rain: false, cold: false, hot: false}
                console.log("i: " + i + " " + res.list[i].weather[0].id)
                const COLD_THRESHOLD = 60;
                const HOT_THRESHOLD = 80;
                let temp = res.list[i].main.feels_like;
                if(temp <= COLD_THRESHOLD) {
                    data['cold'] = true;
                }
                if(temp >= HOT_THRESHOLD) {
                    data['hot'] = true;
                }

                let weather = res.list[i].weather[0].id/100;


                switch(weather) {
                    case 2:
                    case 3:
                    case 5:
                        data['rain'] = true;
                        break;
                    case 6:
                        data['snow'] = true;
                        break;
                }
                return data;
            }
        }).then( data => this.props.navigation.navigate('Results', data)
        );
    }

    render() {
        return (
            <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{flex : 1, backgroundColor : "#000000"}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size="large" color="#00FF00"/>
                </View>
            </SafeAreaView>
          </>
        );
    }
}


export default Loading;