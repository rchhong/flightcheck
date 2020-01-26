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
        let city = this.props.navigation.getParam('destination', 'Houston');

        fetch(`http://api.openweathermap.org/data/2.5/forecast?appid=69ac8835b32b2d1e25552a9d3e29058f&id=4671654&units=imperial&q=${city},us`)
        .then(res => res.json())
        .then(res => {
            let numDays = this.props.navigation.getParam('days', 0);
            let foo = new Date();

            foo.setHours(0, 0, 0, 0);
            let stop = foo.getTime() + numDays * 24 * 60 * 60 * 1000;
            let data = {city, snow: false, rain: false, min: Number.MAX_VALUE, max: Number.MIN_VALUE}
            //console.log(res.list.length);
            let min = Number.MAX_VALUE
            let max =  Number.MIN_VALUE
            for(let i = 0; i < res.list.length; i++) {
                console.log("i: " + i + " " + res.list[i].weather[0].id)
                let temp = res.list[i].main.feels_like;
                let date = res.list[i].dt;
                if(date >= stop) break;

                if(temp <= min) {
                    min = temp
                }
                if(temp >= max) {
                    max = temp;
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

            }
            data.min = min;
            data.max = max;
            console.log(data);
            return data;
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