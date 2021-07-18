/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignUpView from "./src/pages/Signup";
import LoginView from "./src/pages/login";

//  export default class App extends Component {
//    render() {
//      return (
//        <View style={styles.container}>
//         <LoginView></LoginView>

//        </View>
//      );
//    }
//  }
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      tabBarOptions={{
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
        <Tab.Screen name="Sign Up" component={SignUpView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});
