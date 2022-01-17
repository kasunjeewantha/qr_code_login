import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import fonts from '../../styles/Fonts';
import themes from '../../styles/Thems';

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
    //justifyContent: "center",
  },

  qrContainer: {
    flex: 2.3,
    //margin: 10,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: 'red',
  },

  titleView: {
    flex: 0.5,
    //backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonView: {
    height: 50,
    //margin:10,
    //backgroundColor: "green",
    justifyContent: 'center',
    //alignItems: 'center',
  },

  mainTitle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: themes.ROBOTO_MEDIUM,
    color: themes.TEXT_COLOR_BLACK,
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 22,
  },

  subTitle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: themes.ROBOTO_MEDIUM,
    color: themes.TEXT_COLOR_BLACK,
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default QRScreenStyles;
