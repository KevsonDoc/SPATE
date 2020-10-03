import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './pages/Home/index';
import Initial from './pages/Initial/index';

const Routes = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator headerMode="none" screenOptions={{
        cardStyle:{
          backgroundColor: '#fff'
        }
      }}>
        <Stack.Screen name="Initial" component={Initial}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
