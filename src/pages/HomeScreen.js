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
  Icon,
} from "react-native";
import { Header } from "react-native-elements";


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        // {
        //   id: 1,
        //   title: "Home",
        //   image: "https://img.icons8.com/color/70/000000/cottage.png",
        // },
        {
          id: 2,
          title: "Profile",
          image:
            "https://img.icons8.com/color/70/000000/administrator-male.png",

        },
        {
          id: 3,
          title: "Orders",
          image: "https://img.icons8.com/color/48/000000/purchase-order.png",
        },
        {
          id: 4,
          title: "AddDrivers",
          image: "https://img.icons8.com/ios-filled/50/4a90e2/add--v1.png",
         
  
        },

        {
          id: 5,
          title: "Track Order",
          image: "https://img.icons8.com/color-glass/48/000000/track-order.png",
        },
        {
          id: 6,
          title: "List of Drivers",
          image: "https://img.icons8.com/color/48/000000/group.png",
        },

        {
          id: 7,
          title: "Telephone Order",
          image: "https://img.icons8.com/ios/50/4a90e2/incoming-call.png",
        },
        {
          id: 8,
          title: "History ",
          image:
            "https://img.icons8.com/color-glass/48/000000/order-history.png",
        },
        {
          id: 9,
          title: "Canceled Order",
          image: "https://img.icons8.com/color/48/000000/cancel--v1.png",
        },

        {
          id: 10,
          title: "Setting",
          image: "https://img.icons8.com/android/24/000000/automatic.png",
        },

        {
          id: 11,
          title: "Logout",
          image:
            "https://img.icons8.com/ios-filled/50/4a90e2/logout-rounded-up.png",
        },
      ],
    };
  }

  clickEventListener(item) {
    if (item.title == "Logout") {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.props.navigation.navigate(
            "LoginSignup",
            {},
            NavigationActions.navigate({
              routeName: "Login",
            })
          );
        });

    }  if ( item.title =="AddDrivers")  {
      this.props.navigation.navigate(
        "AddDriver"
      );
      

    }

                  //  Alert.alert(item.title);
  
}

  render() {
    return (
      <View style={styles.container}>
        {/* <Header
          centerComponent={{
            text: "OnnDWay",
            style: {
              color: "#fff",
              fontSize: 21,
              justifyContent: "center",
              position: "absolute",
              top: -4,
              left: -50,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          rightComponent={{ icon: "home",color:"white"}}         
          /> */}
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => {
                    this.clickEventListener(item);
                  }}
                >
                  <Image
                    style={styles.cardImage}
                    source={{ uri: item.image }}
                    
                  />
                </TouchableOpacity>

                <View style={styles.cardHeader}>
                  <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                    
                  >
                    
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#f6f6f6",
  },
  
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#f1e3dd",
  },
  listContainer: {
    alignItems: "center",
  },
  /******** card **************/
  card: {
    shadowColor: "#474747",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor: "#e2e2e2",
    //flexBasis: '42%',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
    color: "black",
  },
 
});
