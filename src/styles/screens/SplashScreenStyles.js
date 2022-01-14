import {StyleSheet} from 'react-native';
import colors from '../../styles/Colors';
import fonts from '../../styles/Fonts';

const SplashScreenStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
  },

  mainContainer: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: 'center',
  },
});

export default SplashScreenStyles;
