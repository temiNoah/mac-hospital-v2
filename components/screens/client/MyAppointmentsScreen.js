import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, Pressable, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../subcomponents/Card';
import { departs } from '../../consts/Doctor'
import { approvedAppointment, pendingAppointment } from "../../consts/Doctor";
import AppointmentSection from "../../subcomponents/AppointmentSection";
import { defaultStyles } from '../../consts/Styles'
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";


export default function MyAppointmentScreen({ navigation }) {

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const { width } = Dimensions.get("screen");
  const cardWidth = width / 2.0;// 1.9;

  const FlatListHeader = () => {
    return (
      <View style={styles.section1}>
        <View style={{ paddingVertical: 10, width: '80%', margin: 20, alignSelf: 'center', flex: 2, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.1)' }}>
          <Text style={{ fontFamily: 'RobotoBold', textAlign: 'center' }}>{"Approved Appointment"}</Text>
        </View>
        <View style={{ flex: 20, borderWidth: 0 }}>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={approvedAppointment}
            contentContainerStyle={{
              display: 'flex',
              paddingVertical: 10, padding: 0, width: "100%", borderWidth: 0, flex: 0
            }}
            renderItem={({ item, index }) => {
              return <TouchableOpacity
                index={index}
              >
                <AppointmentSection
                  appointment={item} index={index} type={"approvedAppointment"} />
              </TouchableOpacity>
            }}
          />
        </View>
      </View>
    )
  }

  const FlatListFooter = () => {
    return (
      <View style={styles.section2}>
        <View style={{ paddingVertical: 10, width: '80%', margin: 20, alignSelf: 'center', flex: 2, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.1)' }}>
          <Text style={{ fontFamily: 'RobotoBold', textAlign: 'center' }}>
            {"Pending Appointment"}
          </Text>
        </View>
        <View style={{ flex: 20 }}>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={pendingAppointment}
            contentContainerStyle={{ paddingVertical: 0, padding: 0, width: "100%", flex: 0 }}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                //disabled={activeCardIndex != index}
                activeOpacity={1}
                onPress={() => navigation.navigate("AppointmentDetailsScreen", item)}
                index={index}
              >
                <AppointmentSection
                  appointment={item} index={index} type={"pendingAppointment"} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={defaultStyles.container}>
      <View style={styles.content}>
        <StatusBar style="auto" backgroundColor="transparent" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ClientDashboardScreen')}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ width: '90%', textAlign: 'center', fontSize: 12 }}>My Appointment</Text>
        </View>

        <View style={styles.body}>
          <FlatList
            ListHeaderComponent={FlatListHeader}
            ListFooterComponent={FlatListFooter}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 20, width: "100%", gap: 20, marginBottom: 0, borderWidth: 0
            }}
          //data={[{ title: "", key: 1 }]}
          //list
          //renderItem={} 
          />
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
    justifyContent: 'space-between',
    flex: 20,
    paddingHorizontal: 20,
    borderWidth: 0,
    gap: 10
  },
  section1: {
    backgroundColor: '#FBFEFC',
    borderRadius: 30,
    padding: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 1, // Required for Android
    width: "100%",
    marginTop: 0,
    border: 1,
    flex: 1
  },
  section2: {
    backgroundColor: '#F7FFFC',
    borderRadius: 30,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 1, // Required for Android
    width: "100%",
    //height: 350,
    margin: 0,
    border: 1,
    flex: 1
  }
})