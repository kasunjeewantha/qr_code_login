import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import fonts from '../../styles/Fonts';

const SplashScreenStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
  },

  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
    justifyContent: 'center',
  },

  title: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
    justifyContent: 'center',
  },

  titleText: {
    fontSize:45,
    fontFamily: Fonts.ROBOTO_MEDIUM,
    fontWeight:"bold",
    color: Colors.BLACK_COLOR,
    textAlign: 'center',
  },

  version: {
    height:50,
    padding:5,
    //backgroundColor: "red",
    justifyContent:"flex-end",
    alignItems:"center"
  },

  versionText: {
    fontSize:15,
    fontFamily: Fonts.ROBOTO_MEDIUM,
    color: Colors.BLACK_COLOR,
    textAlign: 'center',
  },
});

export default SplashScreenStyles;
