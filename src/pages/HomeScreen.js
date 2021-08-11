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

  dialCall = () => {
  //   let phoneNumber = "";
  //   if (Platform.OS === "android") {
  //     phoneNumber = `tel:${number}`;
  //   } else {
  //     phoneNumber = `telprompt:${number}`;
  //   }
  //   Linking.openURL(phoneNumber);
  // };
  this.props.navigation.navigate("GetDriver",{},
  
  NavigationActions.navigate({
    routeName: "GetDriver",})
  
);}

dialCall1 = () => {
  this.props.navigation.navigate("GetOrders",{},
  
  NavigationActions.navigate({
    routeName: "GetOrders",})
  
);
}

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
     <View>   
         <ImageBackground

source = {require('../images/img.png')}
style={{resizeMode: "center", width: "100%", height: "90%" }} ></ImageBackground>
         {/* <FAB 
         style={styles.FAB}
          large
          icon="plus"
          onPress={() => {
            this.dialCall();
          }}
        />
        
        <FAB
          style={styles.FAB1}
          large
          icon="minus"
          onPress={() => {
            this.dialCall1();
          }}
        /> */}
<View style={styles.inputs}/>
              <Button
              title="Driver List"
              style={styles.inputs1}
              //onPress={this.onLogin.bind(this)}

              onPress={() => this.dialCall()}
              />
<View style={styles.inputs1}/>
              <Button
              title="Order List"
              style={styles.inputs1}
              //onPress={this.onLogin.bind(this)}

              onPress={() => this.dialCall1()}
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
    marginBottom: 80,
    right: 30,
    bottom: -50,
    marginRight: 10,
    width: 50,
    height: 50,
    alignItems:"center",
    justifyContent: "center",
  },
  FAB1: {
    position: "absolute",
    marginBottom: 80,
    left: 30,
    bottom: -50,
    marginLeft: 10,
    width: 50,
    height: 50,
    alignItems:"center",
    justifyContent: "center",
  },
  // headerText: {
  //   fontSize: 20,
  //   textAlign: "center",
  //   margin: 10,
  //   fontWeight: "bold"
  // },
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
