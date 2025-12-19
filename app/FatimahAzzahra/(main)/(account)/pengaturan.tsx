import { View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

export default function SettingsPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogoutPress = () => {
    Alert.alert(
      "Konfirmasi",
      "Apakah kamu yakin ingin keluar?",
      [
        { text: "Batal", style: "cancel" },
        {
          text: "Ya, Keluar",
          style: "destructive",
          onPress: () => {
            dispatch({ type: "LOGOUT" });
            router.replace("/uts-FatimahAzzahra/login");
          },
        },
      ]
    );
  };

  const MenuItem = ({ icon, title, danger, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons size={20} name={icon} 
          color={danger ? "#ff4b4b" : "#7d7d7d"} 
          style={{ marginRight: 10 }} 
        />
        <Text style={[styles.menuText, danger && { color: "#ff4b4b" }]}>
          {title}
        </Text>
      </View>

      {!danger && (
        <Ionicons name="chevron-forward" size={18} color="#9a9a9a" />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Pengaturan</Text>
        </View>

        {/* Card Wrapper */}
        <View style={styles.box}>
          <MenuItem icon="lock-closed-outline" title="Ganti Password" />
          <MenuItem icon="person-remove-outline" title="Hapus Akun" />
          <MenuItem 
            icon="power-outline" 
            title="Logout" 
            danger 
            onPress={handleLogoutPress} 
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    backgroundColor: "#6b5eff",
    height: 150,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
    paddingBottom: 15,
    position: "relative"
  },

  headerTitle: { 
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 5
  },

  backButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    width: 38,
    height: 38,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },

  box: {
    backgroundColor: "#fff",
    marginTop: -40,
    marginHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 10,
    elevation: 4,
  },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 18,
  },

  menuText: {
    fontSize: 15,
    color: "#444",
    fontWeight: "500"
  },
});
