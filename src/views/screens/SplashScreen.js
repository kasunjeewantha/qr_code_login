import React, { Component } from "react";
import { View, SafeAreaView, Text } from "react-native";
import SplashScreenStyles from "../../styles/screens/SplashScreenStyles";

class SplashScreen extends Component {
  componentDidMount() {
    //this.timeoutHandle = setTimeout(() => {
      //this.props.navigation.navigate("WelcomeScreen");
    //}, 4000);
  } // End of componentDidMount()

  render() {
    return (
      <SafeAreaView style={SplashScreenStyles.safeAreaView}>
        <View style={SplashScreenStyles.mainContainer}>
        </View>
      </SafeAreaView>
    );
  }
}

export default SplashScreen;
