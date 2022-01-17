import {StyleSheet} from 'react-native';
import themes from '../../Thems';

const AddNoteScreenStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: themes.BACKGROUNG_COLOR_WHITE,
  },

  mainContainer: {
    flex: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: themes.BACKGROUNG_COLOR_WHITE,
    justifyContent: 'center',
  },

  KeyboardAwareScrollView: {
    flexGrow : 1,
    //justifyContent: "center",
  },


  textInputView: {
    height: 200,
    justifyContent: 'center',
  },

  buttonView: {
    marginTop: 10,
    height: 50,
    marginLeft: 8,
    marginRight: 8,
    justifyContent: 'center',
  },
});

export default AddNoteScreenStyles;
