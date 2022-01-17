import React from 'react';
import {View, TouchableOpacity, Text,StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

const MainTitleBar = ({
  title,
  optionLeftActive,
  optionRightActive,
  onPressRightOption,
  onPressLeftOption,
  OptionLeftSVG,
  OptionRightSVG,
}) => {
  return (
    <View style={styles.titlebarMainView}>
      <View style={styles.leftOptionView}>
        {optionLeftActive == true ? (
          <TouchableOpacity
            style={styles.actiontTouchable}
            onPress={() => onPressLeftOption()}>
            {OptionLeftSVG ? (
              <OptionLeftSVG height={25} width={25} fill={Colors.WHITE_COLOR} />
            ) : null}
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.tileView}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.rightOptionView}>
        {optionRightActive == true ? (
          <TouchableOpacity
            style={styles.actiontTouchable}
            onPress={() => onPressRightOption()}>
            {OptionRightSVG ? (
              <OptionRightSVG height={25} width={25} fill={Colors.WHITE_COLOR} />
            ) : null}
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titlebarMainView: {
    backgroundColor: Colors.WHITE_COLOR,
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row',
  },

  actiontTouchable: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  tileView: {
    justifyContent: 'center',
    flex: 6,
    backgroundColor: Colors.TITLE_BAR_COLOR,
  },

  titleText: {
    fontSize: 16,
    fontFamily: Fonts.ROBOTO_MEDIUM,
    color: Colors.WHITE_COLOR,
    paddingTop: 0,
  },

  rightOptionView: {
    backgroundColor: Colors.TITLE_BAR_COLOR,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftOptionView: {
    backgroundColor: Colors.TITLE_BAR_COLOR,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainTitleBar;
