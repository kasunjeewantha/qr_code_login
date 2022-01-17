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
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarItemStyle: {flex: 1, height: 60},
        tabBarStyle: {backgroundColor: '#BCED91'},
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: themes.ROBOTO_MEDIUM,
          textAlign: 'center',
          fontWeight:"bold"
        },
        tabBarIndicatorStyle: {
          //width: 100,
          height: 5,
          backgroundColor: 'green',
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: '#C1CDC1',
        headerShown: false,
        //tabBarShowIcon : {true}
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
              fill={focused ? 'green' : '#C1CDC1'}
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
              fill={focused ? 'green' : '#C1CDC1'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
