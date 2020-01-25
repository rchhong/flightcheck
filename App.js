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

import TopBar from './views/TopBar'
import ListButton from './views/ListButton'

const DATA = [
  {
    "title" : "Clothing",
    "source" : "../resources/asdf.jpg"
  },
  {
    "title" : "Toiletries",
    "source" : "../resources/asdf.jpg"
  },
  {
    "title" : "Electronics",
    "source" : "../resources/asdf.jpg"
  },
  {
    "title" : "Misc",
    "source" : "../resources/asdf.jpg"
  },
  {
    "title" : "Travel Items",
    "source" : "../resources/asdf.jpg"
  },
  {
    "title" : "TSA Travel List",
    "source" : "../resources/asdf.jpg"
  },
  {
    "title" : "To Do",
    "source" : "../resources/asdf.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex : 1, backgroundColor : "#000000"}}>
          <View style={{flex: 2, backgroundColor: "#FF0000"}}>
            <TopBar />
          </View>
          <View style={{flex: 1, backgroundColor: "#00FF00"}}>

          </View>
          <View style={{flex: 4, backgroundColor: "#0000FF"}}>
            <FlatList 
              data={DATA}
              renderItem={({ item }) => (
                <ListButton title={item.title} source={item.source} />
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
