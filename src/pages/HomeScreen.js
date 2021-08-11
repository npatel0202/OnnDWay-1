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
  TouchableOpacity
} from "react-native";

import { FAB } from "react-native-paper";
//import { MapView } from "expo";
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

  render() {
    return (
      // <MapView
      //   style={{
      //     flex: 1,
      //     flexDirection: "column",
      //     justifyContent: "center",
      //     alignItems: "center",
      //   }}
        // initialRegion={{
        //   latitude: 37.78825,
        //   longitude: -122.4324,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
     // >
     <view>   
         <ImageBackground

source = {require('../images/img.png')}
style={{resizeMode: "center", width: "100%", height: "90%" }} ></ImageBackground>
        <FAB
          style={styles.FAB}
          large
          icon="plus"
          onPress={() => {
            this.dialCall();
          }}
        />
        </view>

     // </MapView>
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
    marginBottom: 80,
    right: 30,
    bottom: 30,
    marginRight: 40,
    width: 50,
    height: 50,
    alignItems:"center",
    justifyContent: "center",
  },
});
