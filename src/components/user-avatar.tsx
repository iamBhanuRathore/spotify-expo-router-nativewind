import { cn, greetings } from "@/lib/utils";
import { useUser } from "@/services/queries";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {
  className?: string;
};

const UserAvatar = ({ className }: Props) => {
  const { data, isError } = useUser();
  console.log("data", data);
  useEffect(() => {
    const init = async () => {
      if (data?.error?.status === 401) {
        console.log("redirecting To login page");
        console.log(await AsyncStorage.getAllKeys());
        await AsyncStorage.clear();
        router.navigate("/login");
      } else {
        console.log("No Error on the Getting User Details");
      }
    };
    init();
  }, [data?.error?.status]); // Listen to status change instead of message change
  if (data?.error?.status === 401) {
    return null;
  }
  return (
    <SafeAreaView
      className={cn(
        "flex-row items-center justify-center px-4 py-4 gap-4",
        className
      )}>
      {/* Image or the text in image  */}
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
      <Text className="flex-1 text-2xl">
        <Text className="text-white">{greetings()}</Text>
        <Text className="text-green-500"> {data?.display_name}</Text>
      </Text>
      <MaterialCommunityIcons
        name="lightning-bolt-outline"
        size={24}
        color="white"
      />
    </SafeAreaView>
  );
};

export default UserAvatar;
