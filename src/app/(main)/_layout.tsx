import React, { useEffect, useState } from "react";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { Link, Tabs, router } from "expo-router";
import { Pressable, StatusBar, Text, View } from "react-native";
import { useGetToken } from "@/services/queries";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const { top } = useSafeAreaInsets();
  const [authorizationCode, setAuthorizationCode] = useState("");
  const { data, isError, isLoading, isSuccess } =
    useGetToken(authorizationCode);
  useEffect(() => {
    const init = async () => {
      // runs only first time when we have the authToken
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        console.log("First time after Login");
        setAuthorizationCode(token);
      }
    };
    init();
  }, []);
  const afterSuccessGetToken = async () => {
    if (data.access_token) {
      console.log("Getting Access token with the exchange of authToken");
      await AsyncStorage.removeItem("authToken");
      await AsyncStorage.setItem("accessToken", data.access_token);
      await AsyncStorage.setItem("refreshToken", data.refresh_token);
      await AsyncStorage.setItem("expirationTime", String(data.expires_in));
    }
    if (data.error) {
      console.log(
        "Getting error on exchange of the accessToken with the authToken"
      );
      await AsyncStorage.clear();
      router.navigate("/login");
    }
  };
  const afterErrorGetToken = async () => {};
  useEffect(() => {
    // console.log({ isError, isSuccess, isLoading, data });
    if (isSuccess) {
      afterSuccessGetToken();
    }
    if (isError) {
      afterErrorGetToken();
    }
  }, [isSuccess, isError, isLoading, data]);
  if (isLoading) {
    return <Text>Loading</Text>;
  }
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#ededed"
        barStyle={"dark-content"}
        showHideTransition={"slide"}
        hidden={false}
      />
      <View style={{ paddingTop: top }} />
      <Tabs
        screenOptions={{
          headerShown: false,
        }}>
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
    </>
  );
}
