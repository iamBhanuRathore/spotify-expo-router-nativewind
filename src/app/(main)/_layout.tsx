import React, { useEffect, useState } from "react";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { Link, Tabs, router } from "expo-router";
import { Pressable } from "react-native";
import { useGetToken } from "@/services/queries";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TabLayout() {
  const [authorizationCode, setAuthorizationCode] = useState("");
  const { data, isError, isLoading, isSuccess } =
    useGetToken(authorizationCode);
  useEffect(() => {
    const init = async () => {
      const token = await AsyncStorage.getItem("authToken");
      if (!token) {
        router.navigate("/login");
      }
      setAuthorizationCode(token);
    };
    init();
  }, []);
  const afterSuccessGetToken = async () => {
    console.log(data);
  };
  const afterErrorGetToken = async () => {};
  useEffect(() => {
    console.log({ isError, isSuccess, isLoading, data });
    if (isSuccess) {
      afterSuccessGetToken();
    }
    if (isError) {
      afterErrorGetToken();
    }
  }, [isSuccess, isError, isLoading, data]);
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Entypo name="home" size={28} color={color} />
            ) : (
              <AntDesign name="home" size={28} color={color} />
            ),
          // <TabBarIcon name="home" color={color} />
          headerRight: () => (
            <Link className="pr-5" href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <AntDesign name="codepen" size={28} />
                  // <FontAwesome
                  //   name="info-circle"
                  //   size={25}
                  //   // color={Colors[colorScheme ?? "light"].text}
                  //   style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  // />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Entypo name="home" size={28} color={color} />
            ) : (
              <AntDesign name="home" size={28} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "Tab Three",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Entypo name="home" size={28} color={color} />
            ) : (
              <AntDesign name="home" size={28} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
