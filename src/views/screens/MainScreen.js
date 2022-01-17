import React, {Component} from 'react';
import {View, SafeAreaView, Text,Alert,BackHandler} from 'react-native';
import MainScreenStyles from '../../styles/screens/MainScreenStyles';
import { CommonActions } from "@react-navigation/native";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {UpdateUserDetails} from '../../actions/QRScreenActions';
import MainScreenTabNavigator from '../navigators/Tab/MainScreenTabNavigator';
import MainTitleBar from '../../views/components/MainTitleBar';
import BackArrow from "../../assets/icons/backarrow.svg";

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onPressBack);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onPressBack);
  }

  onPressBack = () => {
    
    Alert.alert("Confirm Logout", "Do you really want to logout?", [
      {
        text: "YES",
        onPress: () => {
          this.props.navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: "QRScreen" }],
            })
          );
        },
      },
      {
        text: "NO",
        onPress: () => null,
      },
    ]);
    return true;
  };

  render() {
    //console.log('Main Screen Props : ', JSON.stringify(this.props.userdetails));
    //console.log('View Note Screen Props : ', JSON.stringify(this.props.usernotes));
    return (
      <SafeAreaView style={MainScreenStyles.safeAreaView}>
        <MainTitleBar
          title="Home"
          optionLeftActive={true}
          optionRightActive={false}
          onPressLeftOption={this.onPressBack.bind()}
          OptionLeftSVG={BackArrow}
        />
        <View style={MainScreenStyles.mainContainer}>
          <View style={MainScreenStyles.userDetailView}>
            <Text style={MainScreenStyles.userDetailText}>
              {' '}
              Username : {this.props.userdetails.Username}
            </Text>
            <Text style={MainScreenStyles.userDetailText}>
              {' '}
              Email: {this.props.userdetails.Email}
            </Text>
          </View>
          <View style={MainScreenStyles.topTabView}>
            <MainScreenTabNavigator />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  userdetails: state.userdetails,
  usernotes: state.usernotes,
});

const mapDispatchToProps = dispatch => ({
  UpdateUserDetails: bindActionCreators(UpdateUserDetails, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
