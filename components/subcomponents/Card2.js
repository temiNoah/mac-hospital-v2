import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("screen");
const cardWidth = width;// 1.9;

function Card2({ doctor, index }) {
  return (
    <View style={styles.card}>
      <Image
        source={doctor.image}
        style={[styles.cardImage, styles.shadowProp]}
      />
      <View style={styles.cardTitle}>
        <Text style={{ fontWeight: "400", fontSize: 12 }}>
          {doctor.department}
        </Text>
      </View>
    </View>
  );
}

export default Card2;

const styles = StyleSheet.create({
  card: {
    height: 130,
    width: 120,
    elevation: 15,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#DAF2D1",
    flexDirection: "column",
    overflow: "wrap"
  },
  cardImage: {
    height: 80,
    width: 100,
    marginTop: 8,
    // marginRight: "auto",
    // marginLeft: "auto",
    borderRadius: 15,
  },
  cardTitle: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 10,
    // marginLeft: 4,
    //marginRight: 4,
    //flexWrap : "wrap",
    alignItems: 'center',
    borderWidth: 0
  },
  shadowProp: {
    // shadowColor: "#171717",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
});
