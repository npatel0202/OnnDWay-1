import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import firebase from 'firebase';
import {useNavigation} from '@react-navigation/native';
import { get } from 'lodash';
const db = require("../../firebase.config");

import { LogBox } from 'react-native';
import { TouchableOpacity } from 'react-native';
LogBox.ignoreLogs(['Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.']);

export default class UserProfileView extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      fullname: "",
      email: "",
      userData: {
        fullname: "",
        email: ""
      },
      users: "",
    };
  }
  // out() {
  //   ({ route, navigation }) => {
  //     navigation.navigate(
  //       "LoginSignup",
  //       {},
  //       NavigationActions.navigate({
  //         routeName: "Login",
  //       })
  //     );
  //     return null;
  //   };
  // }
 
  
  componentDidMount() {


    const user = firebase.auth().currentUser;
    firebase.firestore().collection("users").where('email', '==', user.providerData[0].email).get().then(userData => {
      const userDetail = userData.docs[0];
      this.setState({ fullname: userDetail.data().fullName, email: userDetail.data().email });
    });


    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      // this.state.email = user.email;
      //const photoURL = user.photoURL;
      // const emailVerified = user.emailVerified;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;




    }
  };




  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar}
              source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />

            <Text style={styles.name}>{this.state.fullname}</Text>
            <Text style={styles.userInfo}>{this.state.email}</Text>

          </View>
        </View>

        {/* <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Home</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Settings</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>News</Text>
              </View>
            </View> 
 
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/facebook-like.png'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Shop</Text>
              </View>
            </View> 

          </View> */}
        <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginSignup')}>
          <View>
            <Text style={styles.button}>{'Log Out'}</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: '600',
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 80,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    margin: 10,
  }
});


