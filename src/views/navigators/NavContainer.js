import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyTransition from './Transition';
import SplashScreen from '../screens/SplashScreen';
import QRScreen from '../screens/QRScreen';
import MainScreen from '../screens/MainScreen';
import AddNoteScreen from '../screens/TopTabScreens/AddNoteScreen';
import ViewNoteScreen from '../screens/TopTabScreens/ViewNoteScreen';

const Stack = createStackNavigator();

function NavContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          ...MyTransition,
          gestureEnabled: false,
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="QRScreen"
          component={QRScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ViewNoteScreen"
          component={ViewNoteScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="AddNoteScreen"
          component={AddNoteScreen}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavContainer;
