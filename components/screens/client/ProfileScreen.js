import React, { useState, useRef, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput, Alert, Pressable, ImageBackground
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { signOut } from 'firebase/auth';
//import { auth } from '../../../config/firebase';
import { Ionicons, MaterialIcons, AntDesign, FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { defaultStyles } from '../../consts/Styles';
import BottomSheet from '../../subcomponents/BottomSheet2';
import UploadImage from '../../subcomponents/uploadImage';
import { fontFamily } from '../../consts/Fonts'
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import CustomButton from '../../subcomponents/CustomButton'
import Colors from "../../consts/Colors";
import { UserContext } from "../../../context/UserContext";


const { height: SCREEN_HEIGHT, width } = Dimensions.get('window');




export default function ProfileScreen({ navigation }) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [status, setStatus] = React.useState(false);
  // const [profilePicture, setProfilePicture] = useState(null)
  const { user, setUser } = useContext(UserContext)
  const data = {
    name: "", email: "", nationality: "",
    phoneNumber: "", dob: "", country: "",
    occupation: "", homeAddress: "", myPlan: "", payment: ""
  }
  const [form, setForm] = useState(data);



  const handleChange = (value, name) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  const handleSubmit = () => {
    Alert.alert("Edit submit");
  }

  const ref = useRef(null)

  const handleImageChange = () => {
    //ToastAndroid.show("change picture", ToastAndroid.SHORT);
    //  const isActive = ref?.current?.isActive();
    //         if(isActive)
    //             ref?.current?.scrollTo(0)
    //         else
    //             ref?.current?.scrollTo(-250);

    setStatus(true)
  }

  const handleLogout = () => {

    const p = removeItemValue()

    signOut(auth).catch(error => console.log('Firebase Error logging out: ', error)); //signout from firebase

    setUser(prev => ({
      id: null,
      username: null,
      email: null,
      picture: null,
      accessToken: null,
      isRegistered: false,
      userType: null,
      selectedService: null,
      isLoggedIn: false,
      authProvider: null
    }))

    navigation.navigate("LoginScreen")
  }

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage successfully cleared');
    } catch (error) {
      console.log('Error clearing AsyncStorage:', error);
    }
  }
  const removeItemValue = async () => {
    try {
      await AsyncStorage.multiRemove(["user", "messages"]);

    }
    catch (exception) {
      console.error("AsyncStorage Exception can't remove user:", exception)
    }
  }



  return (
    <View style={[defaultStyles.container, { backgroundColor: 'rgba(79, 196, 139, 1)' }]}>
      <View style={styles.content}>
        <StatusBar style="auto" backgroundColor="transparent" />
        <View style={[styles.header, {
          flexDirection: 'row', marginBottom: 0, backgroundColor: 'rgba(79, 196, 139, 1)', paddingTop: 0
        }]}>
          <TouchableOpacity >
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>

          <View style={{ width: '90%', borderWidth: 0 }}>
            <Text style={{ width: '90%', textAlign: 'center', fontSize: 12 }}>
              {"Profile"}
            </Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.section1}>
            <View style={{
              width: '100%', borderWidth: 0, height: 70,
              borderBottomLeftRadius: 100, borderBottomRightRadius: 100,
              alignItems: 'center', backgroundColor: 'rgba(79, 196, 139, 1)',

            }}>
            </View>
            <TouchableOpacity onPress={() => handleImageChange()}
              style={{
                position: "absolute", top: 5
              }}>
              <Image
                style={[styles.profilePicture, { position: "relative", }]}
                source={user.picture
                  ? { uri: user.picture } : require("../../../assets/user.jpg")}
              />

              <FontAwesome name="camera" size={15} color="black"
                style={{ position: "relative", left: 60, top: -10 }}
              />
            </TouchableOpacity>


          </View>



          <View style={[styles.section, {
            height: isEditMode ? SCREEN_HEIGHT - 285 : SCREEN_HEIGHT - 210,
          }]}>
            <ScrollView
              nestedScrollEnabled={false} showsVerticalScrollIndicator={false}>

              <View style={styles.personalDetails}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: 'transparent',//'#E9FCE6',
                  borderWidth: 0
                }}>
                  <Text
                    style={{
                      fontFamily: `${fontFamily.robotoBold}`, fontSize: 12,
                      width: 200
                    }}>
                    {"Personal details"}</Text>
                  <TouchableOpacity
                    onPress={() => { setIsEditMode((prev) => !prev); }}
                  >
                    <MaterialIcons name="edit" size={24} color="black" />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.label}>{"Name:"}</Text>
                  <TextInput
                    editable={isEditMode ? true : false}
                    placeholder=""
                    style={isEditMode ? styles.editMode : styles.input}
                    value={form.name}
                    onChangeText={(text) => handleChange(text, "name")}
                    name="name"
                  />
                </View>
                <View>
                  <Text style={styles.label}>{"Nationality:"}</Text>
                  <TextInput
                    editable={isEditMode ? true : false}
                    placeholder=""
                    style={isEditMode ? styles.editMode : styles.input}
                    value={form.nationality}
                    onChangeText={(text) => handleChange(text, "nationality")}
                    name="nationality"
                  />
                </View>
                <View>
                  <Text style={styles.label}>{"Email:"}</Text>
                  <TextInput
                    editable={isEditMode ? true : false}
                    placeholder=""
                    style={isEditMode ? styles.editMode : styles.input}
                    value={form.email}
                    onChangeText={(text) => handleChange(text, "email")}
                    name="email"
                  />
                </View>
                <View>
                  <Text style={styles.label}>{"Phone Number:"}</Text>
                  <TextInput
                    editable={isEditMode ? true : false}
                    placeholder=""
                    style={isEditMode ? styles.editMode : styles.input}
                    value={form.phoneNumber}
                    onChangeText={(text) => handleChange(text, "phoneNumber")}
                    name="phoneNumber"
                  />
                </View>
                <View>
                  <Text style={styles.label}>{"D.O.B:"}</Text>
                  <TextInput
                    editable={isEditMode ? true : false}
                    placeholder=""
                    style={isEditMode ? styles.editMode : styles.input}
                    value={form.dob}
                    onChangeText={(text) => handleChange(text, "dob")}
                    name="dob"
                  />
                </View>
                <View>
                  <Text style={styles.label}>{"Country:"}</Text>
                  <TextInput
                    editable={isEditMode ? true : false}
                    placeholder=""
                    style={isEditMode ? styles.editMode : styles.input}
                    value={form.country}
                    onChangeText={(text) => handleChange(text, "country")}
                    name="country"
                  />
                </View>
                <View>
                  <Text style={styles.label}>{"Occupation:"}</Text>
                  <TextInput
                    editable={isEditMode ? true : false}
                    placeholder=""
                    style={isEditMode ? styles.editMode : styles.input}
                    value={form.occupation}
                    onChangeText={(text) => handleChange(text, "occupation")}
                    name="occupation"
                  />
                </View>
              </View>

              <View style={styles.homeAddress}>
                <View>
                  <Text style={styles.label}>{"Home Address:"}</Text>
                </View>
                <TextInput
                  editable={isEditMode ? true : false}
                  placeholder=""
                  style={isEditMode ? styles.editMode : styles.input}
                  value={form.homeAddress}
                  onChangeText={(text) => handleChange(text, "homeAddress")}
                  name="homeAddress"
                />
              </View>

              <View style={styles.myPlan}>
                <View><Text style={styles.label}>{"My Plan:"}</Text></View>
                <TextInput
                  editable={isEditMode ? true : false}
                  placeholder=""
                  style={isEditMode ? styles.editMode : styles.input}
                  value={form.myPlan}
                  onChangeText={(text) => handleChange(text, "myPlan")}
                  name="myPlan"
                />
              </View>

              <View style={styles.payment}>
                <View style={{ borderWidth: 0 }}><Text style={styles.label}>{"Payment:"}</Text></View>
                <TouchableOpacity
                  onPress={() => { navigation.navigate("MakePaymentScreen") }}>
                  <MaterialIcons
                    name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
              </View>

              <View style={styles.share}>
                <View style={{ padding: 10 }}><Text style={styles.label}>{"Share:"}</Text></View>
                <View
                  style={{
                    flexDirection: 'row',
                    //justifyContent:'center',alignItems:'center',
                    backgroundColor: 'transparent',
                    gap: 0,
                    paddingHorizontal: 40,
                    borderRadius: 20
                  }}>
                  <View style={{
                    flexDirection: "row",
                    justifyContent: 'space-between', gap: 5, width: 50
                  }}>
                    {/* <Text style={{ color: "blue" }}>{"Facebook"}</Text> */}
                    <FontAwesome6 name="facebook-f" size={20} color="#3b5998" />
                  </View>
                  <View style={{
                    flexDirection: "row", gap: 5, width: 50,
                    justifyContent: 'space-between'
                  }}>
                    {/* <Text style={{ color: "green" }}>{"Twitter"}</Text> */}
                    <FontAwesome6 name="twitter" size={20} color="#1da1f2" />
                  </View>

                  <View style={{
                    flexDirection: "row", gap: 5, width: 50,
                    justifyContent: 'space-between'
                  }}>
                    {/* <Text style={{ color: "#FF0000" }}>{"Instangram"}</Text> */}
                    <FontAwesome6 name="instagram" size={20} color="#bc2a8d" />
                  </View>
                </View>
              </View>

              <View style={{ flexDirection: 'row', borderWidth: 0, padding: 25, gap: 10 }}>
                <AntDesign name="logout" size={20} color="black" />
                <TouchableOpacity onPress={() => { handleLogout() }}>
                  <Text style={{ fontSize: 12, fontWeight: "500" }}>{"Log out"}</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>

          {isEditMode && <CustomButton text={"Done"} action={() => handleSubmit()} style={{ width: 300 }} />
          }
        </View>

        {status &&
          //  <BottomSheet ref={ref}>
          //       <UploadImage setImage= {(img)=>setProfilePicture(img)}/>
          // </BottomSheet>

          <BottomSheet setStatus={setStatus} height={'25%'}>
            <UploadImage setImage={(img) => setProfilePicture(img)} />
          </BottomSheet>
        }

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: Colors.background
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
    //justifyContent:'center',
    // alignItems:'center',
    borderWidth: 0,
    flex: 20,
    gap: 30

  },
  section1: {
    //position:"absolute",
    //top: 0,
    //  zIndex:1000,
    flexDirection: 'column',
    //  alignSelf:'center',
    marginBottom: 0,
    borderWidth: 0,
    padding: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  section: {
    width: "100%",
    marginTop: 0,
    //justifyContent:'center',
    //alignItems:'center',
    //backgroundColor:'#E9FCE6',
    borderWidth: 0,
    backgroundColor: 'transparent'
  },
  personalDetails: {
    //marginTop:0,
    marginLeft: 16,
    marginRight: 16,
    borderWidth: 0,
    //width:"90%",
    backgroundColor: '#e9fce6',// 'rgba(79, 196, 139, 0.5)',// '#E9FCE6',
    marginBottom: 10,
    padding: 20,
    gap: 20,
    borderRadius: 45
  },
  homeAddress: {
    backgroundColor: '#e9fce6',//'rgba(79, 196, 139, 0.5)',//'#E9FCE6',
    //width:"90%",
    marginBottom: 10,
    padding: 20,
    borderRadius: 45,
    marginLeft: 16,
    marginRight: 16,
  },
  myPlan: {
    backgroundColor: '#e9fce6',// 'rgba(79, 196, 139, 0.5)', // '#E9FCE6',
    //width:"90%",
    marginBottom: 10,
    padding: 20,
    borderRadius: 45,
    marginLeft: 16,
    marginRight: 16,
  },
  payment: {
    backgroundColor: '#e9fce6',//'rgba(79, 196, 139, 0.5)', //'#E9FCE6',
    //width:"90%",
    justifyContent: 'space-between',
    alignItems: 'cemter',
    flexDirection: 'row',
    padding: 20,
    marginBottom: 10,
    borderRadius: 45,
    marginLeft: 16,
    marginRight: 16,
  },
  share: {
    backgroundColor: '#e9fce6',//'rgba(79, 196, 139, 0.5)',// '#E9FCE6',
    // width:"90%",
    justifyContent: 'space-between',
    alignItems: 'cemter',
    marginBottom: 5,
    padding: 10,
    borderRadius: 45,
    borderWidth: 0,
    gap: 10,
    marginLeft: 16,
    marginRight: 16,

  },
  profilePicture: {
    borderRadius: 45,
    width: 90,
    height: 90,
  },
  input: {
    backgroundColor: "#E9FCE6",
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 20,
    marginTop: 5,
    // borderColor: "green",
    borderWidth: 0,
    width: "99%",
    //height: "90%",
    fontSize: 12
  },
  editMode: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 20,
    marginTop: 5,
    // borderColor: "green",
    borderWidth: 0,
    width: "99%",
    height: 50,
    fontSize: 12,
    color: "black"
  },
  label: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: fontFamily.merriweatherRegular
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 12,
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

