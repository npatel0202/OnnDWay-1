// screens/UserScreen.js
import React, { Component } from 'react';
import { StyleSheet, ScrollView,Text, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from "firebase";
import { NavigationActions } from "react-navigation";

const db = require("../../firebase.config");


class GetOrdersScreen extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('orders');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.firestoreRef.get().then((querySnapshot) => {
        const userArr = querySnapshot.docs.map((res) => {
          const { customername, email, customeraddress, totalprice } = res.data();
            // return (<ListItem
            //       key={res.id}
            //       chevron
            //       bottomDivider
            //       title={name}
            //       subtitle={email}
            //       onPress={() => {
            //         this.props.navigation.navigate('userdetail', {
            //           userkey: res.id
            //         });
            //       }}/>
                //   );
                 return (<Text key={res.id}  onPress={() => {
                    this.props.navigation.navigate('orderdetail', {
                         userkey: res.id
                       });
                     }}>{customername}{email}{customeraddress}{totalprice} 
                          
                          </Text>
                    )
        });
        this.setState({userArr : userArr, isLoading: false});
    });
  }

//   componentWillUnmount(){
//     this.unsubscribe();
//   }

//   getCollection = (querySnapshot) => {
//      console.log(userArr);

//     });
    
//     this.setState({
//       userArr,
//       isLoading: false,
//    });
   
  

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
          {this.state.userArr
            // this.state.userArr.map((item) => {
            //   return (
            //     <ListItem
            //       key={item.id}
            //       chevron
            //       bottomDivider
            //       title={item.name}
            //       subtitle={item.email}
            //       onPress={() => {
            //         this.props.navigation.navigate('userdetail', {
            //           userkey: item.key
            //         });
            //       }}/>

            //   );
            // })
          }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default GetOrdersScreen;