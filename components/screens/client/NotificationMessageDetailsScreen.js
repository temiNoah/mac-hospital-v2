import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image, Pressable,
  TextInput
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { SearchBar } from "react-native-elements";
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import NotificationMessageSection from '../../subcomponents/NotificationMessageSection'
import { messages } from '../../consts/Doctor'


export default function NotificationMessageDetailsScreen({ navigation, body, date }) {
  const [message, setMessage] = useState("");

  const handleChange = (value, name) => {

  };

  const handleSubmit = () => {
    //ToastAndroid.show(JSON.stringify(form), ToastAndroid.SHORT);
  }
  const handleBack = () => {
    // navigation.navigate("NotificationMessageScreen")
  }

  return (
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between'
      }}>

        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationScreen')}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.header}>
          <View style={{
            borderRadius: 45, width: 35, height: 35, borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'center', backgroundColor: '#CDDDCB'
          }}>
            <MaterialIcons name="mail-outline" size={24} color="black" />
          </View>
          <Text
            style={{ width: '90%', textAlign: 'center', fontSize: 12 }}>
            {"Sender"}
          </Text>
          <Text
            style={{ width: '90%', textAlign: 'center', fontSize: 12 }}>
            {date}
          </Text>
        </View>
      </View>


      <View>
        <TextInput
          placeholder="Type in anything"
          style={styles.input}
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
      </View>

      <View style={styles.buttonGroup}>
        <LinearGradient
          colors={['transparent', 'transparent']}
          style={styles.button}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Pressable onPress={() => handleSubmit()}>
            <Text style={styles.buttonText}>{"Reply"}</Text>
          </Pressable>
        </LinearGradient>
        <LinearGradient
          colors={['transparent', 'transparent']}
          style={styles.button}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Pressable onPress={() => handleBack()}>
            <Text style={styles.buttonText}>{"Forward"}</Text>
          </Pressable>
        </LinearGradient>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 30
  },
  header: {
    flexDirection: 'column',
    width: '90%',
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: "white",
    // paddingHorizontal: 15,
    // paddingVertical: 10,
    borderRadius: 20,
    marginTop: 10,
    borderColor: "green",
    borderWidth: 0,
    fontSize: 15,
    height: 100
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "60%",
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
    fontWeight: "400",
    fontSize: 15,
    textAlign: "center",
    color: "black"
  },
})