import React, { useState } from "react";
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
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';


export default function GOPDScreen({ navigation }) {
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false)


  const handleSubmit = () => {
    Alert.alert("reset");
  }
  return (
    <View style={styles.containers}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ width: '60%', textAlign: 'center', fontSize: 20 }}>GOPD</Text>
      </View>


      <View style={{ padding: 30, width: '90%', borderWidth: 0 }}>
        <View style={{ marginVertical: '10%', alignItems: 'center', width: '100%' }}>
          <Text style={{ fontSize: 15, width: '100%', }}>
            Kindly tell us what you feel briefly
          </Text>
        </View>

        <View style={{ borderWidth: 0 }}>
          <TextInput
            placeholder="Type in anything"
            style={styles.input}
            value={message}
            onChangeText={(text) => setMessage(text)}
          />
        </View>

        <View style={{ justifyContent: "center", alignItems: 'center' }} >
          <LinearGradient
            colors={['#4FC48B', '#298582']}
            style={styles.button}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          >
            <Pressable onPress={handleSubmit} disabled={isDisabled}>
              <Text style={styles.buttonText} >Send</Text>
            </Pressable>
          </LinearGradient>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containers: {
    margin: 30,
    //padding: 10,
    width: '100%'
  },
  input: {
    backgroundColor: "white",
    // paddingHorizontal: 15,
    // paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
    borderColor: "green",
    borderWidth: 0,
    fontSize: 20,
    height: 300
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