import React, { Component } from "react";
import { View, SafeAreaView, Text } from "react-native";
import QRScreenStyles from "../../styles/screens/QRScreenStyles";

class QRScreen extends Component {
  componentDidMount() {
    
  } // End of componentDidMount()

  render() {
    return (
      <SafeAreaView style={QRScreenStyles.safeAreaView}>
        <View style={QRScreenStyles.mainContainer}>
          
        </View>
      </SafeAreaView>
    );
  }
}

export default QRScreen;
