import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import Home from './src/screens/Home';
import CreateRide from './src/screens/CreateRide';

const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      {/* <Login /> */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={headerOptions}
        />
        <Stack.Screen
          name="Create Ride"
          component={CreateRide}
          options={headerOptions}
        />
      </Stack.Navigator>
      {/* <Home /> */}
    </NavigationContainer>
  );
};


const headerOptions = {
  headerStyle: {
    backgroundColor: '#72B5A8',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}

export default App;
