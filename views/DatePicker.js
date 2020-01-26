import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class MyDatePicker extends Component {
  
    constructor(props){
    super(props);
    let currDate = new Date();
    let formattedMonth = currDate.getMonth() < 10 ? "0" + (currDate.getMonth() + 1) : currDate.getMonth() + 1;
    let formattedDate = currDate.getDate() < 10 ? "0" + currDate.getDate() : currDate.getDate();
    let res = `${currDate.getFullYear()}-${formattedMonth}-${formattedDate}`;
    console.log(res);

    this.state = {date : res}
    this.props.callback({date: res})
  }

  update(date) {
      this.setState({date});
      this.props.callback({date})
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
        onDateChange={(date) => {this.update(date)}}
      />
    )
  }
}
