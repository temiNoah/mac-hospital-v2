import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Image,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';


export default function GOPDNextScreen({ navigation }) {
  const[message , setMessage] = useState("");
  const [isDisabled , setIsDisabled]=useState(false)


  const handleSubmit=()=>{
    //ToastAndroid.show("reset", ToastAndroid.SHORT);
    navigation.navigate("GOPDScreen")
  }
    return (
        <View style={styles.containers}>
               <View style={{width:'100%',flexDirection:'column',marginBottom:'50%'}}>
                 <View style={{justifyContent:"center",alignItems:'center',marginBottom:20}} >
                      <LinearGradient 
                              colors={['#4FC48B', '#298582']} 
                              style={styles.button}    
                              start={{ x: 0, y: 0.5 }}
                              end={{ x: 1, y: 0.5 }}
                          >
                            <Pressable  onPress={handleSubmit} disabled={isDisabled}>
                                    <Text style={styles.buttonText} >Send and make appointment</Text>
                            </Pressable>
                        </LinearGradient>
                  </View>
                
                 <View style={{justifyContent:"center",alignItems:'center'}} >
                      <LinearGradient 
                              colors={['#4FC48B', '#298582']} 
                              style={styles.button}    
                              start={{ x: 0, y: 0.5 }}
                              end={{ x: 1, y: 0.5 }}
                          >
                            <Pressable  onPress={handleSubmit} disabled={isDisabled}>
                                    <Text style={styles.buttonText} >Send and call</Text>
                            </Pressable>
                        </LinearGradient>
                  </View>
            </View>


            <View style={{width:'100%' , justifyContent:'center',alignItems:'center'}}>
                <Pressable  
                onPress={handleSubmit} 
                style={{
                         backgroundColor:'#FFFFFF',
                         borderWidth:1,
                         borderRadius:45,
                         width:350,
                         padding:20,
                         borderColor:'#4FC48B'
                         }}>
                     <Text style={{
                                 textAlign:'center',
                                 fontWeight:'bold',
                                 color:'#4FC48B',
                                 fontSize:20
                              }} >Back</Text>
                </Pressable>
            </View>

                   
        </View>
    )
}


const styles=StyleSheet.create({
  containers:{
    marginTop:"70%",
    //padding: 10,
    width:'100%'
  },
   button: {
        width: 350,
        borderWidth :1,
        borderRadius: 20,
        // margin:'60%',
        padding :10,
        borderColor:"#4FC48B",
        justifyContent:'center',
  },
    buttonText: {
    fontWeight: "700",
    fontSize: 16,
    textAlign:"center",
    color:"white"
  },

})