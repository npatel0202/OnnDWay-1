import React, { Component } from "react";
import firebase from "firebase";
import { NavigationActions } from "react-navigation";
import {
  StyleSheet,
  //Text,
  View,
  //TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  SafeAreaView,  
  Icon,
  index,
  item,
} from "react-native";
import { Header } from "react-native-elements";
import {Title} from 'react-native-paper';

import { LogBox } from 'react-native';

import {Linking,Platform,TouchableOpacity,Text} from "react-native";
import { FAB } from 'react-native-paper';
import { MapView } from 'expo';
import "prop-types"; // 15.5.10

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      phoneNumber: '',

   }};
 
 dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };
 


 render(){
        return(
<MapView
      style={{ 
        flex: 1,
    		flexDirection: 'column',
    		justifyContent: 'center',
    		alignItems: 'center',
      }}
      // initialRegion={{
      //   latitude: 37.78825,
      //   longitude: -122.4324,
      //   latitudeDelta: 0.0922,
      //   longitudeDelta: 0.0421,
      // }}
    >
                <FAB style={styles.FAB} large icon="plus" onPress={()=>{this.dialCall()}} />
                </MapView>
         
              )
  }}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor: "orange"
  },
 

  FAB:{
    position: 'absolute',
    marginBottom: 80,
    right: 0,
    bottom: 0,
    marginRight: 40,
    width: 80,
    height: 80,
    justifyContent: 'center',
  },
});  
                                  