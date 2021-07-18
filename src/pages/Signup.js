import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from "react-native";
import { Picker } from "@react-native-community/picker";

export default class SignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      ConfirmPassword: "",
      MobileNumber: "",
      PickerValue: "",
      // rdata: ['Restaurant', 'Retailer'],
      // checked: 0
    };
  }

  go = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.email) === true) {
      alert("valid");
    } else {
      alert("invalid email please try again");
    }
  };

  onLogin() {
    const { fullName, password, ConfirmPassword, MobileNumber } = this.state;

    Alert.alert(
      "Credentials",
      `${fullName} + ${password} + ${ConfirmPassword} + ${MobileNumber}`
    );
  }

  // onClickListener = (viewId) => {
  //   Alert.alert("Alert", "Button pressed "+viewId);
  // }

  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/male-user/ultraviolet/50/3498db",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Full name"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(fullName) => this.setState({ fullName })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/message/ultraviolet/50/3498db",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(email) => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(password) => this.setState({ password })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Confirm Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(ConfirmPassword) =>
              this.setState({ Confirmpassword })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Mobile Number"
            keyboardType="number-pad"
            maxLength={11}
            underlineColorAndroid="transparent"
            onChangeText={(MobileNumber) => this.setState({ MobileNumber })}
          />
        </View>
        
          {/* <Picker
            style={({ width: "80" }, { marginLeft: 45 })}
            mode="dropdown"
            selectedValue={this.state.PickerValue}
            onValueChange={(itemValue) => {
              this.setState({ PickerValue: itemValue });
            }}
          > */}
            <Picker
        selectedValue={this.state.PickerValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => this.setState({PickerValue: itemValue})}
      >
            {/* <Picker.Item label="Users" key="0" value="" /> */}

            <Picker.Item label="Restaurant" key="1" value="Restaurant" />

            <Picker.Item label="Retailer" key="2" value="Retailer" />
          </Picker>
        
        <Button
          title={"Signup"}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
        {/* 
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}  onPress={this.onLogin.bind(t)}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>  */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B0E0E6",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: "#3498db",
  },
  signUpText: {
    color: "white",
  },
  /*
  img: {
    height: 20,
    width: 20,
  },

  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  }*/
});
