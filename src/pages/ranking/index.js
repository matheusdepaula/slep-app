import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ranking from './ranking';
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
        name="Ranking"
        component={Ranking}
        options={{title: 'Ranking'}}
      />
    </Stack.Navigator>
  );
}

export default Navigator;
