import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ setCity }) {
  const [inputValue, setInputValue] = useState("");
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: "row",
        backgroundColor: "#eee",
        borderRadius: 50,
        alignItems: "center",
        marginRight: 10,
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", width: "65%" }}
      >
        <View style={{ marginLeft: 10 }}>
          <Ionicons name="location-sharp" size={24} />
        </View>

        <TextInput
          placeholder="Search..."
          onChangeText={(newText) => setInputValue(newText)}
          defaultValue={inputValue}
          onSubmitEditing={() => inputValue && setCity(inputValue)}
          style={{
            paddingVertical: 15,
            paddingLeft: 10,
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          marginRight: 8,
          alignItems: "center",
          padding: 9,
          borderRadius: 30,
        }}
      >
        <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
        <Text>Search</Text>
      </View>
    </View>
  );
}
