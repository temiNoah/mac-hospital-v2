import React, { useState } from "react";
import {
  StyleSheet, View, Text, TextInput, Image, Button, ScrollView, Alert, Pressable,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
//import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Colors from '../consts/Colors'
import { defaultStyles } from "../consts/Styles";
import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';
import CustomButton from "../subcomponents/CustomButton"
import { RadioButton } from 'react-native-paper';
import uuid from 'react-native-uuid';
import { AUTH_TYPE, USER_TYPE } from "../consts/data";
import FormValidator from "../../utility/FormValidator";
//import { Create } from "../../utility/firebase/crudOperations";
//import hashPassword from "../../utility/HashFunction";

export default function SSOSignUpScreen({ navigation }) {
  const data = {
    name: "", email: "", phoneNumber: "", password: "", confirmPassword: "", userType: "", avatar: ""
  }
  const [form, setForm] = useState({ ...data });
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [userType, setUserType] = useState('');
  const [validationRules] = useState({
    email: 'required|email',
    password: 'required|minlength:6',
    confirmPassword: 'required|minlength:6',
    phoneNumber: 'required|minlength:6',
    name: 'required',
    userType: 'required'
  });
  const [errors, setErrors] = useState([]);
  const validator = new FormValidator();
  const [authProvider, setAuthProvider] = useState(null);

  /***  */
  const handleChange = (value, name) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    // delete formError[name];
  };

  const validateForm = () => {
    const isValid = validator.validateForm(form, validationRules);
    if (!isValid) {
      setErrors(validator.errors);
      console.error("errors: ", JSON.stringify(validator.errors))
      return false;
    }
    // Form is valid, proceed with submission
    console.log('Form data:', form);
    return true
  };

  const handleSubmit = () => {
    //Alert.alert(JSON.stringify(form));
    if (form.password !== form.confirmPassword) {
      setErrors(prev => (prev.push({ "password": "password is not equal to confirm password" })))
      // Alert.alert("")
      return
    }
    form.userType = userType
    console.log("User data: ", form)
    if (validateForm()) {
      createUser(form);
      handleSubmitToFirebase(form.email, form.password)
    }

  }

  const handleSubmitToFirebase = async (email, password) => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password,);
      const user = userCredential.user;
      setAuthProvider(AUTH_TYPE.FIREBASE)
      console.log('User signed up:', user);
      Alert.alert("Successfully created")
      setForm({})
      setUserType('')

    } catch (error) {
      console.error(error.message);
      Alert.alert(error.message)
    }
  }

  const createUser = (form) => {

    const id = uuid.v4();;
    console.log("user id :", id)
    //create the user and return
    const userData = {
      _id: id,//context.user.id,//auth.currentUser.uid,
      avatar: form.avatar,
      backgroundColor: 'rgba(0,255,0,0.7)',
      name: form.name,
      userType: form.userType,
      createdAt: new Date(),
      email: form.email,
      authProvider: authProvider
    }

    const newUserObj = Create("users", id, userData)
      .then((data) => {
        console.log("Created user on User\'s table");
      }
      ).catch((error) => {
        console.error("Error:", error)
      })

  }

  const handleBack = () => {
    navigation.navigate("LoginScreen")
  }

  return (
    <View style={defaultStyles.container}>
      <View style={styles.content}>
        <StatusBar style='auto' backgroundColor="transparent" />
        <View style={styles.header}>
          <Image source={require('../../assets/logo.png')}
            style={{ width: 90, height: 50, alignSelf: 'flex-end' }} />
        </View>

        <View style={styles.body}>

          <ScrollView
            nestedScrollEnabled={false} showsVerticalScrollIndicator={false} style={styles.form}>
            <Pressable style={styles.fieldSet}>
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Image source={require('../../assets/logos_google-icon.png')} />
                <Text
                  style={{ textAlign: "center", fontWeight: "400", marginLeft: 10 }}>
                  Sign up with google </Text>
              </View>
            </Pressable>
            <Pressable style={styles.fieldSet2}>
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Image source={require('../../assets/logos_facebook.png')} />
                <Text style={{ textAlign: "center", fontWeight: "400", color: "white", marginLeft: 10 }}>Sign up with facebook </Text>
              </View>
            </Pressable>

            <View style={{
              borderBottom: '1px solid rgba(0,0,0,0.2)',
              backgroundColor: 'rgba(0,0,0,0.4)',
              width: '80%',
              height: 1,
              position: 'relative',
              // marginBottom: '10%',
              // marginTop: '5%',
              alignSelf: "center",
              marginVertical: "5%"
              //marginLeft:30
            }}>
              <Text style={{
                width: 'auto',
                textAlign: 'center',
                fontWeight: "300",
                fontSize: 12,
                left: '45%',
                position: 'absolute',
                top: -10,
                backgroundColor: "white"
              }}>
                OR
              </Text>
            </View>

            <View style={{ flex: 1, position: 'relative', zIndex: 3, marginBottom: 10 }}>
              <View style={[styles.fieldSet, { justifyContent: 'center' }]}>
                <Text style={styles.legend}>Name</Text>
                <TextInput
                  placeholder="First and Last name"
                  style={styles.input}
                  value={form.name}
                  onFocus={() => setErrors({})}
                  onChangeText={(text) => handleChange(text, "name")}
                />
              </View>
              {errors.name && <Text style={{ color: 'red', fontSize: 10, borderWidth: 0, paddingHorizontal: 30 }}>{errors.name.join(', ')}</Text>}
            </View>

            <View style={{ flex: 1, position: 'relative', zIndex: 2, marginBottom: 10 }}>
              <View style={styles.fieldSet}>
                <Text style={styles.legend}>Email</Text>
                <TextInput
                  placeholder="Enter your email address"
                  style={styles.input}
                  value={form.email}
                  onFocus={() => setErrors({})}
                  onChangeText={(text) => handleChange(text, "email")}
                />
              </View>
              {errors.email && <Text style={{ color: 'red', fontSize: 10, borderWidth: 0, paddingHorizontal: 30 }}>{errors.email.join(', ')}</Text>}
            </View>

            <View style={{ flex: 1, position: 'relative', marginBottom: 10 }}>
              <View style={styles.fieldSet}>
                <Text style={styles.legend}>Phone</Text>
                <TextInput
                  keyboardType='numeric'
                  placeholder="Enter your phone number"
                  style={styles.input}
                  value={form.phoneNumber}
                  onFocus={() => setErrors({})}
                  onChangeText={(text) => handleChange(text, "phoneNumber")}
                />
              </View>
              {errors.phoneNumber && <Text style={{ color: 'red', fontSize: 10, borderWidth: 0, paddingHorizontal: 30 }}>{errors.phoneNumber.join(', ')}</Text>}
            </View>

            <View style={{ flex: 1, position: 'relative', marginBottom: 10 }}>
              <View style={[styles.fieldSet, { gap: 5, borderWidth: 1, flexDirection: 'row' }]}>
                <Text style={styles.legend}>Password</Text>
                <TextInput
                  placeholder=""
                  style={[styles.input, { flex: 10, borderWidth: 0 }]}
                  secureTextEntry={!isPasswordVisible}
                  value={form.password}
                  onFocus={() => setErrors({})}
                  onChangeText={(text) => handleChange(text, "password")}
                />
                {
                  isPasswordVisible ?
                    <Ionicons name="eye-outline" size={20} color="black"
                      onPress={() => setPasswordVisible(false)} style={{ marginTop: 10, flex: 1 }}
                    /> :
                    <Ionicons name="eye-off-outline" size={20} color="black"
                      onPress={() => setPasswordVisible(true)} style={{ marginTop: 10, flex: 1 }}
                    />
                }
              </View>
              {errors.password && <Text style={{ color: 'red', fontSize: 10, borderWidth: 0, paddingHorizontal: 30 }}>{errors.password.join(', ')}</Text>}
            </View>

            <View style={{ flex: 1, position: 'relative', marginBottom: 10 }}>
              <View style={[styles.fieldSet, { gap: 5, borderWidth: 1, flexDirection: 'row' }]}>
                <Text style={styles.legend}>Confirm Password</Text>
                <TextInput
                  placeholder=""
                  style={[styles.input, { flex: 10, borderWidth: 0 }]}
                  secureTextEntry={!isPasswordVisible}
                  value={form.confirmPassword}
                  onFocus={() => setErrors({})}
                  onChangeText={(text) => handleChange(text, "confirmPassword")}
                />
                {
                  isPasswordVisible ?
                    <Ionicons name="eye-outline" size={20} color="black"
                      onPress={() => setPasswordVisible(false)} style={{ marginTop: 10, flex: 1 }}
                    /> :
                    <Ionicons name="eye-off-outline" size={20} color="black"
                      onPress={() => setPasswordVisible(true)} style={{ marginTop: 10, flex: 1 }}
                    />
                }
              </View>
              {errors.confirmPassword && <Text style={{ color: 'red', fontSize: 10, borderWidth: 0, paddingHorizontal: 30 }}>{errors.confirmPassword.join(', ')}</Text>}
            </View>

            <View style={{ flex: 1, position: 'relative', marginBottom: 10 }}>
              <View style={[styles.fieldSet, { gap: 5, borderWidth: 1, flexDirection: 'row' }]}>
                <Text style={styles.legend}>User Type</Text>
                <View style={{ flexDirection: 'row', gap: 20, paddingHorizontal: 100 }}>
                  <View style={styles.section}>
                    <Text style={styles.paragraph}>Doctor</Text>
                    <RadioButton
                      value={USER_TYPE.DOCTOR}
                      status={userType === 'doctor' ? 'checked' : 'unchecked'}
                      color='#4FC48B'
                      onPress={() => setUserType(USER_TYPE.DOCTOR)}
                    />
                  </View>
                  <View style={styles.section}>
                    <Text style={styles.paragraph}>Client</Text>
                    <RadioButton
                      value={USER_TYPE.CLIENT}
                      status={userType === 'client' ? 'checked' : 'unchecked'}
                      color='#4FC48B'
                      onPress={() => setUserType(USER_TYPE.CLIENT)}
                      theme={{ width: 20 }}
                    />
                  </View>
                </View>
              </View>
              {errors.userType && <Text style={{ color: 'red', fontSize: 10, borderWidth: 0, paddingHorizontal: 30 }}>{errors.userType.join(', ')}</Text>}
            </View>

            <View style={{ flexDirection: "row", gap: 10, borderWidth: 0, padding: 20 }}>
              <Text style={{ fontSize: 12, fontWeight: "400" }}>{"Already have an account?"}</Text>
              <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                <Text style={{ color: '#A9DEC7' }}>{"Login"}</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1, borderWidth: 0, justifyContent: "center", alignItems: "center" }}>
              <CustomButton text={"Sign up"} action={() => { handleSubmit() }} isBgTransparent={false} style={{ width: 200 }} />
            </View>
          </ScrollView>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: Constants.statusBarHeight,
    //alignItems: 'center',
    backgroundColor: "white",
    padding: 0,
    borderWidth: 0,
    flex: 1
  },
  header: {
    flex: 1,
    borderWidth: 0,
    width: "90%",
  },
  body: {
    flex: 10,
    borderWidth: 0,
    width: "100%",
    //justifyContent: "center",
    //alignItems: "center"
  },
  form: {
    flexDirection: "column",
    borderWidth: 0,
    height: "85%",
    backgroundColor: "white",
    flex: 1
  },
  fieldSet: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 0,
    paddingBottom: 0,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,0.1)',
    height: 60,
    flex: 1

  },
  fieldSet2: {
    backgroundColor: '#1977F2',
    marginTop: 5,
    marginBottom: "5%",
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 0,
    paddingBottom: 0,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,0.1)',
    height: 60,
  },
  legend: {
    position: 'absolute',
    top: -10,
    left: 10,
    // fontWeight: 'bold',
    fontSize: 12,
    backgroundColor: '#FFF'
  },
  input: {
    //backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 20,
    marginTop: 10,
    // borderColor: "green",
    borderWidth: 0,
    width: "99%",
    height: "70%",
    fontSize: 12

  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    //borderRadius:20,
  },
  button: {
    width: 150,
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 20,
    padding: 10,
    borderColor: "#4FC48B",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    color: "white"
  },
  section: {
    flexDirection: "row",
    borderWidth: 0
  },
  paragraph: {
    fontSize: 12,
    borderWidth: 0,
    textAlign: 'center',
    paddingVertical: 8
  }
  // buttonOutlineText: {
  //   color: "black", 
  //   fontSize: 16,
  //   fontWeight: "700",
  // },

});

