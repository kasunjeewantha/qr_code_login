import React, {Component} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import SplashScreenStyles from '../../styles/screens/SplashScreenStyles';
import {APP_VERSION} from '../../config/index';
import {GetRegisteredUsers} from '../../process/SplashScreenProcess';

export default class SplashScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    await GetRegisteredUsers();

    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate('QRScreen');
    }, 2000);
  }

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
