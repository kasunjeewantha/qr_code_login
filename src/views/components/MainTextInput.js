import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

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
  },

  textInputMainView: {
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
  },

  titleText: {
    fontFamily: Fonts.ROBOTO_REGULAR,
    fontSize: 13,
    color: Colors.BLACK_COLOR,
    textAlign: 'left',
  },

  textInputView: {
    justifyContent: 'center',
    flex: 2,
    borderRadius: 5,
    borderColor: Colors.BLACK_COLOR,
    borderWidth: 1,
  },

  textIn: {
    flex: 1,
    fontFamily: Fonts.ROBOTO_MEDIUM,
    color: Colors.BLACK_COLOR,
    fontSize: 14,
    marginLeft: 4,
    justifyContent: 'center',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
});

export default MainTextInput;
