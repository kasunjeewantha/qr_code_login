import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AddNoteScreen from '../../screens/TopTabScreens/AddNoteScreen';
import ViewNoteScreen from '../../screens/TopTabScreens/ViewNoteScreen';
import AddNote from '../../../assets/icons/addnote.svg';
import ViewNote from '../../../assets/icons/viewnote.svg';
import Colors from '../../../styles/Colors';
import Fonts from '../../../styles/Fonts';

const Tab = createMaterialTopTabNavigator();

export default function MainScreenTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarStyle: styles.tabBarStyle,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarActiveTintColor: Colors.GREEN_COLOR,
        tabBarInactiveTintColor: Colors.INACTIVE_TINT_COLOR,
        headerShown: false,
      }}>
      <Tab.Screen
        name="AddNoteScreen"
        component={AddNoteScreen}
        options={{
          tabBarLabel: 'ADD NOTE',
          tabBarIcon: ({focused}) => (
            <AddNote
              width="30"
              height="25"
              fill={focused ? Colors.GREEN_COLOR : Colors.INACTIVE_TINT_COLOR}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ViewNoteScreen"
        component={ViewNoteScreen}
        options={{
          tabBarLabel: 'VIEW NOTE',
          tabBarIcon: ({focused}) => (
            <ViewNote
              width="30"
              height="26"
              fill={focused ? Colors.GREEN_COLOR : Colors.INACTIVE_TINT_COLOR}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: 12,
    fontFamily: Fonts.ROBOTO_MEDIUM,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tabBarItemStyle: {
    flex: 1,
    height: 60,
  },
  tabBarStyle: {
    backgroundColor: Colors.TAB_BAR_COLOR,
  },
  tabBarIndicatorStyle: {
    height: 5,
    backgroundColor: Colors.GREEN_COLOR,
  },
  tabBarIndicator: {
    width: 100,
    height: 5,
    backgroundColor: Colors.GREEN_COLOR,
  },
});
