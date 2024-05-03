import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image, Pressable
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'
import { getDateParts, getMonthName } from '../../utility/dateTimeFormatter'
import { name_colors, name_colors_v2, faint_name_colors_v2 } from '../consts/Colors'


export default function AppointmentSection({ navigation, appointment, index, type }) {
  // const colors = ["#4695FC", "#FF4FBD", "#FFAF4F"]
  // const faintedColors = ["rgba(70, 149, 252, 0.2)",
  //   "rgba(255, 79, 189, 0.5)",
  //   "rgba(255, 175, 79, 0.5)"
  // ];
  // let min = 0
  // let max = colors.length - 1;
  // var randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
  const { day, month } = getDateParts(appointment.date);

  const str = new String(appointment.firstname)
  const firstLetterOfFirstName = str.length > 0 ? str.charAt(0) : '';
  return (
    <View style={{ flex: 1, borderWidth: 0, marginBottom: 25 }}>
      <ScrollView horizontal={true}
        nestedScrollEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        // style={styles.container}
        contentContainerStyle={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20
        }}
      >
        <View
          style={{
            width: 60,
            height: 60,
            padding: 10,
            backgroundColor: `${type != "pendingAppointment" ? name_colors_v2[firstLetterOfFirstName] : '#E8E9EC'}`,
            borderRadius: 20
          }}>
          <Text
            style={{
              fontSize: 12, fontWeight: '500',
              color: `${type == "pendingAppointment" ? 'black' : 'white'}`,
              textAlign: 'center'
            }}>
            {day}</Text>
          <Text style={{
            textAlign: 'center', fontSize: 13,
            color: `${type == "pendingAppointment" ? 'black' : 'white'}`
          }}
            numberOfLines={3} ellipsizeMode="tail"
          >{getMonthName(month)}</Text>
        </View>


        <View style={{ marginHorizontal: 30 }}>
          {
            appointment.firstname &&
            <Text style={{ fontSize: 14, fontWeight: '400' }}>
              {appointment.title}. {appointment.firstname}
            </Text>
          }
          <Text style={{ fontSize: 12 }}>{appointment.subject}</Text>
          <Text style={{ fontSize: 12, fontWeight: '300' }}>{appointment.time}</Text>
        </View>


        {type == "approvedAppointment" ?
          <View style={{
            width: 30, height: 30, borderRadius: 100,
            backgroundColor: `${faint_name_colors_v2[firstLetterOfFirstName]}`,
            justifyContent: 'center', alignContent: 'center'
          }}>
            <Ionicons name="call" size={20} color={'white'} style={{ textAlign: 'center', }} />
          </View>

          :
          <View style={{
            width: 30, height: 30, borderRadius: 100,
            backgroundColor: 'transparent',
            justifyContent: 'center', alignContent: 'center'
          }}></View>
        }
      </ScrollView>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    // margin: 0,
    // padding: 5,
    // flexDirection: "row",
    // borderWidth: 1,
    // gap: 20

  }
})