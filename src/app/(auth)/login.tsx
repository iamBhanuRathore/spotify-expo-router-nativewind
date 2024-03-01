import { StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  const login = async () => {
    const config = {
      issuer: "https://accounts.spotify.com",
      clientId: process.env.SPOTIFY_CLIENT_ID,
      scopes: [],
      redirectUrl: "exp://localhost:19002/--/spotify-auth-callback",
    };
  };
  return (
    <View style={styles.container} className="bg-zinc-900">
      <Text className="text-red-500">Login Page</Text>
      <View
        style={styles.separator}
        // lightColor="#eee"
        // darkColor="rgba(255,255,255,0.1)"
      />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
