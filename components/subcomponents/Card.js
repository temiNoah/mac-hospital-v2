import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";
import { service_colors } from "../consts/Colors";

const { width, height } = Dimensions.get("screen");
const cardWidth = width;// 1.9;



function Card({ doctor, index }) {
  let bgColor = service_colors[index >= service_colors.length ? index % service_colors.length : index]
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <Image
        source={doctor.image}
        style={[styles.cardImage, styles.shadowProp]}
      />
      <View style={styles.cardTitle}>
        <Text style={{ fontWeight: "500", fontSize: 14 }}>
          {doctor.service}
        </Text>
        <View style={{ width: 130, border: "0px solid #000000", numberOfLines: 1, ellipsizeMode: "tail" }}>
          <Text style={{ fontWeight: "400", fontSize: 12, color: "grey" }}>
            {doctor.description}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: '100%',
    elevation: 2,
    margin: 0,
    padding: 10,
    borderRadius: 15,
    flexDirection: "row",
    overflow: "wrap",
    borderWidth: 0,
    gap: 20
  },
  cardImage: {
    height: "90%",
    width: "50%",
    marginTop: 8,
    // marginRight: "auto",
    // marginLeft: "auto",
    borderRadius: 15,
  },
  cardTitle: {
    flexDirection: "column",
    // justifyContent: "space-between",
    // marginTop: 10,
    marginLeft: 8,
    marginRight: 8,
    flexWrap: "wrap"
  },
  shadowProp: {
    // shadowColor: "#171717",
    // shadowOffset: { width: -2, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
});
