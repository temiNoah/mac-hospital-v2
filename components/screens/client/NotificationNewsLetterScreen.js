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
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { defaultStyles } from "../../consts/Styles";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

export default function NotificationNewsLetterScreen({ navigation }) {
  const [message, setMessage] = useState("")
  return (
    <View style={defaultStyles.container}>
      <View style={styles.content}>
        <StatusBar style="auto" backgroundColor="transparent" />
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ClientDashboardScreen')}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{ width: '90%', textAlign: 'center', fontSize: 15 }} >
            News Letter
          </Text>
        </View>
        <View style={styles.body}>
          <View style={{ borderWidth: 0 }}>
            <TextInput
              placeholder="Type in anything"
              style={styles.input}
              value={message}
              onChangeText={(text) => setMessage(text)}
              multiline={true}
              numberOfLines={4}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // container:{
  //    marginTop : 40,
  //    marginLeft:20,
  //    marginRight:20,
  //    padding:0
  // },
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
  },
  body: {
    justifyContent: 'space-between',
    flex: 20,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "white",
    // paddingHorizontal: 15,
    // paddingVertical: 10,
    borderRadius: 20,
    borderColor: "green",
    borderWidth: 1,
    fontSize: 20,
    height: "90%",
    flexWrap: 'wrap',
    textAlignVertical: 'top',
    padding: 10


  }
});