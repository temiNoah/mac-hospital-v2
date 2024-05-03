
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
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { defaultStyles } from '../../consts/Styles'

export default function DoctorNotificationScreen({ navigation }) {
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
          <Text>{"Notification"}</Text>
        </View>

        <View style={styles.body}>
          <View style={{ justifyContent: "center", alignItems: "center", gap: 30, paddingVertical: 30 }}>
            <View style={{ justifyContent: "center", alignItems: 'center' }} >

              <LinearGradient
                colors={['#4FC48B', '#298582']}
                style={styles.button}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
              >

                <Text style={styles.buttonText} >Messages</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DoctorNotificationMessageScreen')} >
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
              </LinearGradient>

            </View>

            <View
              style={{ justifyContent: "center", alignItems: 'center' }} >
              <LinearGradient
                colors={['#4FC48B', '#298582']}
                style={styles.button}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
              >

                <Text style={styles.buttonText} >{"Appointment"}</Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Appointment')}
                  style={{ marginLeft: 0 }}>
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
              </LinearGradient>

            </View>


            <View style={{ justifyContent: "center", alignItems: 'center' }} >
              <LinearGradient
                colors={['#4FC48B', '#298582']}
                style={styles.button}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
              >

                <Text style={styles.buttonText} >{"News Letter"}</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DoctorNotificationNewsLetterScreen')}>
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
  //   marginTop: 30
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
    paddingHorizontal: 20,
  },
  body: {
    flex: 20,
    padding: 40,
    borderWidth: 0,
    alignItems: 'center'

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
    //textAlign:"center",
    color: "white",
    width: 150,
    borderWidth: 0,

  },
})