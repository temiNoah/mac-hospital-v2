import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Image,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  ScrollView, ActivityIndicator, Alert, Dimensions
} from "react-native";
import { Button } from "react-native-elements";
//import { auth } from "../../firebase";
//import Dashboard from './client/Dashboard';
import Checkbox from 'expo-checkbox';
import { Ionicons } from '@expo/vector-icons';
//import { signInWithEmailAndPassword } from "firebase/auth";
//import { auth } from "../../config/firebase";
import { StatusBar } from "expo-status-bar";
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as Google from "expo-auth-session/providers/google";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from 'expo-constants';
import { UserContext } from '../../context/UserContext'
import useGoogleSSO from '../../utility/sso/google'
import FormValidator from "../../utility/FormValidator";
//import { getUser } from "../../utility/firebase/crudOperations";
import { AUTH_TYPE } from "../consts/data";
import { APIContext } from "../../context/APIContext";

WebBrowser.maybeCompleteAuthSession();

const { height, width } = Dimensions.get('screen');

const LoginScreen = ({ navigation, action }) => {

  const [isRememberMe, setRememberMe] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false)
  const [promptAsync, signInWithGoogle] = useGoogleSSO(navigation)

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [validationRules] = useState({ email: 'required|email', password: 'required|minlength:6' });
  const [errors, setErrors] = useState({});
  const validator = new FormValidator();
  const state = useContext(APIContext);
  const { signIn } = state.userAuthAPI;


  const handleInputChange = (fieldName, value) => {
    setFormData(prevState => ({
      ...prevState,
      [fieldName]: value
    }));
  };

  const validateForm = () => {
    const isValid = validator.validateForm(formData, validationRules);
    if (!isValid) {
      setErrors(validator.errors);
      console.error("errors: ", JSON.stringify(validator.errors))
      return false;
    }
    // Form is valid, proceed with submission
    console.log('Form data:', formData);
    return true
  };

  const backendUserAuthentication = () => {
    setIsLoading(true)
    if (validateForm()) {
      console.log("form validation successful!: ",)
      signIn(formData).then(
        (data) => {
          console.log("data:", JSON.stringify(data))
          const user = {
            id: data.profile.id,
            email: data.profile.email,
            userType: data.profile.role,
            accessToken: data.profile.token,
            isLoggedIn: true,
            authProvider: AUTH_TYPE.INTERNAL
          }
          setUser(prev => ({ ...prev, user }))
          navigation.navigate("UserTypeScreen");
        },
        (error) => {
          console.error("Error:", error)
          setIsLoading(false)
        }
      )

    }
    else {
      console.log("form validation failed!")
    }


    setIsLoading(false)

  }

  const navigateSignUp = () => {
    // navigation.navigate("SignUpScreen");
    navigation.navigate("SSOSignUpScreen")
  };

  const handleLogin = () => {
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    // navigation.navigate("HomeScreen");
    // navigation.navigate("DashboardScreen");
    navigation.navigate("UserTypeScreen");
    //     console.log("Logged in with", user.email);
    //   })
    //   .catch((error) => alert(error.message));

    setUser({
      userId: "",
      hasRegistered: false
    })
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPasswordScreen");
  }


  const handleSSOLogin = async () => {
    // setIsLoading(true);
    AsyncStorage.removeItem('messages')
    await promptAsync();
    signInWithGoogle()
    // setIsLoading(false);
    // navigation.navigate("UserTypeScreen")
  }

  const onHandleFirebaseLogin = async () => {
    setIsLoading(true);

    // if (validateForm()) {
    //   await getUser(formData.email) //fetch user from firestore db for chat purpose
    //     .then(data => {
    //       console.log("firestore User :", JSON.stringify(firestoreDbUser))
    //       const firestoreDbUser = data;
    //       if (!firestoreDbUser) {
    //         Alert.alert("Please, do sign up!")
    //         setIsLoading(false)
    //         return;
    //       }

    //       handleFirebaseAuth(firestoreDbUser)


    //     }).catch(error => {
    //       console.error("Error:", error);
    //       setIsLoading(false);
    //       Alert.alert("Unable to Authenticate user, please retry!")
    //     })
    // } else {
    //   console.error("Form validation failed")
    //   setIsLoading(false);
    // }

  };


  const handleFirebaseAuth = (firestoreDbUser) => {
    // signInWithEmailAndPassword(auth, formData.email, formData.password)
    //   .then(
    //     async (res) => {
    //       //console.log("Login success:", res, " --- ", auth.currentUser);
    //       const userObj = firestoreDbUser;//await getUser(auth?.currentUser?.email) // fetching from firebase firestore for chat purpose 
    //       const newUser = {
    //         id: userObj._id, //auth?.currentUser?.uid,
    //         username: auth?.currentUser?.displayName === undefined ? null : auth?.currentUser?.displayName,
    //         picture: auth?.currentUser?.photoURL === undefined ? null : auth?.currentUser?.photoURL,
    //         email: auth?.currentUser?.email === undefined ? null : auth?.currentUser?.email,
    //         isLoggedIn: true,
    //         authProvider: AUTH_TYPE.FIREBASE
    //       }
    //       setUser((prev) => ({
    //         ...prev,
    //         ...newUser
    //       }));
    //       AsyncStorage.setItem("user", JSON.stringify(newUser))
    //       AsyncStorage.removeItem('messages')
    //       setIsLoading(false);
    //       navigation.navigate("UserTypeScreen")
    //     })
    //   .catch((err) => {
    //     console.error("Error:", err)
    //     Alert.alert("Network Error", "Unable to Authenticate user, please retry!", [{ text: 'Ok', onPress: () => { console.error("Error:") } }])
    //     setIsLoading(false);
    //   });

  }




  /** THis functions are for user's phone keyboard controls */
  const handleEmailSubmit = () => {
    // Do something with the email
    // For example, move focus to the password field
    passwordInput.focus();
  };

  const handlePasswordSubmit = () => {
    Keyboard.dismiss(); // Hide the keyboard
    // onHandleFirebaseLogin()
    // handleLogin()
    backendUserAuthentication()

  };




  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <StatusBar style='auto' backgroundColor="transparent" />
        <View style={styles.header}>
          <Image source={require('../../assets/logo.png')} style={{
            width: 90, height: 50,
            alignSelf: 'flex-end'
          }} />
        </View>

        <View style={styles.body}>
          <ScrollView
            nestedScrollEnabled={false}
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="interactive"
            style={{ width: '90%', borderWidth: 0, padding: 0 }}>

            <View style={{ alignItems: 'center', gap: 10 }}>
              <Pressable
                style={styles.fieldSet}
                onPress={() => { handleSSOLogin() }}>
                <View style={{
                  flexDirection: "row",
                  marginTop: 20, width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Image source={require('../../assets/logos_google-icon.png')} />
                  <Text style={{ textAlign: "center", fontWeight: "400", marginLeft: 10 }}>Login in with google </Text>
                </View>
              </Pressable>
              <Pressable style={styles.fieldSet2}>
                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: 'center' }}>
                  <Image source={require('../../assets/logos_facebook.png')} />
                  <Text style={{ textAlign: "center", fontWeight: "400", color: "white", marginLeft: 10 }}>
                    Login in with facebook </Text>
                </View>
              </Pressable>
            </View>

            <View style={{
              borderBottom: '1px solid rgba(0,0,0,0.2)',
              backgroundColor: 'rgba(0,0,0,0.4)',
              width: '80%',
              height: 1,
              position: 'relative',
              marginBottom: '10%',
              marginTop: '5%',
              marginLeft: 30
            }}>
              <Text style={{
                width: 'auto',
                textAlign: 'center',
                fontWeight: "300",
                fontSize: 12,
                left: '45%',
                position: 'absolute',
                top: -10,
                backgroundColor: 'white'
              }}>
                OR
              </Text>
            </View>



            <View style={styles.formContainer}>

              <View style={{ width: '100%', borderWidth: 0 }}>
                <View style={[styles.fieldSet, { justifyContent: 'center' }]}>
                  <Text style={styles.legend}>Email address</Text>
                  <TextInput
                    placeholder="Enter your Email address"
                    style={styles.input}
                    value={formData.email}
                    onChangeText={(text) => handleInputChange('email', text.trim())}
                    onFocus={() => { setErrors({}) }}

                    returnKeyType="next" // Change the return key to "Next"
                    onSubmitEditing={() => handleEmailSubmit()}
                  />
                </View>
                {errors.email && <Text style={{ color: 'red', fontSize: 10, borderWidth: 0, paddingHorizontal: 10 }}>{errors.email.join(', ')}</Text>}
              </View>

              <View style={{ width: '100%', borderWidth: 0 }}>
                <View style={[styles.fieldSet, { justifyContent: 'center' }]}>
                  <Text style={styles.legend}>Password</Text>
                  <View style={{ flexDirection: 'row', width: '90%' }}>
                    <TextInput
                      placeholder="Enter your Password"
                      style={[styles.input, { flex: 10, borderWidth: 0 }]}
                      secureTextEntry={!isPasswordVisible}
                      value={formData.password}
                      onFocus={() => { setErrors({}) }}
                      onChangeText={(text) => handleInputChange('password', text)}

                      ref={(input) => { passwordInput = input; }}
                      returnKeyType="go" // Change the return key to "Go"
                      onSubmitEditing={() => handlePasswordSubmit()}
                    />

                    {
                      isPasswordVisible ?
                        <Ionicons name="eye-outline" size={20} color="black"
                          onPress={() => setPasswordVisible(false)} style={{ marginTop: 20, flex: 1 }}
                        /> :
                        <Ionicons name="eye-off-outline" size={20} color="black"
                          onPress={() => setPasswordVisible(true)} style={{ marginTop: 20, flex: 1 }}
                        />
                    }
                  </View>
                </View>
                {errors.password && <Text style={{ color: 'red', fontSize: 10, borderWidth: 0, paddingHorizontal: 10 }}>{errors.password.join(', ')}</Text>}
              </View>

              <View style={styles.section}>
                <View style={styles.rememberMeForgotSection}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '45%'
                    }}
                  >
                    <Checkbox
                      style={styles.checkbox}
                      value={isRememberMe}
                      onValueChange={setRememberMe}
                    />
                    <Text style={styles.label}>Remember me</Text>
                  </View>

                  <Text
                    style={{ fontSize: 12, color: '#51BF8F', fontWeight: "400" }}
                    onPress={handleForgotPassword}
                  >
                    Forgot Password?
                  </Text>

                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '20%',
                  }}
                >
                  <Text style={{ marginHorizontal: 10, fontSize: 12 }}>Don{`${"'"}`}t have an account?</Text>
                  <Text
                    style={{ color: '#51BF8F', fontSize: 12 }}
                    onPress={() => navigateSignUp()}>
                    Sign Up
                  </Text>
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  containerStyle={{ width: '45%' }}
                  buttonStyle={styles.login}
                  onPress={() => handlePasswordSubmit()}
                  title="Login"
                  titleStyle={styles.buttonText}
                />
                <Button
                  containerStyle={{ width: '45%' }}
                  buttonStyle={[styles.back, styles.buttonOutline, { fontWeight: "200" }]}
                  onPress={() => navigateSignUp()}
                  title="Back"
                  titleStyle={[styles.buttonOutlineText, { fontWeight: "200" }]}
                />
              </View>

            </View>

          </ScrollView>
        </View>
      </View>

      {
        isLoading &&
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          height: height,//+ 2 * Constants.statusBarHeight,
          width: width,
          borderWidth: 0
        }}>
          <ActivityIndicator size="large" color="#00ff00" style={{ position: 'absolute', alignSelf: 'center' }} />
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "white",
    borderWidth: 0,
    padding: 0
  },
  content: {
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
    backgroundColor: "white",
    padding: 0,
    borderWidth: 0,
    flex: 1
  },
  header: {
    width: "90%",
    // marginBottom: "3%",
    //marginTop: 10,
    borderWidth: 0,
    flex: 1
  },
  body: {
    flex: 10,
    borderWidth: 0,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },


  fieldSet: {
    marginTop: 0,
    paddingHorizontal: 0,
    paddingBottom: 0,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,0.2)',
    height: 70,
    width: '100%'

  },
  fieldSet2: {
    backgroundColor: '#1977F2',
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 0,
    paddingBottom: 0,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,0.2)',
    height: 70,
    width: '100%'
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    // fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: '#FFF'
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    color: 'black',
    //marginLeft:5
  },
  section: {
    // flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '80%',
  },
  rememberMeForgotSection: {
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    borderWidth: 0,
  },
  checkbox: {
    borderColor: 'rgba(0,0,0,0.2)'
  },
  formContainer: {
    // marginTop:'20%',
    width: "100%",
    alignItems: 'center',
    gap: 10
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    borderColor: "green",
    borderWidth: 0,
    width: '90%',
    fontSize: 12
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "space-between",
    // alignItems: "center",
    marginTop: 25,
    flexDirection: 'row',
    padding: 0,
  },
  login: {
    backgroundColor: "#4FC58B",
    //width: "40%",
    borderRadius: 20,
    //alignItems: "center",
    // marginLeft:20
  },
  back: {
    // width: "40%",
    borderRadius: 20,
    //alignItems:"end",
    // marginRight:'20%'
    // backgroundColor: "#4FC58B" 
  },
  buttonOutline: {
    backgroundColor: "white",
    borderColor: "#4FC58B",
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: "100",
    fontSize: 14,
  },
  buttonOutlineText: {
    color: "black",
    fontSize: 14,
    // fontWeight: "100",
  },
});

export default LoginScreen;
