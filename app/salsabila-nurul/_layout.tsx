import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
  return (
    <>
      <StatusBar/>
      <Stack.Screen name="index" options={{ title: "index" }} />
      <Stack.Screen name="login" options={{ title: "login" }} />
      <Stack.Screen name="register" options={{ title: "register" }} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}