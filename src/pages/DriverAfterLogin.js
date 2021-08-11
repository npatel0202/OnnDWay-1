import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationActions } from "react-navigation";

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Button,
  FlatList,
  ImageBackground,
  ScrollView,
} from "react-native";

const Drawer = createDrawerNavigator();

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        //keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        //contentContainerStyle={{ flex: 1 }}
      >
        <View style={styles.container}>
          <ImageBackground
            source={require("../images/tbay.jpg")}
            resizeMode="cover"
            style={styles.stretch}
          ></ImageBackground>

          <View style={styles.inputContainer}>
            <Text>1. Order No: Abcdf1235</Text>
            <Text>Name  : Mike jordan</Text>
            <Text>Price : $30.35</Text>
            <Text>Address:James Street North,{'\n'} Thunder Bay</Text>
            <Text>2. Order No: AQWE1546</Text>
            <Text>Name  : John Johnson</Text>
            <Text>Price : $45</Text>
            <Text>Address:Thunder Bay</Text>           

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const logout = ({ route, navigation }) => {
  navigation.navigate(
    "LoginSignup",
    {},
    NavigationActions.navigate({
      routeName: "LoginSignup",
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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FF6F61",
  },
  title: {
    marginBottom: 30,
    fontWeight: "bold",
  },
  stretch: {
    width: 380,
    height: 250,
    resizeMode: "stretch",
    marginBottom: 80,
  },

  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    minHeight: 50,
    paddingVertical: 16,
    marginBottom: 15,
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#3498db",
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: "white",
    fontSize: 23,
  },
  restoreButtonContainer: {
    width: 250,
    marginBottom: 15,
    alignItems: "flex-end",
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcon: {
    color: "#FFFFFF",
    marginRight: 5,
  },
});
