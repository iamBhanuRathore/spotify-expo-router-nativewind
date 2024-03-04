import React from "react";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    // <Stack
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    // />
    <Stack>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="login"
      />
      <Stack.Screen name="other" />
    </Stack>
  );
}
