import React, { Component, useEffect } from "react";
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
  TextInput,
  Button,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { Header } from "react-native-elements";
import ValidationComponent from "react-native-form-validator";
import { LogBox } from "react-native";

const db = require("../../firebase.config");

class OrderScreen extends Component {
  constructor() {
    super();
    this.dbref = firebase.firestore().collection("orders");
    this.state = {
      customername: "",
      email: "",
      customeraddress: "",
      totalprice: "",
      isLoading: false,
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  storeUser() {
    if (this.state.customername === "") {
      alert("Fill the Customer Name");
    } else if (this.state.email === "") {
      alert("Fill the email");
    } else if (this.state.customeraddress === "") {
      alert("Fill the Customer Address");
    } else if (this.state.totalprice === "") {
      alert("Fill the Price");
    } else {
      this.setState({
        isLoading: true,
      });
      this.dbref
        .add({
          customername: this.state.customername,
          email: this.state.email,
          customeraddress: this.state.customeraddress,
          totalprice: this.state.totalprice,
        })
        .then((res) => {
          this.setState({
            customername: "",
            email: "",
            customeraddress: "",
            totalprice: "",
            isLoading: false,
          });
          // // this.props.navigation.navigate(
          // //   "GetOrders",
          // //   {},
          // //   NavigationActions.navigate({
          // //     routeName: "GetOrders",
          // //   })
          // );
        })
        .catch((err) => {
          console.error("Error found: ", err);
          this.setState({
            isLoading: false,
          });
        });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder={"Customer Name"}
              value={this.state.customername}
              onChangeText={(val) => this.inputValueUpdate(val, "customername")}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={"Email"}
              value={this.state.email}
              onChangeText={(val) => this.inputValueUpdate(val, "email")}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder={"Customer Address"}
              value={this.state.customeraddress}
              onChangeText={(val) =>
                this.inputValueUpdate(val, "customeraddress")
              }
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder={"Total Price"}
              value={this.state.totalprice}
              onChangeText={(val) => this.inputValueUpdate(val, "totalprice")}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Order"
              onPress={() => this.storeUser()}
              color="#19AC52"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 0,
//     backgroundColor: "#f6f6f6",
//   },

//   list: {
//     paddingHorizontal: 5,
//     backgroundColor: "#f1e3dd",
//   },
//   listContainer: {
//     alignItems: "center",
//   },
//   /******** card **************/
//   card: {
//     shadowColor: "#474747",
//     shadowOffset: {
//       width: 0,
//       height: 6,
//     },
//     shadowOpacity: 0.37,
//     shadowRadius: 7.49,

//     elevation: 12,
//     marginVertical: 20,
//     marginHorizontal: 40,
//     backgroundColor: "#e2e2e2",
//     //flexBasis: '42%',
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   cardHeader: {
//     paddingVertical: 17,
//     paddingHorizontal: 16,
//     borderTopLeftRadius: 1,
//     borderTopRightRadius: 1,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   cardContent: {
//     paddingVertical: 12.5,
//     paddingHorizontal: 16,
//   },
//   cardFooter: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingTop: 12.5,
//     paddingBottom: 25,
//     paddingHorizontal: 16,
//     borderBottomLeftRadius: 1,
//     borderBottomRightRadius: 1,
//   },
//   cardImage: {
//     height: 50,
//     width: 50,
//     alignSelf: "center",
//   },
//   title: {
//     fontSize: 18,
//     flex: 1,
//     alignSelf: "center",
//     color: "black",
//   },

// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default OrderScreen;
