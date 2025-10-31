import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function TohirIndex() {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user?.user);

    const [language, setLanguage] = useState<"id" | "en">("id");
    const [showLanguageModal, setShowLanguageModal] = useState(false);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    const translations: any = {
        id: {
            account: "Akun",
            changeProfile: "Ubah Profil",
            language: "Bahasa",
            languageName: "Bahasa Indonesia",
            settings: "Pengaturan",
            faq: "FAQ",
            privacy: "Kebijakan Privasi",
            terms: "Syarat & Ketentuan",
            lisensi: "Lisensi Perangkat Lunak",
            contact: "Kontak Kami",
            selectLang: "Pilih Bahasa",
            changePassword: "Ganti Password",
            deleteAccount: "Hapus Akun",
            logout: "Keluar",
            logoutConfirmTitle: "Keluar dari akun?",
            cancel: "Batal",
            yesLogout: "Ya, Keluar",
        },
        en: {
            account: "Account",
            changeProfile: "Edit Profile",
            language: "Language",
            languageName: "English",
            settings: "Settings",
            faq: "FAQ",
            privacy: "Privacy Policy",
            terms: "Terms & Conditions",
            lisensi: "Software License",
            contact: "Contact Us",
            selectLang: "Select Language",
            changePassword: "Change Password",
            deleteAccount: "Delete Account",
            logout: "Log out",
            logoutConfirmTitle: "Sign out?",
            cancel: "Cancel",
            yesLogout: "Yes, Sign out",
        },
    };
    const t = translations[language];

    useEffect(() => {
        (async () => {
            try {
                const saved = await AsyncStorage.getItem("app_language");
                if (saved === "id" || saved === "en") setLanguage(saved);
            } catch { }
        })();
    }, []);

    const changeLanguage = async (lang: "id" | "en") => {
        setLanguage(lang);
        await AsyncStorage.setItem("app_language", lang);
        setShowLanguageModal(false);
    };

    const confirmLogout = () => setShowLogoutConfirm(true);
    const doLogout = () => {
        dispatch({ type: "LOGOUT" });
        setShowLogoutConfirm(false);
        router.replace("/tohir/login");
    };

    const MenuItem = ({ icon, label, value, onPress, danger }: any) => (
        <TouchableOpacity style={styles.menuItem} onPress={onPress}>
            <View style={styles.menuLeft}>
                <Ionicons
                    name={icon}
                    size={20}
                    color={danger ? "#E53935" : "#6C63FF"}
                    style={{ marginRight: 10 }}
                />
                <Text style={[styles.menuText, danger && { color: "#E53935" }]}>
                    {label}
                </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                {value ? <Text style={styles.menuValue}>{value}</Text> : null}
                <Ionicons name="chevron-forward-outline" size={18} color="#999" />
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* HEADER */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{t.account}</Text>
                </View>

                {/* PROFILE CARD */}
                <View style={styles.profileBox}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>
                            {user?.name?.charAt(0)?.toUpperCase() ?? "S"}
                        </Text>
                    </View>
                    <Text style={styles.name}>{user?.name ?? "Nama Pengguna"}</Text>
                    <Text style={styles.email}>{user?.email ?? "email@mail.com"}</Text>

                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editButtonText}>{t.changeProfile}</Text>
                    </TouchableOpacity>
                </View>

                {/* MENU LIST */}
                <View style={styles.menuContainer}>
                    <MenuItem
                        icon="globe-outline"
                        label={t.language}
                        value={
                            language === "id"
                                ? translations.id.languageName
                                : translations.en.languageName
                        }
                        onPress={() => setShowLanguageModal(true)}
                    />
                    <MenuItem
                        icon="settings-outline"
                        label={t.settings}
                        onPress={() => router.push("/tohir/(main)/(account)/settings")}
                    />
                    <MenuItem icon="help-circle-outline" label={t.faq} />
                    <MenuItem icon="shield-checkmark-outline" label={t.privacy} />
                    <MenuItem icon="document-text-outline" label={t.terms} />
                    <MenuItem icon="code-working-outline" label={t.lisensi} />
                    <MenuItem icon="call-outline" label={t.contact} />
                </View>
            </ScrollView>

            {/* LANGUAGE BOTTOM SHEET */}
            <Modal visible={showLanguageModal} transparent animationType="slide">
                <TouchableWithoutFeedback onPress={() => setShowLanguageModal(false)}>
                    <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>

                <View style={styles.bottomSheet}>
                    <Text style={styles.modalTitle}>{t.selectLang}</Text>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => changeLanguage("id")}
                    >
                        <Text>Bahasa Indonesia {language === "id" ? "✅" : ""}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.option}
                        onPress={() => changeLanguage("en")}
                    >
                        <Text>English {language === "en" ? "✅" : ""}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

            {/* LOGOUT CONFIRMATION */}
            <Modal visible={showLogoutConfirm} transparent animationType="slide">
                <TouchableWithoutFeedback onPress={() => setShowLogoutConfirm(false)}>
                    <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>

                <View style={styles.bottomSheet}>
                    <Text style={[styles.modalTitle, { marginBottom: 12 }]}>
                        {t.logoutConfirmTitle}
                    </Text>
                    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <TouchableOpacity
                            onPress={() => setShowLogoutConfirm(false)}
                            style={[styles.btn, styles.btnCancel]}
                        >
                            <Text style={styles.btnCancelText}>{t.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={doLogout}
                            style={[styles.btn, styles.btnConfirm]}
                        >
                            <Text style={styles.btnConfirmText}>{t.yesLogout}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

/* ---------- STYLES ---------- */
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#F7F8FB" },

    header: {
        backgroundColor: "#6C63FF",
        height: 140,
        justifyContent: "center",
        paddingLeft: 22,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        elevation: 5,
    },
    headerTitle: { color: "#fff", fontSize: 24, fontWeight: "700" },

    profileBox: {
        backgroundColor: "#fff",
        marginTop: -35,
        marginHorizontal: 18,
        borderRadius: 18,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 3,
    },
    avatar: {
        width: 75,
        height: 75,
        borderRadius: 50,
        backgroundColor: "#6C63FF",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarText: { color: "#fff", fontWeight: "700", fontSize: 26 },
    name: { marginTop: 12, fontWeight: "700", fontSize: 18, color: "#333" },
    email: { color: "#666", marginTop: 4 },
    editButton: {
        marginTop: 10,
        backgroundColor: "#6C63FF",
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 14,
    },
    editButtonText: { color: "#fff", fontWeight: "600" },

    menuContainer: {
        marginTop: 18,
        marginHorizontal: 18,
        backgroundColor: "#fff",
        borderRadius: 14,
        overflow: "hidden",
        elevation: 2,
    },
    menuItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: "#f0f0f0",
    },
    menuLeft: { flexDirection: "row", alignItems: "center" },
    menuText: { fontSize: 16, color: "#333" },
    menuValue: { marginRight: 8, color: "#666" },

    modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.35)" },
    bottomSheet: {
        backgroundColor: "#fff",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalTitle: { fontWeight: "700", fontSize: 17, marginBottom: 10 },
    option: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: "#eee",
        fontSize: 16,
    },

    btn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 10 },
    btnCancel: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        marginRight: 8,
    },
    btnConfirm: { backgroundColor: "#E53935" },
    btnCancelText: { color: "#333" },
    btnConfirmText: { color: "#fff" },
});
