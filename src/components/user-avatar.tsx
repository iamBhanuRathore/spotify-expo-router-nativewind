import { cn, greetings } from "@/lib/utils";
import { useUser } from "@/services/queries";
import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  className?: string;
};

const UserAvatar = ({ className }: Props) => {
  const { data, isError } = useUser();
  if (isError) {
    router.navigate("/login");
  }
  return (
    <View
      className={cn("flex-row items-center justify-center px-4 py-2 gap-4")}>
      {data?.images[0]?.url ? (
        <Image
          className="h-10 w-10 rounded-full object-cover"
          source={{ uri: data?.images[0]?.url }}
        />
      ) : (
        <View className="h-10 w-10 rounded-full items-center justify-center bg-green-600">
          <Text className="text-white text-2xl">
            {data?.display_name.at(0).toUpperCase()}
          </Text>
        </View>
      )}
      <Text className="flex-1 text-2xl text-white">{greetings()}</Text>
      <MaterialCommunityIcons
        name="lightning-bolt-outline"
        size={24}
        color="white"
      />
    </View>
  );
};

export default UserAvatar;
