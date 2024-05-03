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
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons'
import { defaultStyles } from '../../consts/Styles'
import { fontFamily } from '../../consts/Fonts'
import { altColors } from '../../consts/Colors'
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

export default function AppointmentDetailsScreen({ navigation, title = "", body = "" }) {

    return (
        <View style={defaultStyles.container}>
            <View style={styles.content}>
                <StatusBar style="auto" backgroundColor="transparent" />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('MyAppointmentScreen')}>
                        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ width: '90%', textAlign: 'center', fontSize: 12 }}>
                        {"Appointment Details"}
                    </Text>
                </View>

                <View style=
                    {styles.body}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontFamily: fontFamily.merriweatherBold }}>{title}</Text>
                    </View>

                    <View style={{ width: '100%', height: '70%', borderWidth: 0, borderRadius: 15, flex: 10 }}>
                        <Text style={{
                            flex: 1, backgroundColor: '#FFF',
                            fontFamily: fontFamily.merriweatherRegular,
                            fontSize: 20,
                            height: "90%",
                            flexWrap: 'wrap',
                            textAlignVertical: 'top',
                            padding: 10,
                            fontSize: 16,
                            borderRadius: 15
                        }}>
                            {body}
                        </Text>
                        {/* <TextInput
                            placeholder="Type in anything"
                            style={styles.input}
                            value={message}
                            onChangeText={(text) => setMessage(text)}
                            multiline={true}
                            numberOfLines={4}
                        /> */}
                    </View>

                    <View style={{ alignItems: 'flex-end', flex: 3 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ChatScreen", { color: 'rgba(0,255,0,0.5)' })}
                            style={styles.chatButton}
                        >
                            <Entypo name="chat" size={24} color={altColors.lightGray} />
                        </TouchableOpacity>
                    </View>
                </View>




            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        borderWidth: 0
    },
    header: {
        color: "black",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 20,
        borderWidth: 0,
        flexDirection: "row"
    },
    body: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        gap: 30,
        flex: 20,
        paddingHorizontal: 20,

    },
    chatButton: {
        backgroundColor: "#298582", //altColors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: altColors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50,
    }
})