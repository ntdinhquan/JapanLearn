// src/navigation/AppNavigator.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Registered/HomeScreen';
import GuestScreen from '../screens/Guest/GuestScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/LoginScreen/RegisterScreen';
import ResetPasswordScreen from '../screens/LoginScreen/ResetPasswordScreen';
import StartScreen from '../screens/LoginScreen/StartScreen';
// import TuvungScreen from '../screens/Tuvung'; 
import TuvungScreen from '../screens/Registered/tuvung';
import NguphapScreen from '../screens/Registered/Nguphap';
import TestApiScreen from '../screens/Guest/testapi';
const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Sử dụng state để quản lý đăng nhập

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "StartScreen"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Guest" component={GuestScreen} />
        <Stack.Screen name="TuvungPage" component={TuvungScreen}/>
        <Stack.Screen name="NguphapScreen" component={NguphapScreen}/>
        <Stack.Screen name="TestApiScreen" component={TestApiScreen}/>
        {!isLoggedIn && (
          <>
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
