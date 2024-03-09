import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
const secondTabBar = [
  {
    name: "Liked Songs",
  },
  {
    name: "Hip Hop",
  },
  {
    name: "Third Column",
  },
  {
    name: "Fourth Column",
  },
  {
    name: "Fifth Column",
  },
  {
    name: "Sixth Columngsrfgsrger",
  },
];
const LikebarComponent = () => {
  return (
    <View className="bg-zinc-800 my-2 py-3">
      <FlatList
        data={secondTabBar}
        numColumns={2}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() =>
              item.name === "Liked Songs"
                ? router.navigate("/(main)/liked")
                : ""
            }
            className="bg-zinc-700 overflow-hidden flex-row gap-x-4 items-center rounded-md flex-1 mx-4 my-2 ">
            {item.name === "Liked Songs" ? (
              <View className="w-[65px] flex items-center justify-center h-[65px]">
                <AntDesign name="heart" size={30} color="white" />
              </View>
            ) : (
              <Image
                height={65}
                width={65}
                resizeMode="cover"
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8j1phplfUkt-F1EAB3ieH1liY7MD_GvOg3Q&usqp=CAU",
                }}
              />
            )}
            <Text
              ellipsizeMode="clip"
              numberOfLines={1}
              className="text-white text-lg ">
              {item.name}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default LikebarComponent;
