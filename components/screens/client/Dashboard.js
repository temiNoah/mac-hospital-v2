import React, { useState, useRef, useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from "react-native-elements";
import * as NavigationBar from 'expo-navigation-bar';

import Card from "../../subcomponents/Card";
import { services } from '../../consts/data';
import { defaultStyles } from '../../consts/Styles'
import colors from "../../consts/Colors";
//import BottomSheet from '../../subcomponents/BottomSheet'
import { serviceDetails } from '../../consts/data'
import { StatusBar } from 'expo-status-bar';
import { fontFamily } from '../../consts/Fonts'
import { UserContext } from "../../../context/UserContext";
import Constants from 'expo-constants';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DashboardScreen({ navigation }) {

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState(services);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const { width } = Dimensions.get("screen");
  const cardWidth = width / 2.0;// 1.9;


  const [filteredDataSource, setFilteredDataSource] = useState(services);
  const [masterDataSource, setMasterDataSource] = useState(services);
  const { user } = useContext(UserContext);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = `${item.department} ${item.description}`
          ? `${item.department} ${item.description}`.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };


  const ref = useRef(null)
  const handlePress = () => {
    //ToastAndroid.show("profile pics", ToastAndroid.SHORT);
    const isActive = ref?.current?.isActive();
    if (isActive)
      ref?.current?.scrollTo(0)
    else
      ref?.current?.scrollTo(-700);
  }

  useEffect(() => {
    async function fetchUser() {
      const myProfile = await AsyncStorage.getItem('user')
      // if (myProfile)
      //   Alert.alert("user url:" + myProfile !== null ? JSON.parse(myProfile).picture : 'the picture attribute those not exist in response json')
    }

    fetchUser()
  }, [])

  // useEffect(async () => {
  //   await NavigationBar.setBehaviorAsync('overlay-swipe')
  //   NavigationBar.setBackgroundColorAsync("white");
  // }, [])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <StatusBar style='auto' backgroundColor="transparent" />
        <View style={styles.header}>

          <View style={{ justifyContent: "center" }}>
            <Image source={require("../../../assets/twemoji_ambulance.png")} />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text style={styles.textHeader}>Hello, {user.username}</Text>
          </View>
          <TouchableOpacity onPress={() => handlePress()} style={{ justifyContent: "center" }}>
            <Image style={styles.profilePicture} source={user?.picture ? { uri: user.picture } : require("../../../assets/user.jpg")} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <View style={styles.howCanWeHelpContainer}>
            <Text style={styles.howCanWeHelp}>{"How can we help you?"}</Text>
            <SearchBar
              round
              searchIcon={{ size: 30 }}
              containerStyle={styles.searchContainer}
              inputContainerStyle={styles.searchInputContainer}
              //placeholder="Search"
              onChangeText={(text) => searchFilterFunction(text)}
              onClear={(text) => searchFilterFunction("")}
              value={search}
            />
          </View>

          <View
            style={{ borderWidth: 0, flex: 1, padding: 10 }}
          >
            <FlatList
              onMomentumScrollEnd={(e) => {
                setActiveCardIndex(
                  Math.round(e.nativeEvent.contentOffset.x / cardWidth)
                );
              }}
              vertical
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={department}
              contentContainerStyle={{
                paddingVertical: 0,
                padding: 0, width: "100%", gap: 30, marginBottom: 30
              }}
              renderItem={({ item, index }) => {
                const caption = item.service == services[0].service ? "Talk to Doctor" : "Book An Appointment"
                const { header, image, description, subheader, list } = serviceDetails[index];
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ backgroundColor: "transparent", borderWidth: 0, borderRadius: 0 }}
                    onPress={() => navigation.navigate("ServiceDetailsScreen",
                      { header, image, description, subheader, list, caption })}

                  >
                    <Card doctor={item} index={index} />
                  </TouchableOpacity>

                )
              }}
            />

          </View>


          {/* <BottomSheet ref={ref} >
                      <View style={{ flex: 1, backgroundColor: 'orange' }}></View>
                    </BottomSheet> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    borderWidth: 0,
    marginTop: Constants.statusBarHeight,
    flex: 1,
    width: "100%",
    backgroundColor: colors.background
  },
  header: {
    border: '0px solid #000000',
    // marginTop: 40 ,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0,
    flex: 1,
    paddingHorizontal: 20

  },
  body: {
    borderWidth: 0,
    flex: 10,
    paddingHorizontal: 20
  },
  textHeader: {
    fontSize: 15,
    fontFamily: 'GreatVibes',//fontFamily.merriweatherBold,
    justifyContent: "center"
  },
  profilePicture: {
    borderRadius: 45,
    width: 50,
    height: 50
  },
  howCanWeHelpContainer: {
    //marginTop : 35,
    borderWidth: 0
  },
  howCanWeHelp: {
    marginLeft: 0,
    fontSize: 12,
    fontWeight: "200"
  },
  searchContainer: {
    fontSize: 14,
    paddingLeft: 0,
    backgroundColor: colors.background,
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginTop: 0,
  },
  searchInputContainer: {
    backgroundColor: "#FFFFFF"  //"#F0F8FF",
    // marginLeft: 10,
    // marginRight: 10,
  },
});