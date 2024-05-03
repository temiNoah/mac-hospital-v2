import React, { useState, useRef } from "react";
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
import { Ionicons, MaterialIcons, AntDesign, FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { defaultStyles } from '../../consts/Styles';
//import BottomSheet from '../subcomponents/BottomSheet';
import { fontFamily } from '../../consts/Fonts'
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import CustomButton from '../../subcomponents/CustomButton'
import Colors from "../../consts/Colors";

//import { auth } from '../../../config/firebase'
import UserContext from '../../../context/UserContext'

const { height: SCREEN_HEIGHT, width } = Dimensions.get('window');




export default function DoctorNotificationMessageDetailsScreen({ navigation, route }) {
    const [isEditMode, setIsEditMode] = useState(false)
    const [status, setStatus] = React.useState(false);
    const [profilePicture, setProfilePicture] = useState(null)
    const {user,setUer}= useState(UserContext)

    const item = route.params
    console.log(JSON.stringify(route.params))
    // const data = {
    //     name: "", email: "", nationality: "",
    //     phoneNumber: "", dob: "", country: "",
    //     occupation: "", homeAddress: "", myPlan: "", payment: ""
    // }
    // const [form, setForm] = useState(data);



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

    return (
        <View style={[defaultStyles.container, { backgroundColor: 'rgba(79, 196, 139, 1)' }]}>
            <View style={styles.content}>
                <StatusBar style="auto" backgroundColor="transparent" />
                <View style={[styles.header, {
                    flexDirection: 'row',
                    marginBottom: 0,
                    backgroundColor: 'rgba(79, 196, 139, 1)',
                    paddingTop: 0
                }]}>
                    <TouchableOpacity onPress={() => navigation.navigate('DoctorNotificationMessageScreen')}>
                        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
                    </TouchableOpacity>

                    <View style={{ width: '90%', borderWidth: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialIcons name="mail-outline" size={24} color="black" />
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={[styles.section1, {}]}>
                        <View style={{
                            width: '100%', borderWidth: 0, height: 70, borderBottomLeftRadius: 100, borderBottomRightRadius: 100, alignItems: 'center', backgroundColor: 'rgba(79, 196, 139, 1)',
                            justifyContent: 'center'
                        }}>
                            <Text style={{ width: '100%', textAlign: 'center' }}>{"Sender:"}</Text>
                            <Text style={{ width: '100%', textAlign: 'center' }}>{item.sender}</Text>
                        </View>
                        <View>
                            <Text style={{ alignSelf: 'center', fontSize: 12 }}>{item.date}</Text>
                        </View>
                    </View>

                    <View style={[styles.section2, { borderWidth: 0 }]}>
                        <ScrollView nestedScrollEnabled={false} showsVerticalScrollIndicator={false} style={{ borderWidth: 0 }}>
                            <TextInput style={[defaultStyles.shadowProp,
                            {
                                borderWidth: 0,
                                borderColor: 'rgba(0,0,0,0.5)',
                                padding: 10,
                                borderRadius: 20,
                                fontSize: 14,
                                height: "90%",
                                flexWrap: 'wrap',
                                textAlignVertical: 'top'
                            }]}
                                value={item.body}
                                multiline={true}
                                numberOfLines={4}
                            //onChangeText={(text) => setMessage(text)}
                            />
                        </ScrollView>
                    </View>

                    <View style={styles.buttonGroup}>
                        <CustomButton text={"Reply"} action={() => { navigation.navigate("ChatScreen", { name: 'mac', color: 'red', uid: user.id }) }} style={{ width: 100 }} isBgTransparent={true} />
                        <CustomButton text={"Forward"} action={() => handleSubmit()} style={{ width: 100 }} isBgTransparent={true} />
                    </View>

                </View>

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
        borderWidth: 0,
        flex: 20,
        gap: 0

    },
    section1: {
        flex: 2,
        flexDirection: 'column',
        //  alignSelf:'center',
        marginBottom: 0,
        borderWidth: 0,
        padding: 0,
        width: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'transparent'
    },
    section2: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        //justifyContent:'center',
        //alignItems:'center',
        //backgroundColor:'#E9FCE6',
        borderWidth: 0,
        backgroundColor: 'transparent',
        flex: 5
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

    buttonGroup: {
        flexDirection: "row",
        gap: 10,
        borderWidth: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

