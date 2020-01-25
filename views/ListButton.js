import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

class ListButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: false
        }
    }
    onPress() {
        console.log("PRESSED " + this.state.view)
        this.setState({view: !this.state.view});
    }
    render() {
        return (
            <>
                <TouchableOpacity onPress={this.onPress.bind(this)} style={{backgroundColor: "#FFFFFF", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flex: 1}}>
                        <Image style={{width: 80, height: 80, borderRadius: 40}} source={require("../resources/asdf.jpg")} />
                    </View>
                    <View style={{flex: 4, alignItems: "center", justifyContent: 'center'}}>
                        <Text>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
                {this.state.view && 
                    <View style={{backgroundColor: "#00FF00"}}>
                        <Text>
                            asdfdsafdsagf
                        </Text>
                    </View>
                }
            </>

        );
    }
}

export default ListButton;