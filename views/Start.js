/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React , {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';


import {KeyboardAvoidingView} from 'react-native';
import DatePicker from './DatePicker';

export default class Home extends Component {
    constructor(props) {
    super(props);
      this.state = {destination: "", days: "", date: ""};
  }
    
    updateState(date) {
        this.setState(date)
    }
    
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center"}} behavior="height" enabled>
      <SafeAreaView style={{width: "100%", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "white"}}>
            <View style={{flex: 1}}>
            </View>
            
          <View style={{ width: "100%", flex: 5, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "white"}}>
            <Image source={require('../resources/travel.png')} style={{width:200, height: 200}} />
          </View>

          <View style={{ width: "100%", flex: 2, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "white"}}>
            <Text style={{ fontSize: 25, fontFamily: 'Courier New'}}> Where are you going? </Text>
            <TextInput
              placeholder="Eg. Houston"
              style={{borderWidth: 1, borderRadius: 10, height: 45, width: 200, fontFamily: 'Courier', textAlign: 'center', marginTop: 15}}
              onChangeText={(destination) => this.setState({ destination })}
              value={this.state.destination}
            />
          </View>


          <View style={{ width: "100%", flex: 2, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "white", marginTop:20}}>
            <Text style={{ fontSize: 25, fontFamily: 'Courier New'}}> When are you going? </Text>
            <DatePicker callback={this.updateState.bind(this)} />
          </View>



          <View style={{ width: "100%", flex: 2, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor : "white"}}>
            <Text style={{ fontSize: 20, fontFamily: 'Courier New'}}> How long are you going for? </Text>
            <TextInput
              placeholder="Eg. 2"
              keyboardType="numeric"
              style={{ marginTop: 15, borderWidth: 1, borderRadius: 10, height: 45, width: 200, fontFamily: 'Courier', textAlign: "center", }}
              onChangeText={(days) => this.setState({ days })}
              value={this.state.days}
            />

          </View>

        <View style={{width: "100%", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {/* <Button
           color="black"
            onPress={() => {
              this.props.navigation.navigate('Loading', { text1, text2, date })
            }}
            title="Submit"
          /> */}
          <TouchableOpacity onPress={() => {
            // if(this.state.destination == "" || this.state.days == "" || this.state.date == "") {
            //   alert("You did not fill out one of the fields")
            // }
              this.state.days = Number(this.state.days);
              console.log(this.state);
              this.props.navigation.navigate('Loading', this.state)
            }}
            style={{backgroundColor : "#5dade2", width: "30%", height: 40, alignItems: 'center', justifyContent: 'center', borderRadius:7}}>
            <Text style={{fontFamily:"Courier-bold", color: "white", fontSize: 18}}>Submit</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
      </KeyboardAvoidingView>
            
    );
  }
}
