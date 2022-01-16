import React, {Component} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import QRScreenStyles from '../../styles/screens/QRScreenStyles';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import Button from '../../views/components/CustomButton';
import SQLiteDB from '../../utils/SQLiteDB';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {UpdateUserDetails} from '../../actions/QRScreenActions';

class QRScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      QRId: '',
      success: false,
    };
  }
  async componentDidMount() {}

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
          console.log('UserDetails'+ JSON.stringify(UserDetails));
          this.props.UpdateUserDetails(UserDetails);
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
  };

  render() {
    return (
      <SafeAreaView style={QRScreenStyles.safeAreaView}>
        <View style={QRScreenStyles.mainContainer}>
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
              reactivate={true}
              showMarker={true}
              reactivateTimeout={2000}
              flashMode={RNCamera.Constants.FlashMode.off}
            />
          </View>

          <View style={QRScreenStyles.buttonView}>
            <Button
              text={'Continue'}
              disabled={this.state.success ? false : true}
              buttoncolor={this.state.success ? 'green' : '#bcf5bc'}
              textcolor={'white'}
              border={false}
              onPress={() => {
                this.ContinueButton();
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  userdetails: state.userdetails,
});

const mapDispatchToProps = dispatch => ({
  UpdateUserDetails: bindActionCreators(UpdateUserDetails, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(QRScreen);
