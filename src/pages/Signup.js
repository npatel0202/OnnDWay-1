import React, { Component, createRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  TouchableHighlight,
  KeyboardAvoidingView,
  Image,
  SafeAreaView
} from "react-native";
import { Picker } from "@react-native-community/picker";
import ValidationComponent from "react-native-form-validator";
import { Router, Switch, Route } from "react-router-dom";
import firebase from "firebase";
import { NavigationActions } from "react-navigation";

const db = require("../../firebase.config");

export default class SignUpView extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      ConfirmPassword: "",
      MobileNumber: "",
      PickerValue: "",
      error: "",
      users: "",
    };
  }

  addusers = async () => {
      
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then(async(userCredential) => {
    const ref = firebase.firestore().collection("users");
    await ref.add({
      fullName: this.state.fullName,
      email: this.state.email,
      // password: this.state.password,
      MobileNumber: this.state.MobileNumber,
      PickerValue: this.state.PickerValue,
    });
    this.setState({
      users: "",
    }); 
     
    // Signed in
    this.props.navigation.navigate(
      "OnnDWay",
      {},
      NavigationActions.navigate({
        routeName: "Home",
      })
    );  
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  };
  onSignup() {
    const { fullName, password, ConfirmPassword, MobileNumber } = this.state;

    this.validate({
      fullName: { minlength: 3, maxlength: 50, required: true },
      email: { email: true, required: true },
      password: { minlength: 6, maxLength: 12, required: true },
      ConfirmPassword: { equalPassword: this.state.password, required: true },
      MobileNumber: { numbers: true, required: true },
      PickerValue:{required:true}
    });
    this.setState({ errors: this.getErrorMessages(", ") });
    if(this.errors.length == 0)
    {
      this.addusers();

    }
    else{
      this.props.navigation.navigate(
        "LoginSignup",
        {},
        NavigationActions.navigate({
          routeName: "Signup",
        })
      );  
    }
      }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}
     keyboardDismissMode="interactive"
       keyboardShouldPersistTaps="handled"
        //contentContainerStyle={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://png.icons8.com/male-user/ultraviolet/50/3498db",
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={(fullName) => this.setState({ fullName })}
            />
          </View>

          {this.isFieldInError("fullName") &&
            this.getErrorsInField("fullName").map((errorMessage) => (
              <Text key={errorMessage}>{errorMessage}</Text>
            ))}

          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://png.icons8.com/message/ultraviolet/50/3498db",
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={(email) => this.setState({ email })}
            />
          </View>
          {this.isFieldInError("email") &&
            this.getErrorsInField("email").map((errorMessage) => (
              <Text key={errorMessage}>{errorMessage}</Text>
            ))}

          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db",
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={(password) => this.setState({ password })}
            />
          </View>
          {this.isFieldInError("password") &&
            this.getErrorsInField("password").map((errorMessage) => (
              <Text key={errorMessage}>{errorMessage}</Text>
            ))}

          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db",
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Confirm Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={(ConfirmPassword) =>
                this.setState({ ConfirmPassword })
              }
            />
          </View>
          {this.isFieldInError("ConfirmPassword") &&
            this.getErrorsInField("ConfirmPassword").map((errorMessage) => (
              <Text key={errorMessage}>{errorMessage}</Text>
            ))}

          <View style={styles.inputContainer}>
            <Image
              style={styles.inputIcon}
              source={{
                uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db",
              }}
            />
            <TextInput
              style={styles.inputs}
              placeholder="Mobile Number"
              keyboardType="number-pad"
              maxLength={11}
              underlineColorAndroid="transparent"
              onChangeText={(MobileNumber) => this.setState({ MobileNumber })}
            />
          </View>
          {this.isFieldInError("MobileNumber") &&
            this.getErrorsInField("MobileNumber").map((errorMessage) => (
              <Text key={errorMessage}>{errorMessage}</Text>
            ))}

          <Picker
            selectedValue={this.state.PickerValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ PickerValue: itemValue })
            }
          >
            <Picker.Item label="Select a user" key="0" value="" />

            <Picker.Item label="Restaurant" key="1" value="Restaurant" />

            <Picker.Item label="Retailer" key="2" value="Retailer" />
          </Picker>

          <Button
            title="Signup"
            style={styles.input}
            onPress={this.onSignup.bind(this)}
           //onPress={() => this.addusers()}
          />
        </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: "#B0E0E6",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
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
  signupButton: {
    backgroundColor: "#3498db",
  },
  signUpText: {
    color: "white",
  },
  /*
  img: {
    height: 20,
    width: 20,
  },

  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  }*/
});
