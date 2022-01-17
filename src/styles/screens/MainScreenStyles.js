import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import themes from '../../styles/Thems';

const MainScreenStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
  },

  mainContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
    justifyContent: 'center',
  },

  userDetailView: {
    height: 60,
    //padding: 5,
    paddingLeft:8,
    //backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  topTabView: {
    flex: 1,
    margin: 8,
    padding: 2,
    backgroundColor: Colors.WHITE_COLOR,
    borderRadius: 5,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: themes.BACKGROUNG_COLOR_BLUE,
    elevation: 2,
    //borderWidth: 0.2,
  },

  userDetailText: {
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: Fonts.ROBOTO_REGULAR,
    color: Colors.BLACK_COLOR,
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 14,
  },
});

export default MainScreenStyles;
