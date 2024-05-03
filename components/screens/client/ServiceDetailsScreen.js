import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, Alert, Pressable, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome6 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../subcomponents/Card2';
import { categories } from '../../consts/Doctor'
// import { Calendar } from 'react-native-calendars';
import { defaultStyles } from '../../consts/Styles'
import CustomButton from '../../subcomponents/CustomButton'
import { serviceDetails } from '../../consts/data'
import { fontFamily } from "../../consts/Fonts";
import { UserContext } from "../../../context/UserContext";
import CustomModal from '../../subcomponents/CustomModal'
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

const { height: SCREEN_HEIGHT, width } = Dimensions.get('window')

export default function ServiceDetailsScreen({ navigation, route }) {
  const { header, image, description, subheader, list, caption } = route.params;
  const { user, setUser } = useContext(UserContext)
  const [showModal, setShowModal] = useState(false)


  const handleSubmit = () => {
    // Alert.alert(caption);

    //call the api to know if user has registered
    setUser(prevUser => ({ ...prevUser, selectedService: header }))
    setShowModal(true)


  }

  const handleNextView = () => {

    if (!user.isRegistered) {

      navigation.navigate("RegistrationScreen")
    }
    else {
      if (header === serviceDetails[0].header) {//chat with a doctor 
        navigation.navigate('ChatScreen')
      }
      else {
        //book an appointment
        navigation.navigate('MakeAppointmentScreen')
      }

    }
  }


  const message_unregistered_user = "Sorry,you can not complete this request , kindly register with Mac hospital"
  const modalComponent = (
    <View style={{ borderWidth: 0, padding: 20, justifyContent: 'center', alignItems: 'center', gap: 50, height: '70%' }}>
      <View style={{ borderWidth: 0, width: '90%' }}>
        <Text style={{ fontSize: 14, fontFamily: fontFamily.merriweatherRegular }}>{message_unregistered_user}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <CustomButton text={"Register"} action={() => { setShowModal(false), handleNextView() }} isBgTransparent={false} style={{ width: 100 }} />
        <CustomButton text={"Back"} action={() => setShowModal(false)} isBgTransparent={true} style={{ width: 100 }} />
      </View>
    </View>
  )
  return (
    <View style={defaultStyles.container}>
      <View style={styles.content}>
        <StatusBar style="auto" backgroundColor="transparent" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ClientDashboardScreen')}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ width: '90%', textAlign: 'center', fontSize: 12, fontFamily: fontFamily.merriweatherBold }}>{header}</Text>
        </View>

        <View style={styles.body}>
          <View style={[styles.imgFrame, { flex: 1, justifyContent: "space-between", flexDirection: 'column', borderWidth: 0, gap: 10 }]}>
            <Image
              source={image}
              style={[styles.img, { flex: 1 }]}
              contentFit="cover"
              transition={1000}
            />
            <ScrollView
              nestedScrollEnabled={false}
              showsVerticalScrollIndicator={false}
              style={[styles.paragraph, { flex: 1, paddingHorizontal: 5 }]}>
              <Text>{description}</Text>
            </ScrollView>
          </View>

          <View style={{ flex: 1, borderWidth: 0 }}>
            <View style={[styles.paragraph, { justifyContent: "center", flex: 1 }]}>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>{subheader}</Text>
            </View>
            <View style={[styles.flatListContainer, { flex: 4 }]}>
              <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                data={list}
                contentContainerStyle={{ paddingVertical: 0, padding: 0, gap: 15 }}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    //disabled={activeCardIndex != index}
                    activeOpacity={1}
                  // onPress={() => navigation.navigate("Booking", item)}
                  >
                    <View style={{
                      flexDirection: 'row',
                      borderWidth: 0,
                      borderRadius: 10,
                      gap: 5,
                      // justifyContent:'center',
                      // alignItems:"center",
                      padding: 1,
                      width: "100%",
                    }}>

                      <FontAwesome6 name="circle-check" size={15} color="#73D376" />
                      <Text style={{ fontSize: 12 }}>{item}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>

            <View style={{ flex: 2, justifyContent: 'center' }}>
              <CustomButton text={caption} action={() => handleSubmit()} isBgTransparent={false} style={{ width: 300 }} />
            </View>
          </View>

        </View>


        {
          showModal &&
          <CustomModal
            title=''
            message={message_unregistered_user}
            isModalVisible={showModal}
            setModalVisiblity={(value) => setShowModal(value)}
            bodyComponent={modalComponent} />
        }
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  content: {
    borderWidth: 0,
    marginTop: Constants.statusBarHeight,
    flex: 1
  },
  header: {
    flexDirection: "row",
    borderWidth: 0,
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10
  },
  body: {
    flex: 20,
    flexDirection: "column",
    //justifyContent: 'center',
    // gap: 10,
    //height: 500,
    //maxHeight: SCREEN_HEIGHT * 0.875,
    paddingHorizontal: 20,
    borderWidth: 0
  },
  flatListContainer: {
    width: "100%",
    // borderWidth: 0, maxHeight: (SCREEN_HEIGHT * 0.875) * 0.4,
    //marginBottom: 2
  },

  imgFrame: {
    width: "100%",
    padding: 0,
    height: 150,
    borderWidth: 0,
    marginTop: 0
  },
  img: {
    // flex: 1,
    width: '100%',
    backgroundColor: '#0553',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)'
  },
  paragraph: {
    width: "100%",
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'center',
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 14,
    textAlign: "center",
    color: "white"
  },
  button: {
    width: 200,
    borderWidth: 1,
    borderRadius: 20,
    // marginLeft:20,
    padding: 10,
    borderColor: "#4FC48B",
    justifyContent: 'center'
  },
})