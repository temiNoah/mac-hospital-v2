import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image, Pressable, Alert
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { defaultStyles } from '../../consts/Styles'
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

export default function AppointmentScreen({ navigation }) {
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false)


  const handleSubmit = () => {
    Alert.alert("reset");
  }
  return (
    <View style={defaultStyles.container}>
      <View style={styles.content}>
        <StatusBar style="auto" backgroundColor="transparent" />
        <View style={styles.header}>
          <Text>{"Appointment"}</Text>
        </View>

        <View style={styles.body}>
          <View style={{ justifyContent: "center", alignItems: "center", gap: 20, paddingVertical: 30 }}>
            <View style={{ justifyContent: "center", alignItems: 'center', }} >
              <LinearGradient
                colors={['#4FC48B', '#298582']}
                style={styles.button}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
              >
                <Text style={styles.buttonText} >My Appointment</Text>
                <TouchableOpacity onPress={() => navigation.navigate('MyAppointmentsScreen')} >
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
              </LinearGradient>

            </View>

            <View style={{ justifyContent: "center", alignItems: 'center', }} >
              <LinearGradient
                colors={['#4FC48B', '#298582']}
                style={styles.button}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
              >

                <Text style={styles.buttonText} >Make Appointment</Text>
                <TouchableOpacity onPress={() => navigation.navigate('MakeAppointmentScreen')}>
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
              </LinearGradient>

            </View>

            <View style={{ justifyContent: "center", alignItems: 'center', }} >
              <LinearGradient
                colors={['#4FC48B', '#298582']}
                style={styles.button}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
              >

                <Text style={styles.buttonText} >Give Feedback</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('FeedbackScreen')}
                  style={{ marginLeft: 20 }}>
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
              </LinearGradient>

            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "white",
  //   //marginTop: "10%",
  //   borderWidth: 0
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
  button: {
    width: 350,
    borderWidth: 1,
    borderRadius: 20,
    // margin:'60%',
    padding: 10,
    borderColor: "#4FC48B",
    justifyContent: 'space-around',
    flexDirection: 'row',

  },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
    color: "white"
  },
})