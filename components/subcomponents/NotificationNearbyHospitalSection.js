import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("screen");
const cardWidth = width;// 1.9;

function NotificationNearbyHospitalScreen({ nearbyHospital, index }) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="mail-outline" size={24} color="black" /></View>
      <View style={styles.cardTitle}>
        <Text style={{ fontWeight: "400", fontSize: 12 }}>
          {nearbyHospital.name}
        </Text>
      </View>

      <View>
        <View style={{
          width: 40, height: 40, borderRadius: 100, backgroundColor: '#E4F7E4',
          justifyContent: "center", alignItems: "center"
        }}>
          <MaterialCommunityIcons name="phone-hangup" size={24} color="#13AD5C" />
        </View>
        <Text style={{ fontSize: 12, color: 'rgba(0,0,0,0.5)' }}>{nearbyHospital.status}</Text>
      </View>
    </View>
  );
}

export default NotificationNearbyHospitalScreen;

const styles = StyleSheet.create({
  card: {
    height: 100,
    //width: "100%",
    elevation: 15,
    marginBottom: 30,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#FFF",//"#DAF2D1",
    flexDirection: "row",
    overflow: "wrap",
    borderWidth: 0,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardTitle: {
    flexDirection: "column",
    //justifyContent: "center",
    marginTop: 0,
    // marginLeft: 4,
    //marginRight: 4,
    //flexWrap : "wrap",
    alignItems: 'center',
    borderWidth: 0
  },
  iconContainer: {
    borderRadius: 100,
    borderWidth: 0,
    width: 40,
    height: 40,
    alignItems: 'center',
    backgroundColor: "#CDDDCB",
    justifyContent: 'center'
  },
  shadowProp: {
    // shadowColor: "#171717",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
});
