import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../page/home/home';

const Stack = createStackNavigator();

export const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={ Home} />
    </Stack.Navigator>
  );
};