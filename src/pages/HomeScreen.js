import React, { Component } from "react";
import firebase from "firebase";
import { NavigationActions } from "react-navigation";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  SafeAreaView,  
  Icon,
} from "react-native";
import { Header } from "react-native-elements";
import {Title} from 'react-native-paper';

import { LogBox } from 'react-native';



export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "Order 1",  price:"$ 25.00 CAD", dname: "John" ,image:"https://via.placeholder.com/400x200/FFB6C1/000000"},
        {id:2, title: "Order 2",  price:"$ 10.13 CAD", dname: "Allen" ,image:"https://via.placeholder.com/400x200/FA8072/000000"} ,
        {id:3, title: "Order 3",  price:"$ 12.12 CAD", dname: "Lucas",image:"https://via.placeholder.com/400x200/87CEEB/000000"}, 
        {id:4, title: "Order 4",  price:"$ 11.00 CAD", dname: "Rami",image:"https://via.placeholder.com/400x200/4682B4/000000"}, 
         ],
         calls: [
          {id:1,  name: "Jake",    status:"active"},
          {id:2,  name: "John",   status:"OnnDWay"} ,
          {id:3,  name: "Lucas",  status:"OnnDWay"} ,
          {id:4,  name: "Sue",  status:"active"} ,
          {id:5,  name: "Rami",   status:"OnnDWay"} ,
          {id:6,  name: "Norman", status:"active"} ,
          {id:8,  name: "Allen", status:"OnnDWay"} ,
          ]

    };
  }
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}
  renderItem = ({item}) => {
    return (
      
      <TouchableOpacity>
            <View style={styles.row}>
        
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
             <View style={styles.nameContainer}>
              <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
              <Text style={styles.msgTxt}>{item.status}</Text>
           </View> 
            {/* <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.status}</Text>
            </View> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  addProductToCart = () => {
    Alert.alert('Success', 'The product has been added to your cart')
  }
  render() {
    return (

      <ScrollView style={styles.scrollView}
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps="handled"
       >
      <View style={styles.container}>
          <Title>Pending Orders</Title>
        
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          
          keyExtractor= {(item) => {
            return item.id.toString();
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <View style={styles.card}>
               
               <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                    </View>
                </View>
                
                
                
                
                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton} onPress={() => this.addProductToCart()}>
                        <Image style={styles.icon} source={{uri: 'https://img.icons8.com/nolan/96/3498db/driver.png'}}/>
                        <Text style={[styles.socialrBarLabel, styles.buyNow]}>Driver: </Text>
                        
                    <Text style={styles.socialBarlabel}>{item.dname}</Text>
                      </TouchableOpacity>
                    </View>
                </View>
                </View>
                
              </View>
            )
          }}/>
          <View style={{ flex: 1 }} >
        <FlatList 
          extraData={this.state}
          data={this.state.calls}
          keyExtractor = {(item) => {
            return item.id.toString();
          }}
          renderItem={this.renderItem}/>
      </View>
                
      
      </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor: "orange"
  },
  list: {
    paddingHorizontal: 5,
    //backgroundColor:"",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"#ffe4c4",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },

  name:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },
  
  buyNow:{
    color: "purple",
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
//Active Drivers
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    //marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 20,
    width:170,
    height: 50,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 20,
    marginLeft: 10,
  },
});  
                                  