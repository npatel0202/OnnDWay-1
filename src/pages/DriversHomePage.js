import React, { Component } from "react";
//rimport React, { useState } from "react";
import { Button } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Pressable,
  ImageBackground,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Title } from "react-native-paper";
import ValidationComponent from "react-native-form-validator";
import { NavigationActions } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignUpView from "./Signup";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";

export default class DriverLogin extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

      // error: "",
    };
  }

  onLogin() {
    const { email, password } = this.state;
    console.log(email, password);
    firebase
      .firestore()
      .collection("drivers")
      .where("email", "==", this.state.email)
      .where("password", "==", this.state.password)
      .get()
      .then((snap) => {
        if (snap.docs.length > 0) {
          // this.submit.clear();
          this.props.navigation.navigate("DriverAfterLogin");
          this.emailInput.clear();
          this.passwordInput.clear();
        } else {
          alert('Not Registered');
        }
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  }
  render() {
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
              source={require("./../images/map.jpg")}
              resizeMode="cover"
              style={styles.stretch}
            ></ImageBackground>

            <TouchableOpacity style={styles.title}>
              <Title>Welcome to OnnDWay</Title>
            </TouchableOpacity>

            <View style={styles.inputContainer}>
              <Image
                style={[styles.icon, styles.inputIcon]}
                source={{
                  uri: "https://png.icons8.com/password/androidL/40/3498db",
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Email"
                name="email"
                underlineColorAndroid="transparent"
                ref={(input) => {
                  this.emailInput = input;
                }}
                onChangeText={(val) => this.setState({ email: val })}
              />
            </View>
            {this.isFieldInError("email") &&
              this.getErrorsInField("email").map((errorMessage) => (
                <Text key={errorMessage}>{errorMessage}</Text>
              ))}
            <View style={styles.inputContainer}>
              <Image
                style={[styles.icon, styles.inputIcon]}
                source={{
                  uri: "https://png.icons8.com/envelope/androidL/40/3498db",
                }}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Password"
                name="password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                ref={(input) => {
                  this.passwordInput = input;
                }}
                onChangeText={(val) => this.setState({ password: val })}
              />
            </View>
            {this.isFieldInError("password") &&
              this.getErrorsInField("password").map((errorMessage) => (
                <Text key={errorMessage}>{errorMessage}</Text>
              ))}

            <Button
              title="Login"
              style={styles.input}
              //onPress={this.onLogin.bind(this)}

              onPress={() => this.onLogin()}
              ref={(input) => {
                this.submit = input;
              }}
            />
            {/* <Pressable
        onPress={() => {
               console.log("Hello");
               
        }}
        >
        {({ pressed }) => (
          <Text style={{color: 'blue'}}>
            {pressed ? 'Pressed!' : 'Driver\'s Login'} 
          </Text>
        )}
      </Pressable> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
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
    height: 45,
    marginBottom: 15,
    flexDirection: "row",
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
