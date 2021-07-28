import React, { Component, createRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import ValidationComponent from "react-native-form-validator";
import firebase from "firebase";

const db = require("../../firebase.config");
export default class AddDriverView extends ValidationComponent {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      drivers:"",
    };
  }
  
  adddrivers = async () => {
      
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then(async(userCredential) => {
    const ref = firebase.firestore().collection("drivers");
    await ref.add({
      username: this.state.email,
      password: this.state.password,

    });
    this.setState({
      drivers: "",
    }); 
     
    // Signed in
    this.props.navigation.navigate(
      "Home",
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
    const { email: username, password } = this.state;

    this.validate({
      email: { email:true, minlength: 3, maxlength: 50, required: true },
      password: { minlength: 6, maxLength: 12, required: true },
     
    });
    this.setState({ errors: this.getErrorMessages(", ") });
    if(this.errors.length == 0)
    {
      this.adddrivers();

    }
    else{
      this.props.navigation.navigate(
        "AddDriver",
       
      );  
    }
      }


  // onClickListener = (viewId) => {
  //   Alert.alert("Alert", "Button pressed "+viewId);
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email: email})}/>
        </View>
        
        {this.isFieldInError("email") &&
            this.getErrorsInField("email").map((errorMessage) => (
              <Text key={errorMessage}>{errorMessage}</Text>
            ))}
{/* 
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View> */}
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        {this.isFieldInError("password") &&
            this.getErrorsInField("password").map((errorMessage) => (
              <Text key={errorMessage}>{errorMessage}</Text>
            ))}
 <Button
            title="Signup"
            style={styles.input}
            onPress={this.onSignup.bind(this)}
           //onPress={() => this.addusers()}
          />
        {/* <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}    onPress={this.onSignup.bind(this)}>
          <Text style={styles.signUpText}>Submit</Text>
        </TouchableHighlight> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: 'white',
  }
});
