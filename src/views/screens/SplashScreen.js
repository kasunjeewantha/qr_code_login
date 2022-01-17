import React, {Component} from 'react';
import {View, SafeAreaView, Text,PermissionsAndroid,Platform} from 'react-native';
import SplashScreenStyles from '../../styles/screens/SplashScreenStyles';
import {APP_VERSION} from '../../config/index';
import {GetRegisteredUsers} from '../../process/SplashScreenProcess';
import { Permission, PERMISSION_TYPE } from "../../utils/AppPermissions";

const PermissionList = [
  PermissionsAndroid.PERMISSIONS.CAMERA,
  PermissionsAndroid.PERMISSIONS.CALL_PHONE,
  PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
];

export default class SplashScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    await GetRegisteredUsers();

    if (Platform.OS === 'android') {
      //checkAndroidPermission()

      let Count = 0;
      for (let i = 0; i < PermissionList.length; ++i) {
        let hasPermission = await PermissionsAndroid.check(PermissionList[i]);
        if (hasPermission) Count++;
      }
      console.log('Number of Permissions allow ' + Count);

      if (Count == 5) {
        this.timeoutHandle = setTimeout(() => {
          this.props.navigation.navigate('QRScreen');
        }, 4000);
      } else {
        await Permission.requestMultiple([
          PERMISSION_TYPE.camera,
          PERMISSION_TYPE.readExternalStorage,
          PERMISSION_TYPE.writeExternalStorage,
          PERMISSION_TYPE.callPhone,
          PERMISSION_TYPE.recordAudio,
        ]);
        this.props.navigation.navigate('QRScreen');
      }
    } else {
      this.timeoutHandle = setTimeout(() => {
        this.props.navigation.navigate('QRScreen');
      }, 4000);
    }
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
