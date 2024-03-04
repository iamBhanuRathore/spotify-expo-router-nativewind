import { useQuery } from "@tanstack/react-query";
import { Buffer } from "buffer"; // for base64 encoding
import axios from "axios";
import { makeRedirectUri } from "expo-auth-session";

const SPOTIFY_TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const redirectUri = makeRedirectUri({
  scheme: "acme",
  path: "/(main)",
});

// get token - if authorization token is present
export const useGetToken = (authorizationCode: string) => {
  const clientId =
    "a9c371842776484c9202086d65d111d2" || process.env.SPOTIFY_CLIENT_ID; // Replace with your client ID
  const clientSecret =
    "ed35bfb8f6f94bc2ad5b136aea4d1bce" || process.env.SPOTIFY_CLIENT_SECRET; // Replace with your client secret
  const encodedCredentials = Buffer.from(
    `${clientId}:${clientSecret}`
  ).toString("base64");
  const authorizationHeader = `Basic ${encodedCredentials}`;
  console.log(authorizationHeader);
  return useQuery({
    queryKey: ["spotifyToken"],
    queryFn: async () => {
      const response = await axios.post(
        SPOTIFY_TOKEN_ENDPOINT,
        {
          grant_type: "authorization_code",
          code: authorizationCode,
          redirect_uri: redirectUri,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: authorizationHeader,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to fetch token");
      }

      return response.data;
    },
    enabled: !!authorizationCode, // Only fetch when authorizationCode is available
  });
};
