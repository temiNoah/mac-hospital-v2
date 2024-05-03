import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, Alert, Pressable, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { defaultStyles } from '../consts/Styles'
import CustomButton from '../subcomponents/CustomButton'
import Constants from "expo-constants";

export default function UserVerificationByPhoneScreen({ navigation }) {
  const [isSelected, setIsSelected] = useState(false);
  const [first, setFirst] = useState(''); //first OTP digit
  const [second, setSecond] = useState(''); //second OTP digit
  const [third, setThird] = useState(''); //third OTP digit
  const [forth, setForth] = useState(''); //forth OTP digit
  const [timer, setTimer] = useState(60)

  const handleSubmit = () => {
    //ToastAndroid.show("submit", ToastAndroid.SHORT);
    navigation.navigate("ResetPasswordScreen")
  }

  const handleTouch = (field) => {
    Alert.alert("touched" + field);
  }

  const handleResendOTP = () => {
    Alert.alert("resend");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(interval);
          // Perform actions when the timer reaches zero, e.g., show a message or trigger an event
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000); // Update timer every second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  // Format seconds into minutes and seconds
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <View style={defaultStyles.container}>

      <View style={styles.content}>

        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ width: '90%', textAlign: 'center', fontSize: 12 }}>Forgot Password</Text>
        </View>

        <View style={styles.body}>
          <View style={{ marginVertical: '10%', alignItems: 'center', width: '100%' }}>
            <Text style={{ fontSize: 15, fontWeight: '500', width: '90%', }}>
              Enter the code sent to {"081******86"}</Text>
          </View>

          <View style={styles.section}>
            <TouchableOpacity
              style={[styles.inputBox, isSelected && styles.componentSelected]}
              onPress={() => handleTouch(1)}>
              <TextInput
                placeholder=""
                style={styles.input}
                value={first}
                onChangeText={(text) => setFirst(text)}
                keyboardType="numeric"
                maxLength={1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.inputBox, isSelected && styles.componentSelected]}
              onPress={() => handleTouch(2)}>
              <TextInput
                placeholder=""
                style={styles.input}
                value={second}
                onChangeText={(text) => setSecond(text)}
                keyboardType="numeric"
                maxLength={1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.inputBox, isSelected && styles.componentSelected]}
              onPress={() => handleTouch(3)}>
              <TextInput
                placeholder=""
                style={styles.input}
                value={third}
                onChangeText={(text) => setThird(text)}
                keyboardType="numeric"
                maxLength={1}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.inputBox, isSelected && styles.componentSelected]}
              onPress={() => handleTouch(4)}>
              <TextInput
                placeholder=""
                style={styles.input}
                value={forth}
                onChangeText={(text) => setForth(text)}
                keyboardType="numeric"
                maxLength={1}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: '500', fontSize: 15, color: '#000' }}>
              Resend code in
            </Text>
            <Text style={{ fontWeight: '500', fontSize: 15, color: '#A020F0' }} onPress={() => handleResendOTP()} >
              {` ${seconds < 10 ? '0' : ''}${seconds}s`}
              {
                //` ${minutes}:${seconds < 10 ? '0' : ''}${seconds}s`
              }
            </Text>
          </View>

          {first && second && forth &&
            <View style={{ flex: 1, borderWidth: 0 }}>
              <CustomButton text={"Verify"} action={() => handleSubmit()} isBgTransparent={false} style={{ width: 300 }} />
            </View>
            // <View style={{ justifyContent: "center", alignItems: 'center', marginTop: '90%' }}>
            //   <LinearGradient
            //     colors={['#4FC48B', '#298582']}
            //     style={styles.button}
            //     start={{ x: 0, y: 0.5 }}
            //     end={{ x: 1, y: 0.5 }}
            //   >
            //     <Pressable onPress={() => handleSubmit()}>
            //       <Text style={styles.buttonText}>Verify</Text>
            //     </Pressable>
            //   </LinearGradient>
            // </View>
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 0,
    marginVertical: 50,
    justifyContent: 'space-between',
    padding: 20
  },
  content: {
    flex: 1,
    borderWidth: 0,
    marginTop: Constants.statusBarHeight
  },
  header: {
    flexDirection: "row",
    borderWidth: 0,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10
  },
  body: {
    flex: 20,
    flexDirection: "column",
    paddingHorizontal: 20,
    borderWidth: 0
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBox: {
    //flexDirection:'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 20, // Required for Android
    width: "20%",
    height: 100,
    marginBottom: 30,
  },
  input: {
    //backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 20,
    marginTop: 20,
    // borderColor: "green",
    borderWidth: 0,
    width: "99%",
    height: "70%",
    fontSize: 30,
    fomtWeight: '400',
    textAlign: 'center'
  },
  componentSelected: {
    borderWidth: 1
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
})