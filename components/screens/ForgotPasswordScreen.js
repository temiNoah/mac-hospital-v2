import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, Alert, Pressable, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { defaultStyles } from '../consts/Styles'
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import CustomButton from '../subcomponents/CustomButton'

export default function ForgotPasswordScreen({ navigation }) {
  const [isPhoneSelected, setIsPhoneSelected] = useState(false);
  const [isEmailSelected, setIsEmailSelected] = useState(false);

  const handleSubmit = () => {
    Alert.alert("submit");
  }

  const handlePhone = () => {
    //ToastAndroid.show("phone", ToastAndroid.SHORT);
    setIsEmailSelected(false);
    setIsPhoneSelected(true);
    navigation.navigate("UserVerificationByPhoneScreen")
  }

  const handleEmail = () => {
    Alert.alert("email");
    setIsPhoneSelected(false);
    setIsEmailSelected(true)
  }


  return (
    <View style={defaultStyles.container}>
      <View style={styles.content}>
        <StatusBar style="auto" backgroundColor="transparent" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ width: '90%', textAlign: 'center', fontSize: 12 }}>Forgot Password</Text>
        </View>

        <View style={styles.body}>
          <View style={{ marginVertical: '10%', alignItems: 'center', width: '100%' }}>
            <Text style={{ fontSize: 13, fontWeight: '500', width: '90%', }}>
              {"Select how you want to retrieve your password"}
            </Text>
          </View>

          <View style={styles.section}>
            <TouchableOpacity
              style={[styles.phoneNumberSection, isPhoneSelected && styles.componentSelected]}
              onPress={() => handlePhone()}>
              <MaterialCommunityIcons name="message-processing" size={24} color="black" />
              <View style={{ flexDirection: 'column', marginLeft: 30 }}>
                <Text style={{ fontSize: 15, fontWeight: "400" }}>Phone number</Text>
                <Text style={{ fontSize: 15, fontWeight: "500" }}>081*****86</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.emailSection,
            isEmailSelected && styles.componentSelected]}
              onPress={() => handleEmail()}>
              <MaterialCommunityIcons name="message-processing" size={24} color="black" />
              <View style={{ flexDirection: 'column', marginLeft: 30 }}>
                <Text style={{ fontSize: 15, fontWeight: "400" }}>Email address</Text>
                <Text style={{ fontSize: 15, fontWeight: "500" }}>Shi*****@gmail.com</Text>
              </View>
            </TouchableOpacity>
          </View>


          <View style={{ flex: 3, borderWidth: 0, justifyContent: "center" }}>
            <CustomButton text={"Save and Continue"} action={() => handleSubmit()} isBgTransparent={false} style={{ width: 200 }} />
          </View>

        </View>


        {/* <View style={{ justifyContent: "center", alignItems: 'center' }}>
        <LinearGradient
          colors={['#4FC48B', '#298582']}
          style={styles.button}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Pressable onPress={() => handleSubmit()}>
            <Text style={styles.buttonText}>continue</Text>
          </Pressable>
        </LinearGradient>
      </View> */}

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
    //justifyContent: 'space-between',
    flex: 20,
    paddingHorizontal: 20,
    borderWidth: 0,
    gap: 10
  },
  section: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    marginBottom: 30
  },
  phoneNumberSection: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 20, // Required for Android
    width: 350,
    //height: 350,
    marginBottom: 30,
    // fontWeight:800,
    // fontSize:30,
  },

  emailSection: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 20, // Required for Android
    width: 350,
    //height: 350,
    marginBottom: "60%",
  },

  button: {
    width: 350,
    borderWidth: 1,
    borderRadius: 20,
    // marginLeft:20,
    padding: 10,
    borderColor: "#4FC48B",
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    color: "white"
  },
  componentSelected: {
    borderWidth: 1
  },
})