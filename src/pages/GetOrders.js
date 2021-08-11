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
                 return (<Text style={styles.SquareShapeView} key={res.id}  onPress={() => {
                    this.props.navigation.navigate('orderdetail', {
                         userkey: res.id
                       });
                     }}>Customer Name: {customername} Email: {email} Customer Address: {customeraddress} Total Price: ${totalprice} 
                          
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
        <View style={styles.SquareShapeView} >
        
        <Text>{this.state.data}</Text>
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
  SquareShapeView: {
 
    width: 400,
    backgroundColor: '#b0e0e6',
    justifyContent: 'space-around',
    fontSize: 16,
 
  },
})

export default GetOrdersScreen;