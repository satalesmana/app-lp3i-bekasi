import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo2.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Judul dan subjudul */}
      <Text style={styles.title}>Welcome to our app</Text>
      <Text style={styles.subtitle}>
        Please login to continue to your account.
      </Text>

      {/* Tombol */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace("./home")}
      >
        <Text style={styles.buttonText}>Start our journey</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 220,
    height: 300,
    marginBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#2F80ED",
    paddingVertical: 12,
    paddingHorizontal: 100  ,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
