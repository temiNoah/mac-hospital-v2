import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, Pressable, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Constants from "expo-constants";
import { RadioButton } from 'react-native-paper';
import { UserContext } from "../../context/UserContext";
import CustomButton from "../subcomponents/CustomButton"
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ConsoleModal from '../subcomponents/ConsoleModal'
import { USER_TYPE } from "../consts/data";
//import { getUser, updateUser } from "../../utility/firebase/crudOperations";
import { AUTH_TYPE } from "../consts/data";

export default function UserTypeScreen({ navigation }) {
  // const [isHost, setHost] = useState(false);
  const [userType, setUserType] = useState();
  const { user, setUser } = useContext(UserContext)


  const handleSubmit = () => {

    setUser(prevUser => ({ ...prevUser, userType }))

    //check if the user type is set on firestore users collections
    if (user.authProvider === AUTH_TYPE.GOOGLE || user.authProvider === AUTH_TYPE.FACEBOOK) {
      checkAndSetUserType(user.id, userType)
        .then(data => {
          console.log("handleSubmit : data returned: ", data);
          if (userType === "doctor")
            navigation.navigate("DoctorDashboardScreen")
          else
            navigation.navigate("ClientDashboardScreen")
        }).catch(err => {
          console.error("Error:", err);//User type cannot be updated
          Alert.alert("Updating User type failed! please login again")
        })
    }
    else {
      console.log("user type:", JSON.stringify(user))
      if (userType === USER_TYPE.DOCTOR) {
        // if(user.userType ==)
        navigation.navigate("DoctorDashboardScreen")
      }
      else if (userType === USER_TYPE.CLIENT) {
        navigation.navigate("ClientDashboardScreen")
      }
      else {
        Alert.alert("Sorry! You chose the incorrect usertype")
      }
    }
  }

  /**update firestore user type */
  const checkAndSetUserType = async (userId, userType) => {
    // const firestoreUser = await getUser(user.email);
    // if (!firestoreUser.userType) {
    //   console.error("Firestore user's userType has been set")
    //   return Promise.resolve("Firestore user's userType has been set")
    // }
    // else {
    //   // update the user type
    //   return await updateUser("users", userId, userType).then(() => {
    //     console.log("Successful updated:")
    //     return Promise.resolve("Successful updated:")
    //   }).catch(error => {
    //     console.error("Error:", error.message);
    //     Promise.reject("Error:" + error.message)
    //   })
    // }

  }

  // let user = null
  // useEffect(() => {

  //   async function fetchUser() {
  //     user = await AsyncStorage.getItem('user')
  //   }

  //   fetchUser()
  // }, [])


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <StatusBar style='auto' backgroundColor="transparent" />
        <View style={styles.header}>
          <Image
            source={require('../../assets/logo.png')}
            style={{ width: 90, height: 50, marginBottom: 0 }}
          />
        </View>

        <View style={styles.body}>
          <View style={{ width: '100%', justifyContent: "center", alignItems: 'center' }}>
            <Image source={require('../../assets/treatment.png')} />
          </View>

          <View style={{ margin: 0, paddingHorizontal: 20, borderWidth: 0, flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 15, fontWeight: '500' }}>
              Continue as
            </Text>
            {
              //   <View style={styles.section}>
              //   <Text style={styles.paragraph}>Host</Text>
              //   <Checkbox style={styles.checkbox} value={isHost} onValueChange={setHost} /> 
              // </View>
            }

            <View style={styles.section}>
              <Text style={styles.paragraph}>Doctor</Text>
              {
                // <Checkbox style={styles.checkbox} value={isDoctor} onValueChange={setDoctor} /> 
              }
              <RadioButton
                value="doctor"
                status={userType === 'doctor' ? 'checked' : 'unchecked'}
                color='#4FC48B'
                onPress={() => setUserType(USER_TYPE.DOCTOR)}
              />
            </View>

            <View style={styles.section}>
              <Text style={styles.paragraph}>Client</Text>
              {
                // <Checkbox style={styles.checkbox} value={isClient} onValueChange={setClient} /> 
              }
              <RadioButton
                value="client"
                status={userType === 'client' ? 'checked' : 'unchecked'}
                color='#4FC48B'
                onPress={() => setUserType(USER_TYPE.CLIENT)}
              />
            </View>

          </View>
          <View style={{ flex: 1, borderWidth: 0, justifyContent: "center", alignItems: "center" }}>
            <CustomButton text={"continue"} action={() => handleSubmit()} isBgTransparent={false} style={{ width: 200 }} />
          </View>

          {/* <ConsoleModal message={user} /> */}
        </View>

        {/* JSON.stringify(AsyncStorage.getItem('user')) */}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0
  },
  content: {
    flex: 1,
    borderWidth: 0,
    marginTop: Constants.statusBarHeight
  },
  header: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 0,
    paddingHorizontal: 10,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  body: {
    flex: 10,
    borderWidth: 0
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  paragraph: {
    fontSize: 15,
    width: 80
  },
  checkbox: {
    margin: 8,
  },
  button: {
    width: 200,
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
});