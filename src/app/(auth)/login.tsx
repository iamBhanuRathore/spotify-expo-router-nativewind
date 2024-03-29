import { Pressable, SafeAreaView, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { router } from "expo-router";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
WebBrowser.maybeCompleteAuthSession();
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};
export default function LoginScreen() {
  const clientId =
    "a9c371842776484c9202086d65d111d2" || process.env.SPOTIFY_CLIENT_ID;
  const clientSecret =
    "ed35bfb8f6f94bc2ad5b136aea4d1bce" || process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = makeRedirectUri({
    scheme: "acme",
    path: "(main)",
  });
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId,
      scopes: [
        "ugc-image-upload",
        "user-read-playback-state",
        "user-modify-playback-state",
        "user-read-currently-playing",
        "user-read-email",
        "user-library-read",
        "user-read-recently-played",
        "user-top-read",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public",
        "playlist-modify-private",
        "user-follow-modify",
        "user-follow-read",
      ],
      // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      responseType: "code",
      redirectUri,
    },
    discovery
  );
  useEffect(() => {
    const init = async () => {
      const token = await AsyncStorage.getItem("accessToken");
      if (token) {
        console.log("Already access token on login page");
        router.navigate("(main)");
      }
    };
    init();
  }, [response]);
  const login = async () => {
    try {
      const data = await promptAsync();
      // console.log("Authorize Token", data);
      if (data.type === "success") {
        console.log("Login Success");
        await AsyncStorage.setItem("authToken", data.params.code);
        router.navigate("(main)");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <SafeAreaView className="flex-1 gap-y-10 justify-center items-center  bg-gray-900">
      <Text className="text-6xl italic text-green-600">Suntify</Text>
      <View className="text-3xl items-center">
        <Text className="text-2xl text-white italic">
          Listen Millions of songs
        </Text>
        <Text className="text-2xl text-white italic">Ads free</Text>
      </View>
      <Pressable
        onPress={login}
        className="flex-row w-[350px] justify-center items-center px-7 py-4 gap-x-3 rounded-full bg-green-600 ">
        <Text className="text-white text-xl">Sign In with Spotify</Text>
        <Entypo name="spotify" size={26} color="white" />
      </Pressable>
      <Pressable
        onPress={() => {
          router.navigate("/other");
        }}
        className="flex-row w-[350px] justify-center items-center px-7 py-4 gap-x-3 rounded-full bg-red-600 ">
        <Text className="text-white text-xl">Other Page</Text>
      </Pressable>
    </SafeAreaView>
  );
}
