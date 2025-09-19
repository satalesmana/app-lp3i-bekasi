import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      {/* Konten utama (halaman) */}
      <View style={styles.content}>
        <Stack screenOptions={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ambil seluruh layar
    backgroundColor: "#fff",
  },
  content: {
    flex: 1, // fleksibel untuk halaman
  },
});
