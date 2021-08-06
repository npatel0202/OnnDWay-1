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
  TextInput,
  FlatList,
  Icon,
  Button,
  ActivityIndicator,
} from "react-native";
import { Header } from "react-native-elements";
import ValidationComponent from "react-native-form-validator";


const db = require("../../firebase.config");

// export default class DriverScreen extends ValidationComponent {

//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       drivers:"",
//     };
//   }
    
//   adddrivers = async () => {
      
//     firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
//   .then(async(userCredential) => {
//     const ref = firebase.firestore().collection("drivers");
//     await ref.add({
//       email: this.state.email,
//       password: this.state.password,

//     });
//     this.setState({
//       drivers: "",
//     }); 
     
//     // Signed in
//     this.props.navigation.navigate(
//       "GetDriver",
//       {},
//       NavigationActions.navigate({
//         routeName: "GetDriver",
//       })
//     );
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });
//   };
//   onSignup() {
//     const { username,email, password } = this.state;

//     this.validate({
//       email: { email:true, minlength: 3, maxlength: 50, required: true },
//       password: { minlength: 6, maxLength: 12, required: true },
     
//     });
//     this.setState({ errors: this.getErrorMessages(", ") });
//     if(this.errors.length == 0)
//     {
//       this.adddrivers();

//     }
//     else{
//       this.props.navigation.navigate(
//         "OnnDWay",
       
//       );  
//     }
//       }



//       render() {
//         return (
          
//           <View style={styles.container}>


// <View style={styles.inputContainer}>
//               <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
//               <TextInput style={styles.inputs}
//                   placeholder="Email"
//                   keyboardType="email-address"
//                   underlineColorAndroid='transparent'
//                   onChangeText={(email) => this.setState({email})}/>
//             </View>
            
//             {this.isFieldInError("email") &&
//                 this.getErrorsInField("email").map((errorMessage) => (
//                   <Text key={errorMessage}>{errorMessage}</Text>
//                 ))}
    
            
//             <View style={styles.inputContainer}>
//               <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
//               <TextInput style={styles.inputs}
//                   placeholder="Password"
//                   secureTextEntry={true}
//                   underlineColorAndroid='transparent'
//                   onChangeText={(password) => this.setState({password})}/>
//             </View>
//             {this.isFieldInError("password") &&
//                 this.getErrorsInField("password").map((errorMessage) => (
//                   <Text key={errorMessage}>{errorMessage}</Text>
//                 ))}
//      <Button
//                 title="Add Driver"
//                 style={styles.input}
//                 onPress={this.onSignup.bind(this)}
//                //onPress={() => this.addusers()}
//               />
//             {/* <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}    onPress={this.onSignup.bind(this)}>
//               <Text style={styles.signUpText}>Submit</Text>
//             </TouchableHighlight> */}
//           </View>
//         );
//       }
//     }
    
//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#00b5ec',
//       },
//       inputContainer: {
//           borderBottomColor: '#F5FCFF',
//           backgroundColor: '#FFFFFF',
//           borderRadius:30,
//           borderBottomWidth: 1,
//           width:250,
//           height:45,
//           marginBottom:20,
//           flexDirection: 'row',
//           alignItems:'center'
//       },
//       inputs:{
//           height:45,
//           marginLeft:16,
//           borderBottomColor: '#FFFFFF',
//           flex:1,
//       },
//       inputIcon:{
//         width:30,
//         height:30,
//         marginLeft:15,
//         justifyContent: 'center'
//       },
//       buttonContainer: {
//         height:45,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom:20,
//         width:250,
//         borderRadius:30,
//       },
//       signupButton: {
//         backgroundColor: "#FF4DFF",
//       },
//       signUpText: {
//         color: 'white',
//       }
//     });
    
class DriverScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection('drivers');
    this.state = {
      name: '',
      email: '',
      mobile: '',
      isLoading: false
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  storeUser() {
    if(this.state.name === '' ){
     alert('Fill at least your name!')
    } 
    else if( this.state.email === ''){
      alert('Fill at least your email!')
     }
    else  if(this.state.mobile === ''){
      alert('Fill at least your Mobile Number!')
     }
    else {
      this.setState({
        isLoading: true,
      });      
      this.dbRef.add({
        name: this.state.name,
        email: this.state.email,
        mobile: this.state.mobile,
      }).then((res) => {
        this.setState({
          name: '',
          email: '',
          mobile: '',
          isLoading: false,
        });
        this.props.navigation.navigate(
          "GetDriver",
          {},
          NavigationActions.navigate({
            routeName: "GetDriver",
          })
        );  
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
              placeholder={'Name'}
              value={this.state.name}
              onChangeText={(val) => this.inputValueUpdate(val, 'name')}
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
              placeholder={'Mobile'}
              value={this.state.mobile}
              onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Add Driver'
            onPress={() => this.storeUser()} 
            color="#19AC52"
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
  }
})

export default DriverScreen;