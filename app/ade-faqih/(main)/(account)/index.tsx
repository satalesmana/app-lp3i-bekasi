import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function AdefaqihIndex() {
  const user = useSelector((state: any) => state.user.user);
  const [example] = useState("useState aktif");
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {/* HEADER PROFILE */}
      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {user?.name?.charAt(0)?.toUpperCase()}
          </Text>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      {/* CARD INFO */}
      <View style={styles.card}>
        <ProfileRow label="Nama" value={user.name} />
        <ProfileRow label="Email" value={user.email} />
        <ProfileRow label="Gender" value={user.gender} />
        <ProfileRow label="Alamat" value={user.address} />
        <ProfileRow label="useState" value={example} />
        <ProfileRow label="Params" value={params.example as string} />
      </View>
    </View>
  );
}

/* COMPONENT BARIS */
function ProfileRow({ label, value }: any) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value || "-"}</Text>
    </View>
  );
}

/* STYLE */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F4F8",
    padding: 16,
  },

  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#1DA1F2",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  avatarText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  email: {
    fontSize: 13,
    color: "#666",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },

  row: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: "#ddd",
  },

  label: {
    flex: 1,
    color: "#555",
    fontWeight: "600",
  },

  value: {
    flex: 1.2,
    color: "#000",
    textAlign: "right",
  },
});
