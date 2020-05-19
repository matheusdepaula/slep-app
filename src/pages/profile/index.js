import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileLogged from './profileLogged';
import ProfileNotLogged from './profileNotLogged';
import COLORS from '../../atoms/colors';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.mainColor,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Profile"
        component={ProfileNotLogged}
        options={{title: 'Perfil'}}
      />
      <Stack.Screen
        name="ProfileLogged"
        component={ProfileLogged}
        options={{title: 'Perfil'}}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
