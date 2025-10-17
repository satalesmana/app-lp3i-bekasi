import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

export default function ProfileScreen() {
  const user = useSelector((state: any) => state.user.user);
  const { example } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Nama:</Text>
        <Text>{user?.name || "-"}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <Text>{user?.email || "-"}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Gender:</Text>
        <Text>{user?.gender || "-"}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Alamat:</Text>
        <Text>{user?.address || "-"}</Text>
      </View>

      {example && (
        <View style={[styles.row, { marginTop: 20 }]}>
          <Text style={styles.label}>Pesan params:</Text>
          <Text>{example}</Text>
        </View>
      )}
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
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    width: 90,
    fontWeight: "600",
  },
});
