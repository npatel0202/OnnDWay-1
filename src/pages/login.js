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

export default class LoginView extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

      // error: "",
    };
  }

  // getusers = async () => {
  //   const ref = firebase.firestore().collection("users");
  //   await ref.add({
  //     email: this.state.email,
  //     password: this.state.password,

  //   });
  //   this.setState({
  //     users: "",
  //   });}

  // onLogin() {
  //   this.validate({
  //     email: { email: true, required: true },
  //     password: { minlength: 6, maxLength: 12, required: true,},
  //   });
  //   this.setState({ errors: this.getErrorMessages(", ") });
  //   if(this.errors.length == 0)
  //   {
  //     this.props.navigation.navigate(
  //       "AfterLogin",
  //       {},
  //       NavigationActions.navigate({
  //         routeName: "Home",
  //       })
  //     );

  //   }
  //   else{
  //     this.props.navigation.navigate(
  //       "LoginSignup",
  //       {},
  //       NavigationActions.navigate({
  //         routeName: "Login",
  //       })
  //     );
  //   }
  // }
  onLogin() {
    const { email, password } = this.state;
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({email:"", password:""});


       // this.submit.clear();
        this.props.navigation.navigate("OnnDWay");
        this.emailInput.clear();
        this.passwordInput.clear();
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
                name="email"
                underlineColorAndroid="transparent"
                ref={input => { this.emailInput = input }}
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
                ref={input => { this.passwordInput = input }}
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
              ref={input => { this.submit = input }}
            />           
             <Pressable
        onPress={() => {
          this.props.navigation.navigate(
                  "DriverLogin",
                  {},
                  NavigationActions.navigate({
                    routeName: "DriverLogin",
                  })
                );

        }}
        >
        {({ pressed }) => (
          <Text style={{color: 'blue'}}>
            {pressed ? 'Pressed!' : 'Driver\'s Login'} 
          </Text>
        )}
      </Pressable>
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
