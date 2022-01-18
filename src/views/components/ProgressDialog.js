import React, {Component} from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../styles/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Fonts from '../../styles/Fonts';

export default class ProgressDlg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: this.props.isModalVisible,
    };
  }

  render() {
    return (
      <View>
        <View>
          <Modal
            isVisible={this.state.isModalVisible}
            backdropOpacity={0.5}
            animationOutTiming={-1000}
            animationInTiming={-1000}
            animationIn={'slideInDown'}
            animationOut={'slideOutUp'}>
            <View style={styles.loaderMainView}>
              <View
                style={
                  this.props.circleProgress
                    ? styles.loaderViewProgress
                    : styles.loaderView
                }>
                <View>
                  <View>
                    <View style={styles.bodyViewProgress}>
                      <ActivityIndicator
                        size={56}
                        color={Colors.GREEN_COLOR}></ActivityIndicator>

                      <Text style={styles.bodyViewText}>
                        {this.props.message}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loaderMainView: {
    justifyContent: 'center',
    flex: 1,
  },

  loaderViewProgress: {
    backgroundColor: Colors.WHITE_COLOR,
    padding: wp('3%'),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  loaderView: {
    backgroundColor: Colors.WHITE_COLOR,
    padding: wp('3%'),
    width: wp('94%'),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  bodyViewProgress: {
    padding: wp('2%'),
    alignItems: 'center',
  },

  bodyViewText: {
    fontFamily: Fonts.ROBOTO_MEDIUM,
    fontSize: 14,
    color: Colors.PROGRESS_BODY_COLOR,
    marginTop: hp('2%'),
    marginLeft: wp('3%'),
  },
});
