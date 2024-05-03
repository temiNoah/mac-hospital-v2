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
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { SearchBar } from "react-native-elements";
import NotificationMessageSection from '../../subcomponents/NotificationMessageSection';
import { hospitals } from '../../consts/Doctor'
import NotificationNearbyHospitalSection
  from '../../subcomponents/NotificationNearbyHospitalSection';
import { defaultStyles } from "../../consts/Styles";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

export default function NotificationNearbyHospitalScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const { width } = Dimensions.get("screen");
  const cardWidth = width / 2.0;// 1.9;

  const [filteredDataSource, setFilteredDataSource] = useState(hospitals);
  const [masterDataSource, setMasterDataSource] = useState(hospitals);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = `${item.name}`
          ? `${item.name}`.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  return (
    <View style={defaultStyles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ClientDashboardScreen')}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={{ width: '90%', textAlign: 'center', fontSize: 15 }}>
            Nearby Hospitals
          </Text>
        </View>


        <View style={styles.body}>
          <View style={styles.search}>
            <SearchBar
              round
              searchIcon={{ size: 26 }}
              containerStyle={styles.searchContainer}
              inputContainerStyle={styles.searchInputContainer}
              placeholder="Search"
              onChangeText={(text) => searchFilterFunction(text)}
              onClear={(text) => searchFilterFunction("")}
              value={search}
            />
          </View>

          <View style={styles.flatlistContainer}>
            <FlatList
              onMomentumScrollEnd={(e) => {
                setActiveCardIndex(
                  Math.round(e.nativeEvent.contentOffset.x / cardWidth)
                );
              }}
              vertical
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={hospitals}
              contentContainerStyle={{
                paddingVertical: 0, padding: 0,
                width: "100%", borderWidth: 0, marginTop: 0
              }}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  disabled={activeCardIndex != index}
                  activeOpacity={1}
                // onPress={() => navigation.navigate("Booking", item)}
                >
                  <NotificationNearbyHospitalSection
                    nearbyHospital={item} index={index}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // container:{
  //    marginTop : 40,
  //    marginLeft:20,
  //    marginRight:20,
  //    padding:0,
  // },
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
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderWidth: 0
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    paddingHorizontal: 20,
    flex: 20,
    gap: 20
  },
  search: {
    marginTop: 0,
    borderWidth: 0,
    width: '100%',
    borderColor: "#E4F7E4",
    flex: 1
  },
  searchContainer: {
    fontSize: 16,
    paddingLeft: 0,
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    marginTop: 0,
    width: '100%',
    borderWidth: 0
  },
  searchInputContainer: {
    backgroundColor: "#FFFFFF",
    marginLeft: 0,
    marginRight: 0,
    borderColor: "#E4F7E4",
    borderWidth: 0
  },
  flatlistContainer: {
    width: '100%',
    borderWidth: 0,
    flex: 10,
    // backgroundColor: 'red'
    //height: '78%',
    // marginBottom: 10,
    // marginTop: 20
  }
});