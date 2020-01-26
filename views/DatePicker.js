import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2020-01-26"}
      this.props.callback({date:"2020-01-26"})
  }
 
  render(){
    return (
      <DatePicker
        style={{alignItems:"center", marginTop: 10}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2020-01-01"
        maxDate="2030-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
            showIcon={false}
        customStyles={{
            dateInput: {
                fontFamily: 'Courier',
                borderRadius: 10,
                width: 300,
                borderColor: "black",
            }
            

          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.props.callback(date)}}
      />
    )
  }
}
