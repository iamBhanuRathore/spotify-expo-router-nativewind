import { useGetUsersTopItems } from "@/services/queries";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Props = {
  type: "artists" | "tracks";
};

const GetTopItems = ({ type }: Props) => {
  const { data, isLoading, isError } = useGetUsersTopItems(type);
  // console.log({ data, isLoading, isError });
  return (
    <View>
      {data?.items ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data?.items}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => <ArtistCard item={item} />}
        />
      ) : (
        <View className="h-44">
          <Text className="text-zinc-300">Loading ...</Text>
        </View>
      )}
    </View>
  );
};

export default GetTopItems;

export const ArtistCard = ({ item }) => {
  return (
    <View className="m-3">
      <TouchableOpacity className="">
        <Image
          source={{ uri: item.images[0].url }}
          width={130}
          height={130}
          className="rounded-md"
        />
        <Text className="font-semibold text-zinc-300 mt-3"> {item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};
