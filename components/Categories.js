import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

export default function Categories() {
  const items = [
    {
      image: require("../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../assets/images/fast-food.png"),
      text: "Fast Food",
    },
    {
      image: require("../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../assets/images/desserts.png"),
      text: "Desserts",
    },
  ];

  return (
    <View
      style={{
        backgroundColor: "white",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={{ alignItems: "center", marginRight: 30 }}
              activeOpacity={0.6}
            >
              <Image
                source={item.image}
                style={{ width: 50, height: 40, resizeMode: "contain" }}
              />
              <Text style={{ fontSize: 13, fontWeight: "900" }}>
                {item.text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
