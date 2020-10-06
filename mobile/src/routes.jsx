import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './pages/Home/index';
import Initial from './pages/Initial/index';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Detail from './pages/Detail/index';
import CreatePoint from './pages/CreatePoint/index';
import FinishRegisterPoint from './pages/FinishRegisterPoint/index';

const Routes = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator headerMode="none" screenOptions={{
        cardStyle:{
          backgroundColor: '#fff'
        }
      }}>
        <Stack.Screen name="Initial" component={Initial}/>        
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="CreatePoint" component={CreatePoint}/>
        <Stack.Screen name="FinishRegisterPoint" component={FinishRegisterPoint}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
