import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

const QRScreenStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
  },

  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
    justifyContent: 'center',
  },

  KeyboardAwareScrollView: {
    flexGrow : 1,
  },

  qrContainer: {
    flex: 2.3,
  },

  titleView: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonView: {
    height: 50,
    justifyContent: 'center',
  },

  mainTitle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: Fonts.ROBOTO_MEDIUM,
    color: Colors.BLACK_COLOR,
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 22,
  },

  subTitle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: Fonts.ROBOTO_MEDIUM,
    color: Colors.BLACK_COLOR,
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default QRScreenStyles;
