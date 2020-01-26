/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  ScrollView,
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';

import TopBar from './TopBar'
import ListButton from './ListButton'
import Weather from './Weather'

var data = [
  {
    "title" : "Clothing",
    "source" : require("../resources/clothing.png"),
    "items": ["Shirts", "Pants", "Jacket", "Socks", "Underwear", "Pajamas", "Shoes"]
  },
  {
    "title" : "Toiletries",
    "source" : require("../resources/toilet.png"),
    "items" : ["Toothbrush", "Toothpaste", "Deodorant", "Comb", "Shampoo", "Conditioner", "Face Wash", "Soap", "Body Wash", "Razor", "Contacts", "Floss", "Contact Solution", "Shaving Cream", "Sunscreen"]

  },
  {
    "title" : "Electronics",
    "source" : require("../resources/electronics.png"),
    "items" : ["Phone", "Phone Charger", "Laptop", "Laptop Charger", "Headphones", "Portable Charger"]
  },
  {
    "title" : "Misc",
    "source" : require("../resources/misc.png"),
    "items" : ["Medicine", "Pain Reliever", "Stomach Medicine", "Glasses", "Hand Sanitizer", "Keys", "Snacks", "Gum"]
  },
  {
    "title" : "Travel Items",
    "source" : require("../resources/pp.png"),
    "items" : ["Passport", "Wallet", "Valid ID (Drivers License)", "Plane Ticket", "Neck Pillow"]
  },
  {
    "title" : "TSA Ban List",
    "source" : require("../resources/banned.png"),
    "items" : ["Meat", "Liquids", "Bombs", "Guns"]
  },
  {
    "title" : "To Do",
    "source" : require("../resources/todo.png"),
    "items" : ["Check-in Flight", "Book Uber", "Download shows/movies"]
  }
]

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data : {},
        ready: false
      }
    }

    componentDidMount() {
        //console.log(this.props.navigation.state.params);
        let payload = this.props.navigation.state.params;
        let min = payload.min;
        let max = payload.max;
        let rain = payload.rain;
        let snow = payload.snow;

        if(min <= 50) {
          // VERY COLD
          data[0].items = [...data[0].items, "Heavy Jacket", "Boots", "Sweater", "Gloves", "Hat", "Scarf"]
          console.log(data[0].items);
        }
        else if(min <= 70) {
          data[0].items = [...data[0].items, "Jacket", "Windbreaker", "Sweater", "Gloves", "Hat"]
          console.log(data[0].items);
        }

        if(max >= 85) {
          data[0].items = [...data[0].items, "Shorts", "Hat", "Sunglasses"]
          console.log(data[0].items);
        }

        if(rain) {
          data[0].items = [...data[0].items, "Rain Jacket"];
          data[3].items = [...data[3].items, "Umbrella"];
        }
        this.setState({data : payload}, () => {this.setState({ready : true})});
    }

  render() {
    return (
      <>
      {
        this.state.ready &&
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={{flex : 1, backgroundColor : "#000000"}}>
            <View style={{flex: 2, backgroundColor: "white"}}>
              <TopBar city={this.state.data.city}/>
            </View>
            <View style={{flex: 1, backgroundColor: "white"}}>
              <Weather data={this.state.data}/>
            </View>
            <View style={{flex: 4, backgroundColor: "white"}}>
              <FlatList 
                data={data}
                renderItem={({ item }) => (
                  <ListButton title={item.title} source={item.source} items={item.items} />
                )}
                keyExtractor={item => item.title}
              />
            </View>
          </SafeAreaView>
        </>
      }
      </>
    );
  }
}

const styles = StyleSheet.create({
});

export default App;


