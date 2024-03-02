import React from "react";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

// import Colors from "@/constants/Colors";
// import { useColorScheme } from "@/components/useColorScheme";
// import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={
        {
          // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          // headerShown: useClientOnlyValue(false, true),
        }
      }>
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
