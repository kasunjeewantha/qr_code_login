import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import themes from '../../styles/Thems';

const width = Dimensions.get('window').width;

const Button = ({
  text,
  onPress,
  buttoncolor,
  textcolor,
  border,
  bordercolor,
  disabled,
}) => {
  const BUTTONCOLOR = buttoncolor;
  const TEXTCOLOR = textcolor;
  const BORDERCOLOR = bordercolor;

  return (
    <TouchableOpacity style={styles.btnTouchableStyle} onPress={onPress} disabled={disabled}>
      <View
        style={[
          {backgroundColor: BUTTONCOLOR},
          border ? {borderColor: BORDERCOLOR, borderWidth: 1} : null,
          styles.btnContainerStyle,
        ]}>
        <Text style={[{color: TEXTCOLOR}, styles.btnTextStyle]}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainerStyle: {
    justifyContent: 'center',
    //alignItems:"center",
    flex: 1,
    //height: 38,
    //margin: 8,
    //width: width / 1.08,
    borderRadius: 5,
  },

  btnTouchableStyle: {
    flex: 1,
    margin:5
  },

  btnTextStyle: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: themes.ROBOTO_REGULAR,
  },
});

export default Button;
