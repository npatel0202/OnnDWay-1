/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LogBox } from "react-native";
LogBox.ignoreLogs(['It appears that you are using old version of react-navigation library. Please update @react-navigation/bottom-tabs, @react-navigation/stack and @react-navigation/drawer to version 5.10.0 or above to take full advantage of new functionality added to react-native-screens',
"Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.(Saw setTimeout with duration 2922790ms)"])
import SignUpView from "./src/pages/Signup";
import LoginView from "./src/pages/login";
import HomeScreen from "./src/pages/HomeScreen";
import OrderScreen from "./src/pages/OrderScreen";
import SettingsScreen from "./src/pages/SettingsScreen";
import DriverScreen from "./src/pages/DriverScreen";
import { createStackNavigator } from "@react-navigation/stack";
import TabViewComponent from "react-native-elements/dist/tab/TabView";
import AddDriverView from "./src/pages/AddDrivers";
import UserProfileView from "./src/pages/profile";
import Contacts from "./src/pages/Driverlist";
import GetDriverScreen from  "./src/pages/GetDrivers";
import UserDetailScreen from "./src/pages/UserDetailScreen";
import GetOrdersScreen from "./src/pages/GetOrders";
import OrderDetailScreen from "./src/pages/OrderDetailScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


// const LoginSignup = (props) => {
//    return (
//     <Tab.Navigator
//     tabBarOptions={{
//       keyboardHidesTabBar:true,
//       labelPosition: "beside-icon",
//       activeTintColor: "white",
//       style: {
//       backgroundColor: "#34568B",
//     },
//     labelStyle: {
//       fontSize: 20,
//     },
//     tabStyle: {
//       fontSize: 10,
//     },
//   }}
// >
//       <Tab.Screen name="Login"  component={LoginView} />
//       <Tab.Screen name="SignUp" component={SignUpView} />

//     </Tab.Navigator>
//    )

// }

const OnnDWay = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerPosition="left">
       {/* tabBarOptions={{
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
      }} */}
    
      {/* <Stack.Screen options={{headerShown: true}} name="Home" component={HomeScreen}  options={{ title:"OnnDWay",headerLeft: null,headerStyle: {
              backgroundColor: '#e7305b'}}} />
      <Stack.Screen name="AddDriver" component={AddDriverView} />
      <Stack.Screen name="profile" component={UserProfileView} />
      <Stack.Screen name="driverslist" component={Contacts} /> */}
      
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Driver" component={DriverScreen} />
      <Drawer.Screen name="Order" component={OrderScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />

      {/* add new here.................................... */}
    </Drawer.Navigator>
  );
};
export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{headerShown: false}} name="LoginSignup" component={LoginSignup} />  */}
        <Stack.Screen
          options={{headerLeft: null}}
          name="OnnDWay"
          component={OnnDWay}
        />
        <Stack.Screen
          options={{headerLeft: null}}
          name="GetDriver"
          component={GetDriverScreen}
        />
        <Stack.Screen
          options={{headerLeft: null}}
          name="userdetail"
          component={UserDetailScreen}
        />
        <Stack.Screen
          options={{headerLeft: null}}
          name="GetOrders"
          component={GetOrdersScreen}
        />
         <Stack.Screen
          options={{headerLeft: null}}
          name="orderdetail"
          component={OrderDetailScreen}
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