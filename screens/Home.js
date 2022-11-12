import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantCard from "../components/RestaurantCard";
import BottomBar from "../components/BottomBar";

const YELP_API_KEY =
  "xTBnIaRXZ-u5NI9WSwh3DeRBIz3pAzXYe1tLZHawZUTZMqJWuwkh_e297qgd-ZhOAiBpDW5OK7cwwYTR4jsKv8zUyaZ6PCm910r3xuTXTUnYcIKBImxgJ5xMjZZvY3Yx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    const res = await fetch(yelpUrl, apiOptions);
    const data = await res.json();
    if (!data.error) {
      setRestaurantData(
        data.businesses.filter((b) => {
          return b.transactions.includes(activeTab.toLocaleLowerCase());
        })
      );
    } else {
      alert("Restaurants Cant Be Fetched");
    }
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs active={activeTab} setActive={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <View style={{height:1, width:'100%', backgroundColor:'gray'}}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        {restaurantData?.map((restaurant, i) => {
          return (
            <RestaurantCard
              key={i}
              name={restaurant.name}
              image_url={restaurant.image_url}
              categories={restaurant.categories}
              price={restaurant.price}
              reviews={restaurant.reviews}
              rating={restaurant.rating}
            />
          );
        })}
      </ScrollView>
      <View style={{height:1, width:'100%', backgroundColor:'gray'}}></View>
      <BottomBar />
    </SafeAreaView>
  );
}
