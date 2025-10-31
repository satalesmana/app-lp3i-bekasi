import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function GemaIndex() {
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
      logout: "Log out",
      logoutConfirmTitle: "Sign out?",
      cancel: "Cancel",
      yesLogout: "Yes, Sign out",
    },
  };

  const t = translations[language];

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem("app_language");
      if (saved === "id" || saved === "en") setLanguage(saved);
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
    router.replace("/gema/login");
  };

  const MenuItem = ({ icon, label, value, onPress }: any) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuLeft}>
        {icon && <Ionicons name={icon} size={20} color="#666" style={{ marginRight: 14 }} />}
        <Text style={styles.menuText}>{label}</Text>
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
        <ImageBackground
          source={require("@/assets/images/illustration.png")}
          style={styles.header}
          imageStyle={{ resizeMode: "cover" }}
        >
          <Text style={styles.headerTitle}>{t.account}</Text>
        </ImageBackground>

        {/* PROFILE CARD */}
        <View style={styles.profileCard}>
          <Image
            source={require("@/assets/images/icon-user.png")}
            style={styles.avatarImage}
          />
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
            value={language === "id" ? t.languageName : translations.en.languageName}
            onPress={() => setShowLanguageModal(true)}
          />
          <MenuItem
            icon="settings-outline"
            label={t.settings}
            onPress={() => router.push("/gema/(main)/(account)/settingID")}
          />
          <MenuItem icon="help-circle-outline" label={t.faq} onPress={() => {}} />
          <MenuItem icon="shield-checkmark-outline" label={t.privacy} onPress={() => {}} />
          <MenuItem icon="document-text-outline" label={t.terms} onPress={() => {}} />
          <MenuItem icon="code-working-outline" label={t.lisensi} onPress={() => {}} />
          <MenuItem icon="call-outline" label={t.contact} onPress={() => {}} />
        </View>

        {/* VERSION LABEL */}
        <Text style={styles.versionText}>Versi 1.0.0</Text>
      </ScrollView>

      {/* LANGUAGE MODAL */}
      <Modal visible={showLanguageModal} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setShowLanguageModal(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.bottomSheet}>
          <Text style={styles.modalTitle}>{t.selectLang}</Text>
          <TouchableOpacity style={styles.option} onPress={() => changeLanguage("id")}>
            <Text>Bahasa Indonesia {language === "id" ? "✅" : ""}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={() => changeLanguage("en")}>
            <Text>English {language === "en" ? "✅" : ""}</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFC" },
  header: {
    height: 180,
    justifyContent: "flex-end",
    padding: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  profileCard: {
    backgroundColor: "#fff",
    marginHorizontal: 18,
    marginTop: -50,
    borderRadius: 18,
    paddingVertical: 25,
    alignItems: "center",
    elevation: 4,
  },
  avatarImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: { marginTop: 4, fontSize: 18, fontWeight: "700", color: "#222" },
  email: { color: "#666", fontSize: 14, marginBottom: 8 },
  editButton: {
    backgroundColor: "#635BFF",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 12,
    marginTop: 8,
  },
  editButtonText: { color: "#fff", fontWeight: "600", fontSize: 14 },
  menuContainer: {
    backgroundColor: "#fff",
    borderRadius: 14,
    marginHorizontal: 18,
    marginTop: 18,
    paddingVertical: 6,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  menuLeft: { flexDirection: "row", alignItems: "center" },
  menuText: { fontSize: 15, color: "#222" },
  menuValue: { fontSize: 14, color: "#777", marginRight: 6 },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9534F",
    marginTop: 20,
    marginHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 12,
  },
  logoutText: { color: "#fff", fontWeight: "600", fontSize: 15 },
  versionText: {
    textAlign: "center",
    color: "#AAA",
    marginTop: 20,
    marginBottom: 30,
    fontSize: 12,
  },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.35)" },
  bottomSheet: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  modalTitle: { fontWeight: "700", fontSize: 16, marginBottom: 12 },
  option: { paddingVertical: 12, borderBottomWidth: 1, borderColor: "#eee" },
  btn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 10 },
  btnCancel: { backgroundColor: "#fff", borderWidth: 1, borderColor: "#ccc" },
  btnConfirm: { backgroundColor: "#d9534f" },
  btnCancelText: { color: "#333" },
  btnConfirmText: { color: "#fff" },
});
