import React, { Component } from 'react';
//rimport React, { useState } from "react";
import { Button } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Picker
  
} from 'react-native';
import { Title } from 'react-native-paper';

import SignUpView from './Signup';

export default class LoginView extends Component {

  render() {
    
    const { navigate } = this.props.navigation;

    return (     
        
      <View style={styles.container}>
          <Image
        style={styles.stretch}
        source={require('./../images/splash.jpg')}
      />
      
      <TouchableOpacity style={styles.title}>
            <Title>Welcome to OnnDWay</Title>
        </TouchableOpacity>
      
         <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'/>
        </View>
      
        <TouchableOpacity style={styles.restoreButtonContainer}>
            <Text>Forgot?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
{/* 
        <TouchableOpacity style={styles.buttonContainer}>
        
            <Button
                title ="Register Here"
                color = "#1abc9c"
                onPress={() =>
                    navigate('SignUpView')}>
            </Button>
        </TouchableOpacity> */}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  

    
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0E0E6',
  },
  title:{
    marginBottom:30,
    fontWeight:'bold',
    
  },
  stretch: {
    width: 380,
    height: 250,
    resizeMode: 'stretch',
    marginBottom:80,

  },
 
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
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
  loginButton: {
    backgroundColor: '#3498db',
    
  },
  fabookButton: {
    backgroundColor: "#3b5998",
    
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
    fontSize:23,
  },
  restoreButtonContainer:{
    width:250,
    marginBottom:15,
    alignItems: 'flex-end'
  },
  socialButtonContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  socialIcon:{
    color: "#FFFFFF",
    marginRight:5
  }
});
