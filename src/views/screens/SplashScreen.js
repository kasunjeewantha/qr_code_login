import React, {Component} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import SplashScreenStyles from '../../styles/screens/SplashScreenStyles';
import {APP_VERSION} from '../../config/index';

class SplashScreen extends Component {
  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate('QRScreen');
    }, 4000);
  } // End of componentDidMount()

  render() {
    return (
      <SafeAreaView style={SplashScreenStyles.safeAreaView}>
        <View style={SplashScreenStyles.mainContainer}>
          <View style={SplashScreenStyles.title}>
            <Text style={SplashScreenStyles.titleText}> PRONTO QR</Text>
          </View>
          <View style={SplashScreenStyles.version}>
            <Text style={SplashScreenStyles.versionText}>
              {' '}
              v {APP_VERSION}{' '}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default SplashScreen;
