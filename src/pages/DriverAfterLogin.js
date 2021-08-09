import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const DriverAfterLogin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={{
          uri:
            'https://www.toptal.com/designers/subtlepatterns/patterns/moroccan-flower-dark.png',
        }}>
        <View style={styles.container}>
          <Text style={styles.title}>

          </Text>
          <View style={styles.contentCenter}>
            {/* <Image
              source={{
                uri:
                  'https://media.giphy.com/media/fVWPYi4EoLATm/giphy.gif',
              }}
              style={{
                width: 390,
                height: 300,
                marginBottom: 50

              }}
            /> */}
            <Text style={styles.textStyle}>
              Welcome to OnnDway Driver page
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default DriverAfterLogin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    padding: 15,
    color: 'white',
    fontWeight: 'bold',    
    textAlign: 'center',    
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    padding: 10,
    fontSize:20
  }
});