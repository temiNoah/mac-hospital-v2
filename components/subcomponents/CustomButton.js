import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput, Alert, Pressable, ImageBackground
} from "react-native";
import { Ionicons, MaterialIcons, AntDesign, FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default CustomButton = ({ text, action, isBgTransparent = false, style }) => {

  const buttonJsx = (

    <Pressable onPress={() => action()}>
      <Text style={[styles.buttonText, { color: isBgTransparent ? '#4FC48B' : '#FFFFFF' }]}>{text}</Text>
    </Pressable>
  );


  return (
    <View style={{ justifyContent: "center", alignItems: 'center', marginTop: 0, }}>
      {
        isBgTransparent ?
          <View style={[styles.button, { ...style }]}>
            {buttonJsx}
          </View>
          :
          <LinearGradient
            colors={['#4FC48B', '#298582']}
            style={[styles.button, { ...style }]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          >
            {buttonJsx}
          </LinearGradient>
      }
    </View>
  )
}
const styles = StyleSheet.create({
  buttonText: {
    fontWeight: "600",
    fontSize: 12,
    textAlign: "center",

  },
  button: {
    borderWidth: 1,
    borderRadius: 20,
    // marginLeft:20,
    padding: 10,
    borderColor: "#4FC48B",
    justifyContent: 'center'
  },
})