import {StyleSheet} from 'react-native';
import Colors from '../../Colors';
import Fonts from '../../Fonts';

const ViewNoteScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: Colors.WHITE_COLOR,
    justifyContent: 'center',
  },

  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
  },

  CardViewWithoutPadding: {
    flex: 1,
    margin: 5,
    backgroundColor: Colors.WHITE_COLOR,
    borderRadius: 5,
    padding: 2,
    justifyContent: 'center',
    shadowRadius: 2.22,
    elevation: 4,
  },

  flatlistView: {
    backgroundColor: Colors.WHITE_COLOR,
    flex: 1,
    justifyContent: 'center',
  },

  CardView: {
    flex: 1,
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 8,
    backgroundColor: Colors.WHITE_COLOR,
    margin: 5,
    padding: 4,
  },

  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  bottomView: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  topViewText: {
    textAlign: 'left',
    fontFamily: Fonts.ROBOTO_REGULAR,
    fontSize: 14,
    color: Colors.BLACK_COLOR,
  },

  bottomViewText: {
    textAlign: 'right',
    fontFamily: Fonts.ROBOTO_REGULAR,
    fontSize: 10,
    color: Colors.BLACK_COLOR,
  },

  ViewBlank: {
    flex: 1,
    backgroundColor: Colors.WHITE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },

  BlankText: {
    fontSize: 16,
    color: Colors.BLACK_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
});

export default ViewNoteScreenStyles;
