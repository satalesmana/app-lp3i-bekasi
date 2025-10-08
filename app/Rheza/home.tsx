import { ButtonPrimary } from "@/componets/myButton";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';

export default function RhezaIndex() {
  const user = useSelector((state:any) => state.user.user);
  const [example, setExample] = useState("rheza state");

  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>Profile</Text>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.label}>Nama</Text>
          <Text style={styles.value}>{user.name}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>{user.email}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.value}>{user.gender}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Birthday</Text>
          <Text style={styles.value}>{user.dateOfBirth}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Alamat</Text>
          <Text style={styles.value}>{user.address}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>use state</Text>
          <Text style={styles.value}>{example}</Text>
        </View>
      </View>
    </View>
  );
}

const THEME = {
  primary: "#6C63FF",
  bg: "#F5F6FF",
  card: "#FFFFFF",
  text: "#1F2340",
  muted: "#8C8CA1",
  divider: "rgba(31,35,64,0.08)",
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.bg,
    paddingTop: 70,
    padding: 25
  },
  card: {
    backgroundColor: THEME.card,
    borderRadius: 16,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: THEME.divider,
  },
  label: {
    width: 90,
    color: THEME.muted,
    fontSize: 13,
  },
  value: {
    flex: 1,
    color: THEME.text,
    fontSize: 14,
    fontWeight: "600",
  },
});
