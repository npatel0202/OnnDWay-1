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
import { createStackNavigator } from '@react-navigation/stack';
import TabViewComponent from "react-native-elements/dist/tab/TabView";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

const AfterLogin = () => {
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
      <Tab.Screen name="Home"  component={HomeScreen} />


    </Tab.Navigator>
  )
}



//  export default class App extends Component {
//    render() {
//      return (
//        <View style={styles.container}>
//         <LoginView></LoginView>

//        </View>
//      );
//    }
//  }
export default function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Tab.Screen name="LoginSignup" component={LoginSignup} />  */}
        <Tab.Screen name="AfterLogin" component={AfterLogin} />
      </Stack.Navigator>
    </NavigationContainer>
//      <Router history={history}>
//      <Switch>
//          <Route path="/" exact component={Home} />
//          <Route path="/About" component={About} />
//          <Route path="/Contact" component={Contact} />
//          <Route path="/Products" component={Products} />
//      </Switch>
//  </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});
