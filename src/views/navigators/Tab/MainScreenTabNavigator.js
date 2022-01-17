import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import themes from '../../../styles/Thems';
import AddNoteScreen from '../../screens/TopTabScreens/AddNoteScreen';
import ViewNoteScreen from '../../screens/TopTabScreens/ViewNoteScreen';
import AddNote from '../../../assets/icons/addnote.svg';
import ViewNote from '../../../assets/icons/viewnote.svg';
import Colors from '../../../styles/Colors';

const Tab = createMaterialTopTabNavigator();

export default function MainScreenTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 10, fontWeight: 'bold'},
        style: {
          backgroundColor: themes.BACKGROUNG_COLOR_BLUE,
        },
        showIcon: true,
        activeTintColor: Colors.RED_COLOR,
        inactiveTintColor: themes.BACKGROUNG_COLOR_WHITE,
        tabStyle: {
          height: 55,
        },
        indicatorStyle: {
          height: 3,
          backgroundColor: Colors.RED_COLOR,
        },
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
              fill={focused ? Colors.RED_COLOR : Colors.WHITE_COLOR}
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
              fill={focused ? Colors.RED_COLOR : Colors.WHITE_COLOR}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
