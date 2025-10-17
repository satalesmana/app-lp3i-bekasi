import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function HomeScreen() {
  const user = useSelector((state: any) => state.user.user);
  const params = useLocalSearchParams();

  // 🔹 Navigasi ke Profile tanpa params
  const goToProfile = () => {
    router.push("/dayat/profile");
  };

  // 🔹 Navigasi ke Profile dengan params
  const goToProfileWithParams = () => {
    router.push({
      pathname: "/dayat/profile",
      params: { example: "Data dikirim dari Home" },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, {user?.name ? user.name : "User"}
      </Text>

      {params?.message && (
        <Text style={styles.infoMessage}>{params.message}</Text>
      )}

      <View style={styles.infoBox}>
        <Text>Email: {user?.email || "-"}</Text>
        <Text>Gender: {user?.gender || "-"}</Text>
        <Text>Address: {user?.address || "-"}</Text>
      </View>

      {/* 🔹 Tombol ke Profile tanpa params */}
      <Pressable style={styles.buttonPrimary} onPress={goToProfile}>
        <Text style={styles.buttonText}>Go to User Profile</Text>
      </Pressable>

      {/* 🔹 Tombol ke Profile dengan params */}
      <Pressable style={styles.buttonSecondary} onPress={goToProfileWithParams}>
        <Text style={styles.buttonText}>Go to User Profile with Params</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
  },
  infoMessage: {
    fontSize: 14,
    color: "#0D6EFD",
    marginBottom: 10,
  },
  infoBox: {
    marginBottom: 40,
  },
  buttonPrimary: {
    backgroundColor: "#0D6EFD",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonSecondary: {
    backgroundColor: "#198754", // hijau agar beda dari tombol utama
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
