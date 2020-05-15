import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home';
import SendMessageScreen from './sendMessage';
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
        name="Home"
        component={HomeScreen}
        options={{title: 'Slep'}}
      />
      <Stack.Screen
        name="SendMessage"
        component={SendMessageScreen}
        options={{
          title: 'Mensagem',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
