import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from '@react-navigation/routers';
import CoinsScreen from './CoinsScreen';

const stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Coins" component={CoinsScreen} />
    </stack.Navigator>
  );
}

export default CoinsStack;