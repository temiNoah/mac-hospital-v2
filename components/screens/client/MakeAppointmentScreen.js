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



export default function MakeAppointmentScreen({ navigation }) {
  const [isSelected, setIsSelected] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false)
  const [department, setDepartment] = useState(categories);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const { width } = Dimensions.get("screen");
  const cardWidth = width / 2.0;// 1.9;


  const handleSubmit = () => {
    Alert.alert("reset");
  }

  const customTheme = {
    calendarBackground: 'white',
    textSectionTitleColor: 'black',
    dayTextColor: 'black',
    todayTextColor: 'blue',
    selectedDayTextColor: 'white',
    selectedDayBackgroundColor: 'green',
    arrowColor: 'orange',
    monthTextColor: '#298582',
    // textDayFontFamily: 'Arial',
    // textMonthFontFamily: 'Arial',
    // textDayHeaderFontFamily: 'Arial',
    textDayFontSize: 16,
    textMonthFontSize: 20,
    textDayHeaderFontSize: 14,
  };

  return (
    <View style={defaultStyles.container}>
      <View style={styles.content}>
        <StatusBar style="auto" backgroundColor="transparent" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ClientDashboardScreen')}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ width: '90%', textAlign: 'center', fontSize: 12 }}>Make Appointment</Text>
        </View>

        <View style={styles.body}>
          <View style={{ flex: 2 }}>
            <View style={{ alignItems: 'center', width: '100%' }}>
              <Text style={{ fontSize: 15, width: '100%', }}>
                Categories
              </Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={department}
              contentContainerStyle={{ paddingVertical: 0, padding: 0 }}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  disabled={activeCardIndex != index}
                  activeOpacity={1}
                // onPress={() => navigation.navigate("Booking", item)}
                >
                  <Card doctor={item} index={index} />
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={{ flex: 4, borderWidth: 0 }}>
            <Text style={{ margin: 10 }}>Schedules</Text>
            <View>
              <CustomCalendar theme={customTheme} style={{
                height: 100,
                padding: 0,
              }} />
            </View>
          </View>

          <View style={{ flex: 1, borderWidth: 0, justifyContent: "center" }}>
            <Text style={{ margin: 0 }}>{"Available Time"}</Text>
            <View style={[styles.shadowProp, styles.timeContainer]}>
              <Ionicons name="time-outline" size={24} color="black" />
              <View style={{}}><Text>{"9:00am"}</Text></View>
            </View>
          </View>

          <View style={{ flex: 1, borderWidth: 0, justifyContent: "center" }}>
            <CustomButton text={"Save"} action={() => handleSubmit()} isBgTransparent={false} style={{ width: 200 }} />
          </View>

        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({

  content: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  body: {
    padding: 0,
    width: '100%',
    borderWidth: 0,
    flex: 20,
    paddingHorizontal: 20,
    gap: 10
  },
  timeContainer: {
    flexDirection: 'row',
    borderWidth: 0,
    borderRadius: 10,
    gap: 5,
    alignItems: "center",
    padding: 5,
    width: 120,
    height: 45,
    elevation: 5,
    backgroundColor: 'white',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
})