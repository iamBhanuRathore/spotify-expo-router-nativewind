import FontAwesome from "@expo/vector-icons/FontAwesome";
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "../global.css";
import { UserProvider, useUser } from "@/components/providers/auth-provider";
import { QueryProvider } from "@/components/providers/query-provider";
// import { useColorScheme } from "@/components/useColorScheme";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(auth)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function MainProvider() {
  return (
    <UserProvider>
      <QueryProvider>
        <RootLayout />
      </QueryProvider>
    </UserProvider>
  );
}
function RootLayout() {
  const { user } = useUser();
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // if (user?.id && <RootLayoutNav />) {
  //   return <RootLayoutNav />;
  // }
  // if (!user?.id && <AuthLayoutNav />) {
  //   return <AuthLayoutNav />;
  // }

  // return <AuthLayoutNav />;
  return user?.id ? <RootLayoutNav /> : <AuthLayoutNav />;
}

function RootLayoutNav() {
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!user.id) {
      router.push("/(auth)/login");
    }
  }, []);
  return (
    <Stack>
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
function AuthLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}
