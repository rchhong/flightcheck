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
} from 'react-native';


import {KeyboardAvoidingView} from 'react-native';
import DatePicker from './DatePicker';

export default class Home extends Component {
    constructor(props) {
    super(props);
      this.state = {text: "", text2: ""};
  }
    
    updateState(date) {
        this.setState({date})
    }
    
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center"}} behavior="height" enabled>
      <SafeAreaView style={{width: "100%", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#4477cc"}}>
          <View style={{ width: "100%", flex: 3, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#9977ee"}}>
            <Text>asdfadsfsdaf</Text>
          </View>

          <View style={{ width: "100%", flex: 2, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#00FF00"}}>
            <Text style={{ fontSize: 25, fontFamily: 'Courier New'}}> When are you going? </Text>
            <TextInput
              placeholder="Input your destination"
              style={{borderWidth: 1, borderRadius: 10, height: 45, width: 200, fontFamily: 'Courier', textAlign: 'center', marginTop: 10}}
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            />
          </View>

          {/* <View style={{ borderWidth: 1, borderRadius: 10, marginLeft: 30, marginRight: 30, marginBottom: 30, marginTop: 50 }}>



          </View> */}
          <View style={{ width: "100%", flex: 2, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#FF0000"}}>
            <Text style={{ fontSize: 25, fontFamily: 'Courier New'}}> When are you going? </Text>
            <DatePicker callback={this.updateState.bind(this)} />
          </View>



          <View style={{ width: "100%", flex: 2, flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor : "#0000FF"}}>
            <Text style={{ fontSize: 25, fontFamily: 'Courier New'}}> When are you going? </Text>
            <TextInput
              placeholder="Input your destination"
              style={{ marginTop: 10, borderWidth: 1, borderRadius: 10, height: 45, width: 200, fontFamily: 'Courier', textAlign: "center", }}
              onChangeText={(text2) => this.setState({ text2 })}
              value={this.state.text2}
            />

          </View>
{/* 

          <View style={{ borderWidth: 1, borderRadius: 10, marginLeft: 30, marginRight: 30, marginBottom: 30, marginTop: 50, }}>
          </View> */}

        <View style={{width: "100%", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {/* <Button
           color="black"
            onPress={() => {
              this.props.navigation.navigate('Loading', { text1, text2, date })
            }}
            title="Submit"
          /> */}
          <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Loading', { text1, text2, date })
            }}
            style={{backgroundColor : "#0000FF", width: "30%", height: 30, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
      </KeyboardAvoidingView>
            
    );
  }
}
