import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  Switch,
  CheckBox,
  Linking
} from 'react-native';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
 

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }
    onPress() {
        this.setState({selected: !this.state.selected});
    }
    onSwipeLeft() {
        console.log('SWIPE LEFT')
        let url = `https://www.amazon.com/s?k=${this.props.item}&ref=nb_sb_noss_2`
        Linking.canOpenURL(url)
        .then((supported) => {
            if (!supported) {
            console.log("Can't handle url: " + url);
            } else {
            return Linking.openURL(url);
            }
        })
        .catch((err) => console.error('An error occurred', err));
    }
    render() {
        return (
            <GestureRecognizer
                onSwipeLeft={this.onSwipeLeft.bind(this)}
            >
                <View style={{backgroundColor: "#33663c", height: 50, borderBottomColor: '#555555', borderBottomWidth: 3, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <Text style={this.state.selected && {textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{this.props.item}</Text>
                        <CheckBox
                            value={this.state.selected}
                            onValueChange={this.onPress.bind(this)}
                        >

                        </CheckBox>
                </View>
            </GestureRecognizer>

        );
    }
}

export default ListItem;