import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../store/index";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    ...Ionicons.font,
  });

  if (!fontsLoaded) {
    return null; // atau bisa tampilkan loader jika mau
  }

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home" />
        <Stack.Screen
          name="UTS_Salsabila"
          options={{ headerShown: false }}
        />
      </Stack>
    </Provider>
  );
}
