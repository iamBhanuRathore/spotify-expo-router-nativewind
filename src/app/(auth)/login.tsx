import { StyleSheet } from "nativewind";
import {
  Pressable,
  SafeAreaView,
  Text,
  // TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
// import * as AppAuth from "expo-app-auth";
WebBrowser.maybeCompleteAuthSession();
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};
export default function LoginScreen() {
  const router = useRouter();
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId:
        "a9c371842776484c9202086d65d111d2" || process.env.SPOTIFY_CLIENT_ID,
      // clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      scopes: [
        "user-read-email",
        "user-library-read",
        "user-read-recently-played",
        "user-top-read",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public",
      ],
      // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      responseType: "code",
      redirectUri: makeRedirectUri({
        // scheme: "exp://192.168.31.149:8081/--/spotify-auth-callback",
        scheme: "acme",
        path: "/(main)",
      }),
    },
    discovery
  );
  useEffect(() => {
    const checkTokenValidity = async () => {
      const accessToken = await AsyncStorage.getItem("authToken");
      if (accessToken) {
        router.push("(main)");
      }
    };
    checkTokenValidity();
  }, [router]);
  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      if (code) {
        AsyncStorage.setItem("authToken", code);
        // updating the user in session with the token
        router.push("/(main)");
      }
    }
    console.log({ response });
  }, [response]);
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
        onPress={() => promptAsync()}
        className="flex-row w-[350px] justify-center items-center px-7 py-4 gap-x-3 rounded-full bg-green-600 ">
        <Text className="text-white text-xl">Sign In with Spotify</Text>
        <Entypo name="spotify" size={26} color="white" />
      </Pressable>
    </SafeAreaView>
  );
}

const a = {
  response: {
    authentication: null,
    error: null,
    errorCode: null,
    params: {
      code: "AQALxzIXb_KvkkCDOQo7bRbBv92tJT4azp6njN7SbS7EN2r9l5g4MnsZcWFaUDg-mmUIQDjcxRInggWM1JDBu5eiYWQB-q57NTCOFX3ALyNH1_zvZoEixgW2gsbqglnl_3GLaRE-yUhUS_5eDmD57w8DGKjSfP_1_xJ4Xap_vA_XNpfeOhz8klNOIDCHco42HNOgKjH1GWPCUOLH9OJDd6axJPIt4WhOWOCTccx57DV27JhV5zWWZNgd8LIEnlYaqUwkbIHdGDjvEZ0O3RY3eOnfxLSVBUvd8t5Fgcn_QBJxomHNrHJo_J485_4hy_znzRtZHFQCIeF3I7Uh0wKsYWj3uwqKoLV5e_9MBHByOOEkElk7InJwXiQIFPCP9hGHunwOsRvBkkGEEqWOd7bA7hWDbncdCFqzvo7muAkcNav9dJyv3-sfdKi2j8qE9Dwh4P9nyw",
      state: "wAswsErb4U",
    },
    type: "success",
    url: "exp://192.168.31.149:8081/--/(main)?code=AQALxzIXb_KvkkCDOQo7bRbBv92tJT4azp6njN7SbS7EN2r9l5g4MnsZcWFaUDg-mmUIQDjcxRInggWM1JDBu5eiYWQB-q57NTCOFX3ALyNH1_zvZoEixgW2gsbqglnl_3GLaRE-yUhUS_5eDmD57w8DGKjSfP_1_xJ4Xap_vA_XNpfeOhz8klNOIDCHco42HNOgKjH1GWPCUOLH9OJDd6axJPIt4WhOWOCTccx57DV27JhV5zWWZNgd8LIEnlYaqUwkbIHdGDjvEZ0O3RY3eOnfxLSVBUvd8t5Fgcn_QBJxomHNrHJo_J485_4hy_znzRtZHFQCIeF3I7Uh0wKsYWj3uwqKoLV5e_9MBHByOOEkElk7InJwXiQIFPCP9hGHunwOsRvBkkGEEqWOd7bA7hWDbncdCFqzvo7muAkcNav9dJyv3-sfdKi2j8qE9Dwh4P9nyw&state=wAswsErb4U",
  },
};
