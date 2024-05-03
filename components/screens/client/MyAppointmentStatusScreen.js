import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, Pressable, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../subcomponents/Card';
import { departs } from '../../consts/Doctor'
import { approvedAppointment, pendingAppointment } from "../../consts/Doctor";
import AppointmentSection from "../../subcomponents/AppointmentSection";


export default function MyAppointmentStatusScreen({ navigation, title, name, message }) {
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', width: "100%" }}>
                <TouchableOpacity onPress={() => navigation.navigate('ClientDashboardScreen')}>
                    <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={{ width: '90%', textAlign: 'center', fontSize: 15 }}>My Appointment</Text>
            </View>

            <View style={{ marginTop: "10%", borderWidth: 0 }}>
                <View>
                    <Text>
                        {"From : Dr Mac"}
                    </Text>
                </View>

                <View>
                    <Text>{message}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        padding: 20
    }
})