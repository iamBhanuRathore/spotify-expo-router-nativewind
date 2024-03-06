import { useRecentPlayedSongs } from "@/services/queries";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";

const RecentPlayed = () => {
  const { data, isLoading, isError } = useRecentPlayedSongs();
  // console.log({ data, isLoading, isError });
  const [token, setToken] = useState("");
  const init = async () => {
    let a = await AsyncStorage.getItem("accessToken");
    console.log(a);
    setToken(a);
  };
  useEffect(() => {
    init();
  }, []);
  return <Text className="text-white">RecentPlayed{token}</Text>;
};

export default RecentPlayed;
