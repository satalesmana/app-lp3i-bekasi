import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SettingsPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    router.replace("/zakky-mufra/login");
  };

  type MenuItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
  color?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onPress, color }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <View style={styles.menuLeft}>
      <Ionicons name={icon} size={20} color={color ?? "#333"} />
      <Text style={[styles.menuText, { color: color ?? "#333" }]}>{label}</Text>
    </View>
    <Ionicons name="chevron-forward-outline" size={18} color="#6A5ACD" />
  </TouchableOpacity>
);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/zakky-mufra/(main)/(account)")}
        >
        <Ionicons name="arrow-back" size={24} color="#6A5ACD" />
    </TouchableOpacity>


      <Text style={styles.title}>Pengaturan</Text>

      <MenuItem icon="lock-closed-outline" label="Ganti Password" />
      <MenuItem icon="person-remove-outline" label="Hapus Akun" />
      <MenuItem
        icon="power-outline"
        label="Log out"
        color="red"
        onPress={handleLogout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 25,
    color: "#333",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  menuText: {
    fontSize: 16,
  },
});