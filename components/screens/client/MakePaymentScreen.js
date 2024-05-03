import React, { useState, useEffect, useContext, useCallback } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button, ScrollView, Alert, Pressable, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { Ionicons, MaterialIcons, EvilIcons, Feather, FontAwesome5 } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../subcomponents/Card2';
import { categories } from '../../consts/Doctor'
import { defaultStyles } from '../../consts/Styles'
import { packages } from '../../consts/data';
import Checkbox from 'expo-checkbox';
import { RadioButton } from 'react-native-paper';
import { fontFamily } from '../../consts/Fonts'
import { formatCurrency } from '../../../utility/formatCurrency';
import CustomButton from '../../subcomponents/CustomButton'
import { UserContext } from "../../../context/UserContext";
import { services } from "../../consts/data";
import CustomModal from "../../subcomponents/CustomModal";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

export default function MakePaymentScreen({ navigation }) {
  const [isSelected, setIsSelected] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false)
  const [department, setDepartment] = useState(categories);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const { user } = useContext(UserContext);
  const { width } = Dimensions.get("screen");
  const cardWidth = width / 2.0;// 1.9;
  const [isClient, setClient] = useState(false);
  //  const [isClient, setClient] = useState(false);
  //  const [isClient, setClient] = useState(false);
  const [period, setPeriod] = React.useState('');
  const [cardType, setCardType] = React.useState('');
  const [selectedPackage, setSelectedPackage] = useState(-1)
  const [showModal, setShowModal] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = () => {
    // Alert.alert("service selected:" + user.selectedService);
    setStatus("Payment Successful")
    setShowModal(true)
  }

  const handleNextView = useCallback(() => {
    // setShowModal(false)
    //navigate to either chatScreen or make appointment screen
    if (user.selectedService === services[0].service) {
      //GOPD selected
      navigation.navigate('ChatScreen')
    }
    else {
      navigation.navigate('MakeAppointmentScreen')
    }
  }, [])


  const modalComponent = (
    <>
      <View style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 0, backgroundColor: '#E9FCE6', borderRadius: 100, padding: 50 }}>
        <FontAwesome5 name="check-circle" size={80} color="#4FC48B" />
      </View>
      <Text style={{ marginBottom: 30, fontFamily: fontFamily.robotoBold, alignSelf: 'center', fontSize: 20, color: '#4FC48B' }}>{status}</Text>
      <CustomButton text={"Continue"} action={() => { setShowModal(false); handleNextView() }} isBgTransparent={true} style={{ width: 200 }} />
    </>

  )

  return (
    <View style={defaultStyles.container}>

      <View style={styles.content}>
        <StatusBar style="auto" backgroundColor="transparent" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('ClientDashboardScreen')}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ width: '90%', textAlign: 'center', fontSize: 12 }}>Select Payment</Text>
        </View>

        <View style={styles.body}>
          <View style={{ width: "100%", borderWidth: 0, flex: 1 }}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={packages}
              contentContainerStyle={{ paddingVertical: 0, padding: 0, gap: 10, alignItems: 'center' }}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setSelectedPackage(index)}
                >
                  <View style={[styles.packageContainer, styles.shadowProp,
                  selectedPackage === index &&
                  { backgroundColor: "rgba(235,251,243,1)" }
                  ]}>

                    {item.image && <Image source={item.image} />}
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: fontFamily.merriweatherRegular
                      }}>
                      {item.package}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={{ flex: 4, borderWidth: 0, gap: 10 }}>
            <TouchableOpacity onPress={() => setPeriod('monthly')} style={{ flex: 1 }} activeOpacity={0.8}>
              <View
                style={[styles.section, { flex: 1 }, period === 'monthly' &&
                  { borderColor: '#4FC48B', borderWidth: 1 }]}>
                <View style={{
                  flexDirection: "row",
                  justifyContent: 'space-between', backgroundColor: 'white'
                }}>
                  <Text style={{
                    margin: 10, color: 'rgba(166,225,197,1)',
                    fontWeight: '500'
                  }}>{"Monthly"}</Text>
                  <RadioButton
                    value="monthly"
                    status={period === 'monthly' ? 'checked' : 'unchecked'}
                    color='#4FC48B'
                    onPress={() => setPeriod('monthly')}
                  />
                </View>
                <Text style={{ margin: 10 }}>{formatCurrency("30000")}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setPeriod('yearly')} style={{ flex: 1 }} activeOpacity={0.8}>
              <View style={[styles.section, { flex: 1 },
              period === 'yearly' && { borderWidth: 1, borderColor: '#4FC48B' }]}>
                <View style={
                  { flexDirection: "row", justifyContent: 'space-between' }}>
                  <Text style={{
                    margin: 10, color: 'rgba(166,225,197,1)',
                    fontWeight: '500'
                  }}>{"Yearly"}</Text>
                  <RadioButton
                    value="yearly"
                    status={period === 'yearly' ? 'checked' : 'unchecked'}
                    color='#4FC48B'
                    onPress={() => setPeriod('yearly')}
                  />
                </View>
                <Text style={{ margin: 10 }}>{formatCurrency("30000")}</Text>
              </View>
            </TouchableOpacity>


          </View>

          <View style={{ flex: 3, borderWidth: 0, gap: 10 }}>
            <Text style={{ flex: 1, borderWidth: 0, textAlignVertical: "center" }}>{"Payment Method :"}</Text>

            <TouchableOpacity style={{ flex: 2 }} onPress={() => setCardType('paystack')} activeOpacity={0.8}>
              <View style={[styles.section, { flex: 1 }, {
                flexDirection: 'row', justifyContent: 'space-between',
                backgroundColor: 'rgba(235,251,243,1)'
              }]}>
                <Text>{"Paystack"}</Text>
                <Text>{"************"}</Text>
                <RadioButton
                  value="paystack"
                  status={cardType == 'paystack' ? 'checked' : 'unchecked'}
                  color='#4FC48B'
                  style={{ borderColor: "rgba(0,0,0,0.3)" }}
                  onPress={() => setCardType('paystack')}
                />
              </View>
            </TouchableOpacity>


            <TouchableOpacity style={{ flex: 2 }} onPress={() => setCardType('bank')} activeOpacity={0.8}>
              <View style={[styles.section, { flex: 1 }, {
                flexDirection: 'row', justifyContent: 'space-between',
                backgroundColor: 'rgba(235,251,243,1)'
              }]}>
                <Text>{"Bank"}</Text>
                <Text>{"************"}</Text>
                <RadioButton
                  value="bank"
                  status={cardType == 'bank' ? 'checked' : 'unchecked'}
                  color='#4FC48B'
                  onPress={() => setCardType('bank')}
                />
              </View>
            </TouchableOpacity>


          </View>


          <View style={{ flexDirection: "row", flex: 1, borderWidth: 0, justifyContent: "flex-start", alignItems: "center" }}>
            <TouchableOpacity style={{}} activeOpacity={1} onPress={() => { }}>
              <Ionicons name="add-circle-outline" size={24} color="black" />
            </TouchableOpacity>
            <Text>{"ADD PAYMENT METHOD"}</Text>
          </View>

          <View style={{ flex: 1, borderWidth: 0 }}>
            <CustomButton text={"Make Payment"} action={() => handleSubmit()} isBgTransparent={false} style={{ width: 300 }} />
          </View>


        </View>


        {
          showModal &&
          <CustomModal isModalVisible={showModal} setModalVisiblity={setShowModal} bodyComponent={modalComponent} />
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
    paddingHorizontal: 20,
    borderWidth: 0
  },
  packageContainer: {
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
  section: {
    marginTop: 0,
    borderWidth: 0,
    padding: 10,
    borderRadius: 20,
    borderColor: "rgba(0,0,0,0.3)",
    backgroundColor: 'white',
    elevation: 1,

  }
  ,
  checkbox: {
    margin: 8,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
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
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

})