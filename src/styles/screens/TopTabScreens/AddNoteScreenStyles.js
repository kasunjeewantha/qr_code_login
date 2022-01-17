import {StyleSheet} from 'react-native';
import Color from '../../Colors'

const AddNoteScreenStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Color.WHITE_COLOR,
  },

  mainContainer: {
    flex: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: Color.WHITE_COLOR,
    justifyContent: 'center',
  },

  KeyboardAwareScrollView: {
    flexGrow : 1,
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
