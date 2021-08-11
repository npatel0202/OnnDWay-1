import React, { Component } from "react";
import firebase from "firebase";
import { NavigationActions } from "react-navigation";
import {
  StyleSheet,
   View,
   Linking,
  item,
  Platform,
  ImageBackground,
  TouchableOpacity,
  Button,
} from "react-native";

import { FAB } from "react-native-paper";
import "prop-types"; // 15.5.10

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      phoneNumber: "",
    };
  }

  dialCall = (number) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  driverCall = () => {
  this.props.navigation.navigate("GetDriver",{},
  
  NavigationActions.navigate({
    routeName: "GetDriver",})
    )};


orderCall = () => {
  this.props.navigation.navigate("GetOrders",{},
  
  NavigationActions.navigate({
    routeName: "GetOrders",})
  
);
}

  render() {
    return (
     <View>   
         <ImageBackground

source = {require('../images/img.png')}
style={{resizeMode: "center", width: "100%", height: "90%" }} ></ImageBackground>
          <FAB 
         style={styles.FAB}
          large
          icon="phone"
          onPress={() => {
            this.dialCall();
          }}
        /> 
        
       
<View style={styles.inputs}/>
              <Button
              title="Driver List"
              style={styles.inputs1}
              //onPress={this.onLogin.bind(this)}

              onPress={() => this.driverCall()}
              />
<View style={styles.inputs1}/>
              <Button
              title="Order List"
              style={styles.inputs1}
              //onPress={this.onLogin.bind(this)}

              onPress={() => this.orderCall()}
              />

        </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "orange",
  },

  FAB: {
    position: "absolute",
    marginBottom: 165,
    right: 30,
    bottom: -50,
    marginRight: 10,
    width: 50,
    height: 50,
    alignItems:"center",
    justifyContent: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    marginBottom:-20,
    borderBottomColor: "#FFFFFF",
    flex: 1,
    fontSize: 20,
  },
  inputs1: {
    height: 45,
    marginRight: 16,
    marginBottom:20,
    borderBottomColor: "#FFFFFF",
    flex: 1,
    fontSize: 20,
  },
});
