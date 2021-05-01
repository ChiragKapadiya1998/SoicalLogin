import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screen/Login';
import Loading from '../screen/Loading';
import Registration from '../screen/Registration';
import SignInSelect from '../screen/SignInSelect';
import PhoneAuth from '../screen/PhoneAuth';
import HomeScreen from '../screen/HomeScreen';
import Otp from '../screen/Otp';
const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="signIN" component={SignInSelect} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="PhoneAuth" component={PhoneAuth} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;

const styles = StyleSheet.create({});
