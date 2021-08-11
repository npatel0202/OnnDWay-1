import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationActions } from "react-navigation";


import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";

const Drawer = createDrawerNavigator();

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../images/test.jpg")}
        style={{ resizeMode: "cover", width: "100%", height: "80%" }}
      >
        <View style={styles.container}>
          <Text style={styles.title}></Text>
          <View style={styles.contentCenter}>
            <Text style={styles.textStyle}></Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const logout = ({ route, navigation }) => {
  navigation.navigate(
    "LoginSignup",
    {},
    NavigationActions.navigate({
      routeName: "Login",
    })
  );
  return null;
};

const DriverAfterLogin = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={home}></Drawer.Screen>
      <Drawer.Screen name="Logout" component={logout}></Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DriverAfterLogin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    padding: 15,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  contentCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    padding: 10,
    fontSize: 20,
  },
});
