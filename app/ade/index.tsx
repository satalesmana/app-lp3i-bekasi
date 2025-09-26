import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/744/744502.png" }}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to our app</Text>
      <Text style={styles.subtitle}>
        Now you can fund your account so you're ready to invest in crypto
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("ade/login")}>
        <Text style={styles.buttonText}>Let's go</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#fff" },
  image: { width: 200, height: 200, marginBottom: 30 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 14, color: "#666", textAlign: "center", marginBottom: 40 },
  button: { backgroundColor: "#4A5CFF", paddingVertical: 15, paddingHorizontal: 40, borderRadius: 8 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
