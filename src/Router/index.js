import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Checkin,
  Login,
  Checkout,
  History,
  Ijin,
  Register,
  WelcomeAuth,
  Home,
} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeAuth"
        component={WelcomeAuth}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Checkin" component={Checkin} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Ijin" component={Ijin} />
    </Stack.Navigator>
  );
};

export default Router;
