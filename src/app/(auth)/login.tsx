// import {
//   Pressable,
//   SafeAreaView,
//   Text,
//   // TouchableOpacity,
//   View,
// } from "react-native";
// import { Entypo } from "@expo/vector-icons";

// import * as WebBrowser from "expo-web-browser";
// import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
// import { Buffer } from "buffer";
// import { useGetToken } from "@/services/queries";

// WebBrowser.maybeCompleteAuthSession();
// const discovery = {
//   authorizationEndpoint: "https://accounts.spotify.com/authorize",
//   tokenEndpoint: "https://accounts.spotify.com/api/token",
// };
// export default function LoginScreen() {
//   const { data, error, isLoading } = useGetToken("");
//   // const router = useRouter();
//   const clientId =
//     "a9c371842776484c9202086d65d111d2" || process.env.SPOTIFY_CLIENT_ID;
//   const clientSecret =
//     "ed35bfb8f6f94bc2ad5b136aea4d1bce" || process.env.SPOTIFY_CLIENT_SECRET;
//   const redirectUri = makeRedirectUri({
//     scheme: "acme",
//     path: "/(main)",
//   });
//   const [request, response, promptAsync] = useAuthRequest(
//     {
//       clientId,
//       scopes: [
//         "user-read-email",
//         "user-library-read",
//         "user-read-recently-played",
//         "user-top-read",
//         "playlist-read-private",
//         "playlist-read-collaborative",
//         "playlist-modify-public",
//       ],
//       // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
//       // this must be set to false
//       usePKCE: false,
//       responseType: "code",
//       redirectUri,
//       // redirectUri: "exp://192.168.90.196:8081/--/spotify-auth-callback",
//     },
//     discovery
//   );
//   const login = async () => {
//     try {
//       const data = await promptAsync();
//       if (data.type === "success") {
//         console.log("code", data.params.code);
//         await fetchToken(data.params.code);
//       }
//       // console.log({ data });
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };
//   const fetchToken = async (authorizationCode: string) => {
//     const encodedCredentials = Buffer.from(
//       `${clientId}:${clientSecret}`
//     ).toString("base64");

//     const authorizationHeader = `Basic ${encodedCredentials}`;

//     try {
//       const tokenResponse = await fetch(
//         "https://accounts.spotify.com/api/token",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//             Authorization: authorizationHeader,
//           },
//           body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${redirectUri}`,
//         }
//       );

//       const tokenData = await tokenResponse.json();
//       console.log("tokenData", tokenData);
//       return tokenData.access_token;
//     } catch (error) {
//       console.error("Error fetching token:", error);
//       return null;
//     }
//   };
//   // useEffect(() => {
//   //   const checkTokenValidity = async () => {
//   //     const accessToken = await AsyncStorage.getItem("authToken");
//   //     if (accessToken) {
//   //       router.push("(main)");
//   //     }
//   //   };
//   //   checkTokenValidity();
//   // }, [router]);
//   // useEffect(() => {
//   //   if (response?.type === "success") {
//   //     const { code } = response.params;
//   //     fetchToken(code);
//   //     //   // Use the access token to make authorized API calls to Spotify
//   //     //   // console.log("Access token:", accessToken);
//   //   }
//   //   // console.log(response);
//   // }, [response]);
//   return (
//     <SafeAreaView className="flex-1 gap-y-10 justify-center items-center  bg-gray-900">
//       <Text className="text-6xl italic text-green-600">Suntify</Text>
//       <View className="text-3xl items-center">
//         <Text className="text-2xl text-white italic">
//           Listen Millions of songs
//         </Text>
//         <Text className="text-2xl text-white italic">Ads free</Text>
//       </View>
//       <Pressable
//         onPress={login}
//         className="flex-row w-[350px] justify-center items-center px-7 py-4 gap-x-3 rounded-full bg-green-600 ">
//         <Text className="text-white text-xl">Sign In with Spotify</Text>
//         <Entypo name="spotify" size={26} color="white" />
//       </Pressable>
//     </SafeAreaView>
//   );
// }
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
import { Buffer } from "buffer";
import { useGetToken } from "@/services/queries";

WebBrowser.maybeCompleteAuthSession();
const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};
export default function LoginScreen() {
  const { data, error, isLoading } = useGetToken("");
  // const router = useRouter();
  const clientId =
    "a9c371842776484c9202086d65d111d2" || process.env.SPOTIFY_CLIENT_ID;
  const clientSecret =
    "ed35bfb8f6f94bc2ad5b136aea4d1bce" || process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = makeRedirectUri({
    scheme: "acme",
    path: "/(main)",
  });
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId,
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
      redirectUri,
      // redirectUri: "exp://192.168.90.196:8081/--/spotify-auth-callback",
    },
    discovery
  );
  const login = async () => {
    try {
      const data = await promptAsync();
      if (data.type === "success") {
        console.log("code", data.params.code);
        // await fetchToken(data.params.code);
      }
      // console.log({ data });
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  // const fetchToken = async (authorizationCode: string) => {
  //   const encodedCredentials = Buffer.from(
  //     `${clientId}:${clientSecret}`
  //   ).toString("base64");

  //   const authorizationHeader = `Basic ${encodedCredentials}`;

  //   try {
  //     const tokenResponse = await fetch(
  //       "https://accounts.spotify.com/api/token",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //           Authorization: authorizationHeader,
  //         },
  //         body: `grant_type=authorization_code&code=${authorizationCode}&redirect_uri=${redirectUri}`,
  //       }
  //     );

  //     const tokenData = await tokenResponse.json();
  //     console.log("tokenData", tokenData);
  //     return tokenData.access_token;
  //   } catch (error) {
  //     console.error("Error fetching token:", error);
  //     return null;
  //   }
  // };
  // useEffect(() => {
  //   const checkTokenValidity = async () => {
  //     const accessToken = await AsyncStorage.getItem("authToken");
  //     if (accessToken) {
  //       router.push("(main)");
  //     }
  //   };
  //   checkTokenValidity();
  // }, [router]);
  // useEffect(() => {
  //   if (response?.type === "success") {
  //     const { code } = response.params;
  //     fetchToken(code);
  //     //   // Use the access token to make authorized API calls to Spotify
  //     //   // console.log("Access token:", accessToken);
  //   }
  //   // console.log(response);
  // }, [response]);
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
    </SafeAreaView>
  );
}
