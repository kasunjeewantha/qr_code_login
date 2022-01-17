import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import themes from '../../styles/Thems';

const MainTextInput = ({
  displaytitle,
  title,
  value,
  placeholder,
  placeholderTextColor,
  autoFocus,
  onChangeText,
  returnKeyType,
  blurOnSubmit,
  multiline,
}) => {
  return (
    <View
      style={[
        styles.textInputMainView,
        displaytitle == false ? {height: 50} : null,
      ]}>
      {displaytitle ? (
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{title} *</Text>
        </View>
      ) : null}

      <View style={styles.textInputView}>
        <TextInput
          value={value}
          style={styles.textIn}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          autoFocus={autoFocus}
          onChangeText={onChangeText}
          returnKeyType={returnKeyType}
          blurOnSubmit={blurOnSubmit}
          multiline={multiline}></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleView: {
    justifyContent: 'center',
    height: 30,
    //backgroundColor:"green"
  },

  textInputMainView: {
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
    //backgroundColor:"blue"
  },

  titleText: {
    fontFamily: themes.ROBOTO_REGULAR,
    fontSize: 13,
    color: themes.TEXT_COLOR_BLACK,
    textAlign: 'left',
  },

  textInputView: {
    justifyContent: 'center',
    flex: 2,
    borderRadius: 5,
    borderColor: '#000000',
    borderWidth: 1,
    //backgroundColor:"red"
  },

  textIn: {
    flex: 1,
    fontFamily: themes.Calibri_Regular,
    color: themes.BLACK_COLOR,
    fontSize: 14,
    marginLeft: 4,
    //backgroundColor:'orange',
    justifyContent: 'center',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
});

export default MainTextInput;
