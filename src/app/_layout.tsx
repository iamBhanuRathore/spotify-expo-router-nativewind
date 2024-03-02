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

const a = {
  response: {
    authentication: null,
    error: null,
    errorCode: null,
    params: {
      code: "AQDi3Xw4kXEEzTEBS-YVKXvVDlxiUj-t_QjbGofKbfrJ5diYgVVtWoh1kPVuo2WrkZKFmL1wosGv1HiNtv3C-oRAyKFBoxVZyqqdWrJCPCQEDd_YVpz5DK7IrD3ONUwbSyPx72M3p-pr2p2fYYG8HJdj1Sng0ZovlSbzxbQ-2vPszS_2Zubb86yIHMDHc3Bnbl-JI6Z2eRBfJvWpEoSM8hCvyNuTF_vF7xWXlzZDOZX1W-taWhi-HS2yD0d7DpP6Q5pY0Cr4YNHs8uIh07B6cryd_2Nz6BNxSxdoBzjVNjhTh_3pd17Cg_x8n2wouBH4H3IqySJgFiljRfL92vyLBJvgsxo4XkxL6WTeUSeYT8LL8cMxMP7ceDDE1k-4yy0sb7NXl7hMQJQuFePUGjPjvw",
      state: "fGM6Dsl1ui",
    },
    type: "success",
    url: "exp://192.168.31.149:8081/--/spotify-auth-callback?code=AQDi3Xw4kXEEzTEBS-YVKXvVDlxiUj-t_QjbGofKbfrJ5diYgVVtWoh1kPVuo2WrkZKFmL1wosGv1HiNtv3C-oRAyKFBoxVZyqqdWrJCPCQEDd_YVpz5DK7IrD3ONUwbSyPx72M3p-pr2p2fYYG8HJdj1Sng0ZovlSbzxbQ-2vPszS_2Zubb86yIHMDHc3Bnbl-JI6Z2eRBfJvWpEoSM8hCvyNuTF_vF7xWXlzZDOZX1W-taWhi-HS2yD0d7DpP6Q5pY0Cr4YNHs8uIh07B6cryd_2Nz6BNxSxdoBzjVNjhTh_3pd17Cg_x8n2wouBH4H3IqySJgFiljRfL92vyLBJvgsxo4XkxL6WTeUSeYT8LL8cMxMP7ceDDE1k-4yy0sb7NXl7hMQJQuFePUGjPjvw&state=fGM6Dsl1ui",
  },
};
