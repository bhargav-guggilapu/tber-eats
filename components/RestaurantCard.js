import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantCard({
  name,
  image_url,
  categories,
  price,
  reviews,
  rating,
}) {
  return (
    <TouchableOpacity
      style={{
        marginTop: 5,
        padding: 15,
        backgroundColor: "white",
        marginBottom: 5,
      }}
      activeOpacity={0.8}
    >
      <View>
        <Image
          source={{
            uri: image_url,
          }}
          style={{
            width: "100%",
            height: 180,
          }}
        />
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
          <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
          <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
        </View>
        <View
          style={{
            backgroundColor: "#eee",
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 50,
          }}
        >
          <Text>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
