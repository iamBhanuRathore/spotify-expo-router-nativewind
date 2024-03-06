import LikebarComponent from "@/components/likebar-component";
import RecentPlayed from "@/components/recent-played";
import UserAvatar from "@/components/user-avatar";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { FlashList } from "@shopify/flash-list";
import { LinearGradient } from "expo-linear-gradient";

import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
export default function Page() {
  const handleLogout = async () => {
    // Alert.alert("Logout");
    await AsyncStorage.clear();
    router.navigate("/login");
  };
  const tabButtons = [
    {
      name: "Music",
      url: "1",
    },
    {
      name: "Postasts & ShowsPostasts & Shows",
      url: "2",
    },
    {
      name: "Music",
      url: "1",
    },
    {
      name: "Postasts & ShowsPostasts & Shows",
      url: "2",
    },
    {
      name: "Music",
      url: "1",
    },
    {
      name: "Postasts & ShowsPostasts & Shows",
      url: "2",
    },
    {
      name: "Music",
      url: "1",
    },
    {
      name: "Postasts & ShowsPostasts & Shows",
      url: "2",
    },
    {
      name: "Music",
      url: "1",
    },
    {
      name: "Postasts & ShowsPostasts & Shows",
      url: "2",
    },
    {
      name: "Music",
      url: "1",
    },
    {
      name: "Postasts & ShowsPostasts & Shows",
      url: "2",
    },
  ];

  return (
    <View className="bg-zinc-800 flex-1">
      <LinearGradient colors={["#040306", "#131624"]}>
        <ScrollView>
          {/* <View className="gap-4"> */}
          <UserAvatar />
          <View className="py-2 my-2">
            <FlatList
              data={tabButtons}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => String(index)}
              renderItem={({ item, index }) => (
                <Pressable className="bg-zinc-700 mx-1 py-2 px-5 rounded-full">
                  <Text className="text-white">{item.name}</Text>
                </Pressable>
              )}
            />
          </View>
          {/* Likebar Component  */}
          <LikebarComponent />
          {/* Likebar Component  */}
          {/* Recent Played Component  */}
          <RecentPlayed />
          {/* Recent Played Component  */}
          {/* </View> */}
        </ScrollView>
        {/* <Button title="Logout" onPress={handleLogout} /> */}
      </LinearGradient>
    </View>
  );
}
{
  /* <ScrollView horizontal>
<Pressable className="bg-zinc-700 py-2 px-5 rounded-full">
  <Text className="text-white">Music</Text>
</Pressable>
<Pressable className="bg-zinc-700 p-2 px-5 rounded-full">
  <Text className="text-white">
    Postasts & ShowsPostasts & Shows
  </Text>
</Pressable>
<Pressable className="bg-zinc-700 py-2 px-5 rounded-full">
  <Text className="text-white">Music</Text>
</Pressable>
<Pressable className="bg-zinc-700 p-2 px-5 rounded-full">
  <Text className="text-white">
    Postasts & ShowsPostasts & Shows
  </Text>
</Pressable>
<Pressable className="bg-zinc-700 py-2 px-5 rounded-full">
  <Text className="text-white">Music</Text>
</Pressable>
<Pressable className="bg-zinc-700 p-2 px-5 rounded-full">
  <Text className="text-white">
    Postasts & ShowsPostasts & Shows
  </Text>
</Pressable>
<Pressable className="bg-zinc-700 py-2 px-5 rounded-full">
  <Text className="text-white">Music</Text>
</Pressable>
<Pressable className="bg-zinc-700 p-2 px-5 rounded-full">
  <Text className="text-white">
    Postasts & ShowsPostasts & Shows
  </Text>
</Pressable>
<Pressable className="bg-zinc-700 py-2 px-5 rounded-full">
  <Text className="text-white">Music</Text>
</Pressable>
<Pressable className="bg-zinc-700 p-2 px-5 rounded-full">
  <Text className="text-white">
    Postasts & ShowsPostasts & Shows
  </Text>
</Pressable>
<Pressable className="bg-zinc-700 py-2 px-5 rounded-full">
  <Text className="text-white">Music</Text>
</Pressable>
<Pressable className="bg-zinc-700 p-2 px-5 rounded-full">
  <Text className="text-white">
    Postasts & ShowsPostasts & Shows
  </Text>
</Pressable>
</ScrollView> */
}
// function Content() {
//   const handleLogout = async () => {
//     // Alert.alert("Logout");
//     await AsyncStorage.removeItem("authToken");
//     router.navigate("/login");
//   };
//   return (
//     <View className="flex-1">
//       <View className="py-12 md:py-24 lg:py-32 xl:py-48">
//         <View className="container px-4 md:px-6">
//           <View className="flex flex-col items-center gap-4 text-center">
//             <Text
//               role="heading"
//               className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
//               Welcome to Project ACME
//             </Text>
//             <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
//               Discover and collaborate on amce. Explore our services now.
//             </Text>
//             <View className="gap-4">
//               <Button title="Logout" onPress={handleLogout} />
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// function Header() {
//   const { top } = useSafeAreaInsets();
//   return (
//     <View style={{ paddingTop: top }}>
//       <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
//         <Link className="font-bold flex-1 items-center justify-center" href="#">
//           ACME
//         </Link>
//         <View className="flex flex-row gap-4 sm:gap-6">
//           <Link
//             className="text-md font-medium hover:underline web:underline-offset-4"
//             href="#">
//             About
//           </Link>
//           <Link
//             className="text-md font-medium hover:underline web:underline-offset-4"
//             href="#">
//             Product
//           </Link>
//           <Link
//             className="text-md font-medium hover:underline web:underline-offset-4"
//             href="#">
//             Pricing
//           </Link>
//         </View>
//       </View>
//     </View>
//   );
// }

// function Footer() {
//   const { bottom } = useSafeAreaInsets();
//   return (
//     <View
//       className="flex shrink-0 bg-gray-100 native:hidden"
//       style={{ paddingBottom: bottom }}>
//       <View className="py-6 flex-1 items-start px-4 md:px-6 ">
//         <Text className={"text-center text-gray-700"}>
//           © {new Date().getFullYear()} Me
//         </Text>
//       </View>
//     </View>
//   );
// }
