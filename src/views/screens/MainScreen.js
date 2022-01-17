import React, {Component} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import MainScreenStyles from '../../styles/screens/MainScreenStyles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {UpdateUserDetails} from '../../actions/QRScreenActions';
import MainScreenTabNavigator from '../navigators/Tab/MainScreenTabNavigator';

class MainScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    //console.log('Main Screen Props : ', JSON.stringify(this.props.userdetails));
    //console.log('View Note Screen Props : ', JSON.stringify(this.props.usernotes));
    return (
      <SafeAreaView style={MainScreenStyles.safeAreaView}>
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
