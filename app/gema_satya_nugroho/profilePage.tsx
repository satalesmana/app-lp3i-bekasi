import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const user = useSelector((state) => state.user.user);
  const [example, setExample] = useState("Belum ada nilai useState");
  const params = useLocalSearchParams();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Profil Pengguna</Text>
      <Text style={styles.subHeader}>Detail Data dan Parameter</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Nama</Text>
          <Text style={styles.value}>{user?.name || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user?.email || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.value}>{user?.gender || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Alamat</Text>
          <Text style={styles.value}>{user?.address || "-"}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>useState</Text>
          <Text style={styles.value}>{example}</Text>
        </View>

        <View style={[styles.row, styles.lastRow]}>
          <Text style={styles.label}>Dari Params</Text>
          <Text style={styles.value}>{params?.example || "-"}</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F8FAFC",
    paddingTop: 100,
  },
  header: {
    fontSize: 26,
    fontWeight: "700",
    color: "#1E293B",
    textAlign: "center",
    marginBottom: 4,
  },
  subHeader: {
    fontSize: 16,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    borderBottomWidth: 0.5,
    borderColor: "#E2E8F0",
    paddingBottom: 8,
  },
  lastRow: {
    borderBottomWidth: 0,
    marginBottom: 0,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#334155",
    flex: 1,
  },
  value: {
    fontSize: 16,
    color: "#475569",
    flex: 1,
    textAlign: "right",
  },
  footer: {
    fontSize: 14,
    color: "#64748B",
    textAlign: "center",
    marginTop: 20,
  },
  bold: {
    fontWeight: "700",
    color: "#0F172A",
  },
});
