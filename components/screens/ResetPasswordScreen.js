import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, Alert, Pressable, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

export default function ResetPasswordScreen({ navigation }) {
  const [isSelected, setIsSelected] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isNewPasswordVisible, setNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false)


  const handleSubmit = () => {
    Alert.alert("reset");
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ width: '90%', textAlign: 'center', fontSize: 20 }}>Reset Password</Text>
      </View>

      <View style={{ padding: 0, width: '100%', borderWidth: 0 }}>
        <View style={{ marginVertical: '10%', alignItems: 'center', width: '100%' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', width: '100%', }}>
            Create new password</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.fieldSet}>
            <Text style={styles.legend}>New Password</Text>
            <View style={{ width: '100%', flexDirection: 'row' }}>
              <TextInput
                placeholder=""
                style={styles.input}
                secureTextEntry={!isNewPasswordVisible}
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
              />
              {
                isNewPasswordVisible ?
                  <Ionicons name="eye-outline" size={24} color="black"
                    onPress={() => setNewPasswordVisible(false)}
                    style={{ marginTop: 20 }}
                  />
                  :
                  <Ionicons name="eye-off-outline" size={24} color="black"
                    onPress={() => setNewPasswordVisible(true)}
                    style={{ marginTop: 20 }}
                  />
              }
            </View>
          </View>

          <View style={styles.fieldSet}>
            <Text style={styles.legend}>Confirm Password</Text>
            <View style={{ width: '100%', flexDirection: 'row' }}>
              <TextInput
                placeholder=""
                style={styles.input}
                secureTextEntry={!isConfirmPasswordVisible}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
              {
                isConfirmPasswordVisible ?
                  <Ionicons name="eye-outline" size={24} color="black"
                    onPress={() => setConfirmPasswordVisible(false)} style={{ marginTop: 20 }}
                  /> :
                  <Ionicons name="eye-off-outline" size={24} color="black"
                    onPress={() => setConfirmPasswordVisible(true)} style={{ marginTop: 20 }}
                  />
              }
            </View>
          </View>


          <View style={{ justifyContent: "center", alignItems: 'center' }} >
            <LinearGradient
              colors={['#4FC48B', '#298582']}
              style={styles.button}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
            >
              <Pressable onPress={() => handleSubmit()} disabled={isDisabled}>
                <Text style={styles.buttonText} >Done</Text>
              </Pressable>
            </LinearGradient>
          </View>


        </View>

      </View>



    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginVertical: '10%',
    padding: 20
  },
  fieldSet: {
    marginTop: 0,
    marginBottom: "10%",
    paddingHorizontal: 0,
    paddingBottom: 0,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#000',
    height: 70,
    width: '100%',
    backgroundColor: 'white'

  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    // fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: '#F4F4F4'
  },
  formContainer: {
    // marginTop:'20%',
    width: "100%",
    alignItems: 'center',
    // justifyContent:'space-between'
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
    borderColor: "green",
    borderWidth: 0,
    width: '90%',
    fontSize: 20
  },
  button: {
    width: 350,
    borderWidth: 1,
    borderRadius: 20,
    margin: '60%',
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