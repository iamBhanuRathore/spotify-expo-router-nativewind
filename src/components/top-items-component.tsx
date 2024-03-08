import { useGetUsersTopItems } from "@/services/queries";
import React from "react";
import { FlatList, Text, View } from "react-native";

type Props = {
  type: "artists" | "tracks";
};

const GetTopItems = ({ type }: Props) => {
  const { data, isLoading, isError } = useGetUsersTopItems(type);
  // console.log({ data, isLoading, isError });
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data?.items}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => <ArtistCard />}
      />
    </View>
    // <Text className="text-white">
    //   GetTopItems{JSON.stringify({ data: data.items })}
    // </Text>
  );
};

export default GetTopItems;

export const ArtistCard = () => {
  return (
    <View className="border-2 border-white h-[300px] w-[300px]">
      <Text>Hllo</Text>
    </View>
  );
};
