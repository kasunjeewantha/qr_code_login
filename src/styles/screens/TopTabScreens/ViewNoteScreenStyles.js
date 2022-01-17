import {StyleSheet} from 'react-native';
import themes from '../../Thems';

const ViewNoteScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: themes.BACKGROUNG_COLOR_WHITE,
    justifyContent: 'center',
  },

  safeAreaView: {
    flex: 1,
    backgroundColor: themes.BACKGROUNG_COLOR_WHITE,
  },

  CardViewWithoutPadding: {
    flex: 1,
    margin: 5,
    backgroundColor: themes.BACKGROUNG_COLOR_WHITE,
    borderRadius: 5,
    padding: 2,
    justifyContent: 'center',
    shadowRadius: 2.22,
    elevation: 4,
  },

  flatlistView: {
    backgroundColor: themes.BACKGROUNG_COLOR_WHITE,
    flex: 1,
    justifyContent: 'center',
  },

  CardView: {
    height: 95,
    elevation: 5,
    borderRadius: 8,
    backgroundColor: themes.BACKGROUNG_COLOR_WHITE,
    margin: 5,
    padding: 4,
  },

  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: 'red',
  },

  bottomView: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    //backgroundColor: 'green',
  },

  topViewText: {
    textAlign: 'left',
    fontFamily: themes.ROBOTO_REGULAR,
    fontSize: 14,
    color: themes.TEXT_COLOR_BLACK,
  },

  bottomViewText: {
    textAlign: 'right',
    fontFamily: themes.ROBOTO_REGULAR,
    fontSize: 10,
    color: themes.TEXT_COLOR_BLACK,
  },

  flatListViewBlank: {
    flex: 1,
    backgroundColor: themes.BACKGROUNG_COLOR_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 1,
  },

  flatListBlankText: {
    color: themes.BACKGROUNG_COLOR_BLUE,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
});

export default ViewNoteScreenStyles;
