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
} from 'react-native';
// import { NavigationEvents } from 'react-navigation';

import TopBar from './TopBar'
import ListButton from './ListButton'
import Weather from './Weather'

const DATA = [
  {
    "title" : "Clothing",
    "source" : "../resources/asdf.jpg",
    "items": ["Shirts", "Pants", "Jacket", "Heavy Jacket", "Sweater", "Socks", "Underwear", "Pajamas", "Gloves", "Slippers", "Flip Flops", "Hat", "Boots", "Sneakers", "Scarf"]
  },
  {
    "title" : "Toiletries",
    "source" : "../resources/asdf.jpg",
    "items" : ["Toothbrush", "Toothpaste", "Deodorant", "Comb", "Shampoo", "Conditioner", "Face Wash", "Soap", "Body Wash", "Razor", "Contacts", "Floss", "Contact Solution", "Shaving Cream"]

  },
  {
    "title" : "Electronics",
    "source" : "../resources/asdf.jpg",
    "items" : ["Phone", "Phone Charger", "Laptop", "Laptop Charger", "Headphones", "Portable Charger"]
  },
  {
    "title" : "Misc",
    "source" : "../resources/asdf.jpg",
    "items" : ["Medicine", "Pain Reliever", "Stomach Medicine", "Glasses", "Hand Sanitizer", "Keys", "Snacks", "Gum"]
  },
  {
    "title" : "Travel Items",
    "source" : "../resources/asdf.jpg",
    "items" : ["Passport", "Wallet", "Valid ID (Drivers License)", "Plane Ticket", "Neck Pillow"]
  },
  {
    "title" : "TSA Travel List",
    "source" : "../resources/asdf.jpg",
    "items" : ["fuck the rules"]
  },
  {
    "title" : "To Do",
    "source" : "../resources/asdf.jpg",
    "items" : ["Check-in Flight", "Book Uber", "Download shows/movies"]
  }
]

class App extends Component {
    componentDidMount() {
        console.log(this.props.navigation.state.params);
    }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex : 1, backgroundColor : "#000000"}}>
          <View style={{flex: 2, backgroundColor: "#FF0000"}}>
            <TopBar />
          </View>
          <View style={{flex: 1, backgroundColor: "#00FF00"}}>
            <Weather />
          </View>
          <View style={{flex: 4, backgroundColor: "#0000FF"}}>
            <FlatList 
              data={DATA}
              renderItem={({ item }) => (
                <ListButton title={item.title} source={item.source} items={item.items} />
              )}
              keyExtractor={item => item.title}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
});

export default App;


