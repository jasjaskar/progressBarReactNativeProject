import React from "react";

import { Dimensions } from "react-native";
import { Button, Text, View } from "react-native";


const incremental_width = 10
const max_width = 100

// i have done increment for 2 seconds to take screen record
const incrementalSeconds = 2000 


class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      screenWidth : 10
    }
  }
  
  
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log(",",this.state)
      this.setState({screenWidth : this.state.screenWidth + incremental_width})
      console.log(this.state)
      if(this.state.screenWidth === max_width){
        clearInterval(this.timer)
      }
    },incrementalSeconds)
  }

  render(){
    return (
      <View style={{flex:1}}>
        <Text style={{marginTop:10}}>Progress bar</Text>
        <View style={{ 
          width:Dimensions.get("window").width * (this.state.screenWidth/max_width),
          marginTop : 10,
          }}>
          <Button
            color="#f194ff"
          />
        </View>
      </View>
    );
  }
}




export default App;
