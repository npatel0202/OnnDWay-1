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
  Image,
  ScrollView,
} from "react-native";
import { Title } from "react-native-paper";
import ValidationComponent from "react-native-form-validator";
import {NavigationActions} from 'react-navigation';

import SignUpView from "./Signup";
import { useNavigation } from "@react-navigation/native";

export default class LoginView extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

      error: "",
    };
  }

  onLogin() {
    this.validate({
      email: { email: true, required: true },
      password: { minlength: 6, maxLength: 12, required: true },
    });
    this.setState({ errors: this.getErrorMessages(", ") });
  }

  render() {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Image
            style={styles.stretch}
            source={require("./../images/splash.jpg")}
          />

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
              keyboardType="email-address"
              underlineColorAndroid="transparent"
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
              secureTextEntry={true}
              underlineColorAndroid="transparent"
            />
          </View>
          {this.isFieldInError("password") &&
            this.getErrorsInField("password").map((errorMessage) => (
              <Text key={errorMessage}>{errorMessage}</Text>
            ))}

          <Button
            title="Login"
            style={styles.input}
            // onPress={this.onLogin.bind(this)}
            onPress={() =>
              this.props.navigation.navigate(
                "AfterLogin",
                {},
                NavigationActions.navigate({
                  routeName: "Home",
                })
              )
            }
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#B0E0E6",
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
