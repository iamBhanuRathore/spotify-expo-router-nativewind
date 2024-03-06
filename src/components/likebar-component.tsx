import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
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
          <Pressable className="bg-zinc-700 flex-row gap-x-4 overflow-hidden truncate items-center rounded-md flex-1 mx-4 my-2 ">
            <Image
              height={65}
              width={65}
              resizeMode="cover"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8j1phplfUkt-F1EAB3ieH1liY7MD_GvOg3Q&usqp=CAU",
              }}
            />
            <Text className="text-white text-lg ">{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default LikebarComponent;
