/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignUpView from "./src/pages/Signup";
import LoginView from "./src/pages/login";
import HomeScreen from "./src/pages/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import TabViewComponent from "react-native-elements/dist/tab/TabView";
import AddDriverView from "./src/pages/AddDrivers";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginSignup = (props) => {
   return (
    <Tab.Navigator
    tabBarOptions={{
      keyboardHidesTabBar:true,
      labelPosition: "beside-icon",
      activeTintColor: "white",
      style: {
      backgroundColor: "#34568B",
    },
    labelStyle: {
      fontSize: 20,
    },
    tabStyle: {
      fontSize: 10,
    },
  }}
>
      <Tab.Screen name="Login"  component={LoginView} />
      <Tab.Screen name="SignUp" component={SignUpView} />

    </Tab.Navigator>
   )

}

const OnnDWay = () => {
  return (
    <Stack.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        labelPosition: "beside-icon",
        activeTintColor: "white",
        style: {
          backgroundColor: "#34568B",
        },
        labelStyle: {
          fontSize: 20,
        },
        tabStyle: {
          fontSize: 10,
        },
      }}
    >
      <Stack.Screen options={{headerShown: true}} name="Home" component={HomeScreen}  options={{ title:"OnnDWay",headerLeft: null,headerStyle: {
              backgroundColor: '#e7305b'}}} />
      <Stack.Screen name="AddDriver" component={AddDriverView} />
      {/* add new here.................................... */}
    </Stack.Navigator>
  );
};

export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="LoginSignup" component={LoginSignup} /> 
        <Stack.Screen
          options={{ headerShown: false}}
          name="OnnDWay"
          component={OnnDWay}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
