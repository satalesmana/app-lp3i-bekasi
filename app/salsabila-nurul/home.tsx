import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';

export default function SalsabilaIndex() {
  const user = useSelector((state: any) => state.user.user);
  const [example, setExample] = useState("nama usestate");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil Pengguna</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Nama:</Text>
        <Text style={styles.value}>{user.name}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{user.email}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.value}>{user.gender}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Alamat:</Text>
        <Text style={styles.value}>{user.address}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>useState:</Text>
        <Text style={styles.value}>{example}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  infoBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontWeight: "bold",
    color: "#555",
  },
  value: {
    color: "#333",
  },
});
