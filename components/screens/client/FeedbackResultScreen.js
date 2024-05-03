import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, Pressable, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import CustomButton from '../../subcomponents/CustomButton'
import { defaultStyles } from "../../consts/Styles";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";


export default function FeebbackResultScreen({ navigation }) {


  const handleSubmit = () => {
    // ToastAndroid.show(JSON.stringify(form), ToastAndroid.SHORT);
    navigation.navigate("FeedbackScreen");
  }

  return (
    <View style={defaultStyles.container}>
      <View style={styles.content}>
        <StatusBar style="auto" backgroundColor="transparent" />

        <View style={styles.header}>
        </View>

        <View style={styles.body}>
          <View style={{
            flex: 1, borderWidth: 0, alignItems: 'center', gap: 50, paddingTop: "40%"
          }}>
            <View style={styles.message}>
              <Text style={{ textAlign: 'center', fontFamily: 'ZillaSlab' }}>
                {"Thank you."}
              </Text>

              <Text style=
                {{
                  textAlign: 'center',
                  fontSize: 15, paddingHorizontal: 0,
                  borderWidth: 0, width: "100%",
                  fontFamily: 'ZillaSlab'
                }}>
                {"We promise to effect action  on your complaints"}
              </Text>
            </View>

            <View style={{ borderWidth: 0, justifyContent: "center" }}>
              <CustomButton text={"Back"} action={() => handleSubmit()} isBgTransparent={false} style={{ width: 200 }} />
            </View>
          </View>

        </View>

      </View>

      {/* <View style={{ justifyContent: "center", alignItems: 'center' }} >
        <LinearGradient
          colors={['transparent', 'transparent']}
          style={styles.button}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Pressable onPress={handleSubmit}>
            <Text style={styles.buttonText} >{"Back"}</Text>
          </Pressable>
        </LinearGradient>
      </View> */}
    </View>
  )

}
const styles = StyleSheet.create({
  container: {
    //marginTop:50,
    marginTop: "50%",
    marginLeft: 30,
    marginRight: 30,
    padding: 20,
    width: "80%",
    borderWidth: 0
  },
  content: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  header: {
    color: "black",
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderWidth: 0
  },
  body: {
    flex: 20,
    paddingHorizontal: 20,
    borderWidth: 0,
    gap: 10
  },
  message: {
    marginTop: "20%",
    width: "100%",
    borderWidth: 0

  },
  button: {
    width: 300,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: '80%',
    padding: 10,
    borderColor: "#000",//"#4FC48B",
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    color: "Back"
  },
})