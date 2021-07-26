import React from "react";
import { render } from "react-dom";
import { View, Text, SafeAreaView } from "react-native";
import { Header } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <Header
            placement="left"
            leftComponent={{ icon: "menu", color: "#fff" }}
            centerComponent={{ text: "OnnDWay", style: { color: "#fff" } }}
            rightComponent={{ icon: "home", color: "#fff" }}
          />

          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                marginBottom: 16,
              }}
            >
              This is the Home Screen
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              color: "grey",
            }}
          ></Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              color: "grey",
            }}
          ></Text>
        </View>
      </SafeAreaView>
    );
  }
}

//export default HomeScreen;
