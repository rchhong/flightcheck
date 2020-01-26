import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  Switch,
  CheckBox
} from 'react-native';

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
    render() {
        return (
            <View style={{backgroundColor: "#33663c", height: 50, borderBottomColor: '#555555', borderBottomWidth: 3, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Text style={this.state.selected && {textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{this.props.item}</Text>
                    <CheckBox
                        value={this.state.selected}
                        onValueChange={this.onPress.bind(this)}
                    >

                    </CheckBox>
            </View>
        );
    }
}

export default ListItem;