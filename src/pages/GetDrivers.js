// screens/UserScreen.js
import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, ActivityIndicator, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from "firebase";
import { NavigationActions } from "react-navigation";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import { TouchableOpacity } from 'react-native';

const db = require("../../firebase.config");


class GetDriverScreen extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('drivers');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.firestoreRef.get().then((querySnapshot) => {
      const userArr = querySnapshot.docs.map((res) => {
        const { name, email, mobile } = res.data();
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
        return (<View style={[styles.SquareShapeView, {width: '100%'}]} key={res.id} onPress={() => {
          this.props.navigation.navigate('userdetail', {
            userkey: res.id
          });
        }}>
          {/* Name: {name} Email: {email} Mobile: {mobile} */}
          <Card style={{width: '100%'}}>
            <CardTitle
              title={name}
              subtitle={email}
            />
            <CardContent text={mobile} />
            <CardAction
              separator={true}
              inColumn={false}>
              <CardButton
              style={{width: '100%'}}
                onPress={() => {
                  this.props.navigation.navigate('userdetail', {
                    userkey: res.id
                  });
                }}
                title="Edit Profile"
                color="blue"
              />
              
            </CardAction>
          </Card>

        </View>
        )
      });
      this.setState({ userArr: userArr, isLoading: false });
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
    if (this.state.isLoading) {
      return (
        // <View style={styles.preloader}>
        //   <ActivityIndicator size="large" color="#9E9E9E"/>
        // </View>
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
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',

  },
  SquareShapeView: {

    width: '100%',
    backgroundColor: '#b0e0e6',
    justifyContent: 'space-around',
    fontSize: 16,

  },
  // Text: {
  //   fontSize: 25,
  //   lineHeight: 10,
  // }
})

export default GetDriverScreen;