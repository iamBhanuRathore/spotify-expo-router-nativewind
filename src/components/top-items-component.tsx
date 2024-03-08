import { useGetUsersTopItems } from "@/services/queries";
import React from "react";
import { Text } from "react-native";

type Props = {
  type: "artists" | "tracks";
};

const GetTopItems = ({ type }: Props) => {
  const { data, isLoading, isError } = useGetUsersTopItems(type);
  console.log({ data, isLoading, isError });
  return (
    <Text className="text-white">
      GetTopItems{JSON.stringify({ data, isLoading, isError })}
    </Text>
  );
};

export default GetTopItems;
