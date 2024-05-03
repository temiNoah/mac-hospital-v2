import React, { useState, useEffect } from "react";
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
  SafeAreaView,
  Button,
  FlatList, ActivityIndicator, TouchableOpacity
} from "react-native";
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { useFonts, Merriweather_400Regular, Merriweather_700Bold } from '@expo-google-fonts/merriweather';
//import IonIcons from '@expo/vector-icons/Ionicons';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import colors from '../consts/Colors'




const imgDir = FileSystem.documentDirectory + "images/";

// Checks if gif directory exists. If not, creates it
async function ensureDirExists() {
  const dirInfo = await FileSystem.getInfoAsync(imgDir);
  if (!dirInfo.exists) {
    console.log("Gif directory doesn't exist, creating…");
    await FileSystem.makeDirectoryAsync(imgDir, { intermediates: true });
  }
}



export default UploadImage = (props) => {
  const [images, setImages] = useState('')
  const [loading, setLoading] = useState(false);
  const [tapped, setTapped] = useState(false);

  const handlePress = (val) => {
    setTapped(!tapped);
    selectImage(val)
  };

  let [fontsLoaded] = useFonts({
    MerriweatherRegular: Merriweather_400Regular,
    MerriweatherBold: Merriweather_700Bold,
  });

  useEffect(() => {
    loadImages()
  }, []);

  const loadImages = async () => {
    await ensureDirExists();
    const files = await FileSystem.readDirectoryAsync(imgDir);
    if (files.length > 0) {
      setImages(files.map(f => imgDir + f))
    }
  }

  const selectImage = async (useLibrary) => {
    let result;
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }

    if (useLibrary) {
      // No permissions request is necessary for launching the image library
      result = await ImagePicker.launchImageLibraryAsync(options);
    }
    else {
      await ImagePicker.requestCameraPermissionsAsync();
      result = await ImagePicker.launchCameraAsync(options);

    }

    if (!result.canceled) {
      // console.log(result.assets[0].uri)
      saveImage(result.assets[0].uri)

    }
  }

  const saveImage = async (uri) => {
    await ensureDirExists()
    const filename = new Date().getTime() + '.jpg';
    const dest = imgDir + filename;
    await FileSystem.copyAsync({ from: uri, to: dest })
    setImages([...images, dest])

    props.setImage(uri)
  }

  const deleteImage = async (uri) => {
    await FileSystem.deleteAsync(uri);
    setImages(images.filter(i => i !== uri));
  }
  const uploadImage = async () => {
    setLoading(true)
    await FileSystem.uploadAsync('', uri, {
      httpMethod: Post,
      uploadType: FileSystem.FileSystemUploadType.MULTIPART,
      fieldName: 'file'
    });
    setLoading(false)
  }

  const renderItem = ({ item }) => {
    const fileName = item.split("/").pop()
    return (
      <View style={{ flexDirection: "row", margin: 1, alignItems: 'center', gap: 5, padding: 30 }}>
        <Image source={{ uri: item }} style={{ width: 80, height: 80, alignSelf: 'center' }} />
        <Text style={{ flex: 1 }}>{fileName}</Text>
        <Ionicons name="cloud-upload" size={24} onPress={() => uploadImage(item)} />
        <Ionicons name="trash" size={24} onPress={() => deleteImage(item)} />
      </View>
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 0, borderWidth: 0 }}>
      <Text style={{ fontFamily: 'MerriweatherBold', fontSize: 14, margin: 10 }}>SELECT:</Text>
      <View
        style={{
          flexDirection: "row", justifyContent: 'space-evenly', marginVertical: 0, gap: 10,
          marginLeft: 30, borderWidth: 0
        }}>

        <View
          style={{ flexDirection: "row", gap: 20, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => handlePress(true)} activeOpacity={0.8}>
            <View style={[styles.iconContainer, tapped && styles.tapped]}>
              <FontAwesome
                name="photo" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <Text style={{ fontFamily: 'MerriweatherRegular', fontSize: 12 }}>Picture</Text>
          {//<Button title="Photo Image" onPress={()=>selectImage(true)} /> 
          }
        </View>
        <View
          style={{ flexDirection: "row", gap: 20, justifyContent: 'center', alignItems: 'center' }}>

          <TouchableOpacity onPress={() => handlePress(false)} activeOpacity={0.8}>
            <View style={[styles.iconContainer, tapped && styles.tapped]}>
              <Ionicons
                name="camera-outline" size={20} color="black" />
            </View>
          </TouchableOpacity>

          <Text style={{ fontFamily: 'MerriweatherRegular', fontSize: 12 }}>Capture</Text>
          { //<Button title="Capture Image" onPress={()=> selectImage(false)}/>
          }
        </View>
      </View>

      {/* <FlatList data={images} renderItem={renderItem} /> */}

      {
        // loading && (
        //   <View style={
        //     [StyleSheet.absoluteFill, {
        //       backgroundColor: 'rgba(0,0,0,0.4)',
        //       alignItems: 'center',
        //       justifyContent: 'center'
        //     }]
        //   }>
        //     <ActivityIndicator color="#fff" animating size="large" />
        //   </View>
        // )
      }

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  tapped: {
    backgroundColor: 'lightblue',
  },
})