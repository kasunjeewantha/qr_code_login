import React, {Component} from 'react';
import {View, SafeAreaView, Text, BackHandler, Alert} from 'react-native';
import QRScreenStyles from '../../styles/screens/QRScreenStyles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import Button from '../../views/components/CustomButton';
import MainTitleBar from '../../views/components/MainTitleBar';
import SQLiteDB from '../../utils/SQLiteDB';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {UpdateUserDetails} from '../../actions/QRScreenActions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Colors from '../../styles/Colors';
import BackArrow from '../../assets/icons/backarrow.svg';

class QRScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QRId: '',
      success: false,
      reactive: true,
    };
  }
  async componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', async () => {
      this.setState({
        reactive: true,
      });
    });
    BackHandler.addEventListener('hardwareBackPress', this.onPressBack);
  }

  componentWillUnmount() {
    this.unsubscribe();
    BackHandler.removeEventListener('hardwareBackPress', this.onPressBack);
  }

  onPressBack = () => {
    Alert.alert('Confirm Logout', 'Do you really want to logout?', [
      {
        text: 'YES',
        onPress: () => {
          BackHandler.exitApp();
        },
      },
      {
        text: 'NO',
        onPress: () => null,
      },
    ]);
    return true;
  };

  onRead = async e => {
    let QRId;
    console.log('e', JSON.stringify(e.data));
    QRId = JSON.stringify(e.data).slice(1, -1);
    console.log('mystring', QRId);

    this.setState({
      QRId: QRId,
    });

    await SQLiteDB.SelectUserTable(UserList => {
      console.log('UserList', JSON.stringify(UserList));
      let success,
        UserDetails = [];
      for (let i = 0; i < UserList.length; ++i) {
        if (UserList[i].QRId == this.state.QRId) {
          console.log('login success');
          success = true;

          UserDetails.push({
            QRId: UserList[i].QRId,
            Username: UserList[i].Username,
            Email: UserList[i].Email,
          });
          console.log('UserDetails' + JSON.stringify(UserDetails));
          this.props.UpdateUserDetails(UserDetails);
          Alert.alert('Login Successful', 'Click continue button', [
            {text: 'OK'},
          ]);
          break;
        } else {
          console.log('login fail');
          success = false;
        }
      }
      this.setState({
        success: success,
      });
    });
  };

  ContinueButton = () => {
    console.log('ContinueButton');
    this.setState({
      reactive: false,
    });
    this.props.navigation.navigate('MainScreen');
  };

  render() {
    return (
      <SafeAreaView style={QRScreenStyles.safeAreaView}>
        <MainTitleBar
          title="Pronto QR"
          optionLeftActive={true}
          optionRightActive={false}
          onPressLeftOption={this.onPressBack.bind()}
          OptionLeftSVG={BackArrow}
        />
        <View style={QRScreenStyles.mainContainer}>
          <KeyboardAwareScrollView
            behavior="padding"
            contentContainerStyle={QRScreenStyles.KeyboardAwareScrollView}>
            <View style={QRScreenStyles.titleView}>
              <Text style={QRScreenStyles.mainTitle}>
                Place the QR code inside the area
              </Text>
              <Text style={QRScreenStyles.subTitle}>
                Scanning will start automatically
              </Text>
            </View>
            <View style={QRScreenStyles.qrContainer}>
              <QRCodeScanner
                onRead={this.onRead}
                reactivate={this.state.reactive}
                showMarker={true}
                reactivateTimeout={2000}
                flashMode={RNCamera.Constants.FlashMode.off}
              />
            </View>

            <View style={QRScreenStyles.buttonView}>
              <Button
                text={'Continue'}
                disabled={this.state.success ? false : true}
                buttoncolor={
                  this.state.success
                    ? Colors.BUTTON_ACTIVE_GREEN_COLOR
                    : Colors.BUTTON_INACTIVE_GREEN_COLOR
                }
                textcolor={'white'}
                border={false}
                onPress={() => {
                  this.ContinueButton();
                }}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  UpdateUserDetails: bindActionCreators(UpdateUserDetails, dispatch),
});

export default connect('', mapDispatchToProps)(QRScreen);
