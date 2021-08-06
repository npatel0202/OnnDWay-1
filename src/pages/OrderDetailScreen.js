// screens/UserDetailScreen.js

import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';

// screens/UserScreen.js

import { ListItem } from 'react-native-elements';
import { NavigationActions } from "react-navigation";
import firebase from "firebase";
const db = require("../../firebase.config");

class OrderDetailScreen extends Component {

  constructor() {
    super();
    this.state = {
        customername: '',
        email: '',
        customeraddress: '',
        totalprice: '',
        isLoading: false,
    };
  }
 
  componentDidMount() {
    const dbRef = firebase.firestore().collection('orders').doc(this.props.route.params.userkey)
    dbRef.get().then((res) => {
      if (res.exists) {
        const user = res.data();
        this.setState({
          key: res.id,
          customername: user.customername,
          email: user.email,
          customeraddress: user.customeraddress,
          totalprice: user.totalprice,
          isLoading: false
        });
      } else {
        console.log("Document does not exist!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  updateUser() {
    this.setState({
      isLoading: true,
    });
    const updateDBRef = firebase.firestore().collection('orders').doc(this.state.key);
    updateDBRef.set({
      customername: this.state.customername,
      email: this.state.email,
      customeraddress: this.state.customeraddress,
      totalprice: this.state.totalprice,
    }).then((docRef) => {
      this.setState({
        key: '',
        name: '',
        email: '',
        mobile: '',
        isLoading: false,
      });
    //   this.props.navigation.navigate('UserScreen');
      this.props.navigation.navigate(
        "Home",
        
      ); 
    })
    .catch((error) => {
      console.error("Error: ", error);
      this.setState({
        isLoading: false,
      });
    });
  }

  deleteUser() {
    const dbRef = firebase.firestore().collection('orders').doc(this.props.route.params.userkey)
      dbRef.delete().then((res) => {
          console.log('Item removed from database')
          //this.props.navigation.navigate('UserScreen');
          this.props.navigation.navigate(
            "Home",
            
          ); 

      })
  }

  openTwoButtonAlert=()=>{
    Alert.alert(
      'Delete User',
      'Are you sure?',
      [
        {text: 'Yes', onPress: () => this.deleteUser()},
        {text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel'},
      ],
      { 
        cancelable: true 
      }
    );
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Customer Name'}
              value={this.state.customername}
              onChangeText={(val) => this.inputValueUpdate(val, 'customername')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={'Email'}
              value={this.state.email}
              onChangeText={(val) => this.inputValueUpdate(val, 'email')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Customer Address'}
              value={this.state.customeraddress}
              onChangeText={(val) => this.inputValueUpdate(val, 'customeraddress')}
          />
        </View>
        <View style={styles.inputGroup}>
        <TextInput
            placeholder={'Total Price'}
            value={this.state.totalprice}
            onChangeText={(val) => this.inputValueUpdate(val, 'totalprice')}
        />
      </View>
        <View style={styles.button}>
          <Button
            title='Update'
            onPress={() => this.updateUser()} 
            color="#19AC52"
          />
          </View>
         <View>
          <Button
            title='Delete'
            onPress={this.openTwoButtonAlert}
            color="#E37399"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: 7, 
  }
})

export default OrderDetailScreen;