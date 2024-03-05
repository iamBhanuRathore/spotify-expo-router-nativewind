import { UserType } from "@/typings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import { Buffer } from "buffer"; // for base64 encoding
// import axios from "axios";
import { makeRedirectUri } from "expo-auth-session";
const AUTH_BASE_URL = "https://accounts.spotify.com/api";
const USER_BASE_URL = "https://api.spotify.com/v1";
const redirectUri = makeRedirectUri({
  scheme: "acme",
  path: "(main)",
});
const clientId =
  "a9c371842776484c9202086d65d111d2" || process.env.SPOTIFY_CLIENT_ID; // Replace with your client ID
const clientSecret =
  "ed35bfb8f6f94bc2ad5b136aea4d1bce" || process.env.SPOTIFY_CLIENT_SECRET; // Replace with your client secret

// get token - if authorization token is present
export const useGetToken = (authorizationCode: string) => {
  return useQuery({
    queryKey: ["spotifyToken"],
    queryFn: async () => {
      const encodedCredentials = Buffer.from(
        `${clientId}:${clientSecret}`
      ).toString("base64");
      console.log("hehe");
      const authorizationHeader = `Basic ${encodedCredentials}`;

      const tokenResponse = await fetch(`${AUTH_BASE_URL}/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: authorizationHeader,
        },
        body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${redirectUri}`,
      });

      const tokenData = await tokenResponse.json();
      console.log("tokenData", tokenData);
      return tokenData;
    },
    enabled: !!authorizationCode, // Only fetch when authorizationCode is available
  });
};

// get user Details
export const useUser = () => {
  return useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const accessToken = await AsyncStorage.getItem("accessToken");
      const tokenResponse = await fetch(`${USER_BASE_URL}/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const tokenData = await tokenResponse.json();
      return tokenData as UserType;
    },
  });
};
