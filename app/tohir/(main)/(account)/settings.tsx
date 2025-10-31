import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";

export default function SettingsPage() {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        router.replace("/tohir/login");
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
                <View style={styles.iconContainer}>
                    <Ionicons name={icon} size={22} color={color ?? "#6A5ACD"} />
                </View>
                <Text style={[styles.menuText, { color: color ?? "#333" }]}>{label}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={18} color="#aaa" />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.replace("/tohir/(main)/(account)")}
            >
                <Ionicons name="arrow-back" size={26} color="#6A5ACD" />
            </TouchableOpacity>

            <Text style={styles.title}>Pengaturan</Text>

            <View style={styles.card}>
                <MenuItem icon="lock-closed-outline" label="Ganti Password" />
                <MenuItem icon="person-remove-outline" label="Hapus Akun" />
                <MenuItem
                    icon="power-outline"
                    label="Log out"
                    color="#E63946"
                    onPress={handleLogout}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F8FA",
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        marginTop: 25,
        marginBottom: 25,
        color: "#333",
        textAlign: "center",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    menuItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderColor: "#f0f0f0",
    },
    menuLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    iconContainer: {
        width: 36,
        height: 36,
        borderRadius: 10,
        backgroundColor: "#F1F0FF",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#6A5ACD",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
    },
    menuText: {
        fontSize: 16,
        fontWeight: "500",
    },
});
