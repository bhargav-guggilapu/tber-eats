import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs({ setActive, active }) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text="Delivery" active={active} setActive={setActive} />
      <HeaderButton text="Pickup" active={active} setActive={setActive} />
    </View>
  );
}

const HeaderButton = ({ text, setActive, active }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: text === active ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => setActive(text)}
    >
      <Text
        style={{
          color: text === active ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
