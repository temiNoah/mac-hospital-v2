import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, Alert, Pressable, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../subcomponents/Card2';
import { categories } from '../../consts/Doctor'
// import { Calendar } from 'react-native-calendars';
import CustomCalendar from '../../subcomponents/CustomCalendar'
import { defaultStyles } from '../../consts/Styles'
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import CustomButton from '../../subcomponents/CustomButton'


export default function FeebbackScreen({ navigation }) {
  const data = {
    question1: "", question2: "", question3: ""
  }
  const [form, setForm] = useState(data);
  const [isDisabled, setIsDisabled] = useState(false)



  const handleChange = (value, name) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    // delete formError[name];
  };

  const handleSubmit = () => {
    // Alert.alert(JSON.stringify(form));
    navigation.navigate('FeedbackResultScreen')
  }
  const handleBack = () => {
    navigation.navigate("LoginScreen")
  }
  return (
    <View style={defaultStyles.container}>
      <View style={styles.content}>
        <StatusBar style="auto" backgroundColor="transparent" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ClientDashboardScreen')}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ width: '90%', textAlign: 'center', fontSize: 12 }}>Feeback</Text>
        </View>

        <View style={styles.body}>
          <View style={{ margin: 0, justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text style={{ fontFamily: 'ZillaSlab' }}>{"Kindly tell us about your experience"}</Text>
          </View>

          <View style={{ flex: 6, gap: 0 }}>
            <View style={styles.fields}>
              <Text style={styles.caption}>{"Was your question(s) answered?"}</Text>
              <TextInput
                placeholder="Type in anything"
                style={styles.input}
                value={form.mobile}
                onChangeText={(text) => handleChange(text, "question1")}
                name="question1"
              />
            </View>
            <View style={styles.fields}>
              <Text style={styles.caption}>{"Did you get solution to your challenge(s)?"}</Text>
              <TextInput
                placeholder="Type in anything"
                style={styles.input}
                value={form.mobile}
                onChangeText={(text) => handleChange(text, "question2")}
                name="question2"
              />
            </View>
            <View style={styles.fields}>
              <Text style={styles.caption}>{"Would you like to talk to another doctor?"}</Text>
              <TextInput
                placeholder="Type in anything"
                style={styles.input}
                value={form.mobile}
                onChangeText={(text) => handleChange(text, "question3")}
                name="question3"
              />
            </View>

          </View>

          <View style={{ flex: 3, borderWidth: 0, justifyContent: "center" }}>
            <CustomButton text={"Save and Continue"} action={() => handleSubmit()} isBgTransparent={false} style={{ width: 200 }} />
          </View>

          {/* <View style={{ justifyContent: "center", alignItems: 'center', flex: 1, borderWidth: 1 }} >
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
          </View> */}


        </View>

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
  fields: {
    borderWidth: 0,
    width: "100%",
    padding: 0,
    margin: 0,
    flex: 1,
    gap: 10
  },
  caption: {
    flex: 0
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    // paddingVertical: 10,
    borderRadius: 20,
    marginTop: 0,
    borderColor: "green",
    borderWidth: 1,
    fontSize: 15,
    height: "40%",
    flex: 0
  },
  button: {
    width: 300,
    borderWidth: 0,
    borderRadius: 20,
    margin: '20%',
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