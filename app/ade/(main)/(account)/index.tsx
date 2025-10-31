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
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function AdeIndex() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user?.user);

  // UI states
  const [language, setLanguage] = useState<"id" | "en">("id"); // simpan dalam kode: id / en
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showSettingsView, setShowSettingsView] = useState(false); // kalau true tampilkan halaman Pengaturan di halaman yg sama
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // translasi sederhana
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
      lisensi: "Lisensi Perangkat Lunak",
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

  // current text
  const t = translations[language];

  // load saved language from AsyncStorage
  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem("app_language");
        if (saved === "id" || saved === "en") setLanguage(saved);
      } catch (e) {
        // ignore
      }
    })();
  }, []);

  // change language (stores code 'id' or 'en')
  const changeLanguage = async (lang: "id" | "en") => {
    setLanguage(lang);
    await AsyncStorage.setItem("app_language", lang);
    setShowLanguageModal(false);
  };

  // logout with confirmation
  const confirmLogout = () => {
    setShowLogoutConfirm(true);
  };

  const doLogout = () => {
    dispatch({ type: "LOGOUT" });
    setShowLogoutConfirm(false);
    // replace ke login sesuai struktur folder
    router.replace("/ade/login");
  };

  // MenuItem component (icon optional)
  type MenuItemProps = {
    icon?: keyof typeof Ionicons.glyphMap;
    label: string;
    value?: string;
    onPress?: () => void;
    danger?: boolean;
  };

  const MenuItem: React.FC<MenuItemProps> = ({ icon, label, value, onPress, danger }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.menuLeft}>
        {icon && <Ionicons name={icon} size={18} color={danger ? "#d9534f" : "#666"} style={{ marginRight: 10 }} />}
        <Text style={[styles.menuText, danger && { color: "#d9534f" }]}>{label}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {value ? <Text style={styles.menuValue}>{value}</Text> : null}
        <Ionicons name="chevron-forward-outline" size={18} color="#999" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{t.account}</Text>
      </View>

      {/* PROFILE CARD */}
      <View style={styles.profileBox}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user?.name?.charAt(0)?.toUpperCase() ?? "S"}</Text>
        </View>
        <Text style={styles.name}>{user?.name ?? "Nama Pengguna"}</Text>
        <Text style={styles.email}>{user?.email ?? "email@mail.com"}</Text>

        <TouchableOpacity style={styles.editButton} onPress={() => {/* implement edit profile later */}}>
          <Text style={styles.editButtonText}>{t.changeProfile}</Text>
        </TouchableOpacity>
      </View>

      {/* MAIN VIEW: either menu list OR settings view */}
      {!showSettingsView ? (
        <View style={styles.menuContainer}>
          <MenuItem
            icon="globe-outline"
            label={t.language}
            value={language === "id" ? translations.id.languageName : translations.en.languageName}
            onPress={() => setShowLanguageModal(true)}
          />

          <MenuItem
            icon="settings-outline"
            label={t.settings}
            onPress={() => router.replace("/ade/(main)/(account)/settings")}
          />


          <MenuItem icon="help-circle-outline" label={t.faq} onPress={() => {}} />
          <MenuItem icon="shield-checkmark-outline" label={t.privacy} onPress={() => {}} />
          <MenuItem icon="document-text-outline" label={t.terms} onPress={() => {}} />
          <MenuItem icon="code-working-outline" label={t.lisensi} onPress={() => {}} />
          <MenuItem icon="call-outline" label={t.contact} onPress={() => {}} />
        </View>
      ) : (
        // SETTINGS VIEW (di dalam index.tsx)
        <View style={styles.settingsContainer}>
          <TouchableOpacity style={styles.backRow} onPress={() => setShowSettingsView(false)}>
            <Ionicons name="chevron-back-outline" size={22} color="#4A4A4A" />
            <Text style={styles.settingsTitle}>{t.settings}</Text>
          </TouchableOpacity>

          <View style={styles.settingsList}>
            <MenuItem icon="lock-closed-outline" label={t.changePassword} onPress={() => {}} />
            <MenuItem icon="person-remove-outline" label={t.deleteAccount} onPress={() => {}} />
            <MenuItem icon="power-outline" label={t.logout} danger onPress={confirmLogout} />
          </View>
        </View>
      )}

      {/* LANGUAGE BOTTOM SHEET */}
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

      {/* LOGOUT CONFIRMATION BOTTOM SHEET */}
      <Modal visible={showLogoutConfirm} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setShowLogoutConfirm(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.bottomSheet}>
          <Text style={[styles.modalTitle, { marginBottom: 12 }]}>{t.logoutConfirmTitle}</Text>

          <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 10 }}>
            <TouchableOpacity onPress={() => setShowLogoutConfirm(false)} style={[styles.btn, styles.btnCancel]}>
              <Text style={styles.btnCancelText}>{t.cancel}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={doLogout} style={[styles.btn, styles.btnConfirm]}>
              <Text style={styles.btnConfirmText}>{t.yesLogout}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

/* ============ styles ============ */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7fb" },
  header: { backgroundColor: "#635BFF", height: 140, justifyContent: "center", paddingLeft: 18 },
  headerTitle: { color: "#fff", fontSize: 22, fontWeight: "700" },

  profileBox: {
    backgroundColor: "#fff",
    marginTop: -40,
    marginHorizontal: 18,
    borderRadius: 14,
    padding: 18,
    alignItems: "center",
    elevation: 3,
  },
  avatar: {
    width: 62, height: 62, borderRadius: 50, backgroundColor: "#7B61FF",
    justifyContent: "center", alignItems: "center",
  },
  avatarText: { color: "#fff", fontWeight: "700", fontSize: 22 },
  name: { marginTop: 12, fontWeight: "700", fontSize: 18 },
  email: { color: "#666", marginTop: 4 },

  editButton: { marginTop: 10, backgroundColor: "#635BFF", paddingHorizontal: 18, paddingVertical: 8, borderRadius: 14 },
  editButtonText: { color: "#fff", fontWeight: "600" },

  menuContainer: { marginTop: 18, marginHorizontal: 18, backgroundColor: "#fff", borderRadius: 12, overflow: "hidden" },

  menuItem: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 16, paddingHorizontal: 16, borderBottomWidth: 1, borderColor: "#eee" },
  menuLeft: { flexDirection: "row", alignItems: "center" },
  menuText: { fontSize: 15, color: "#333" },
  menuValue: { marginRight: 8, color: "#666" },

  /* SETTINGS VIEW */
  settingsContainer: { marginTop: 18, marginHorizontal: 18 },
  backRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  settingsTitle: { fontSize: 20, fontWeight: "700", marginLeft: 6, marginVertical: 14 },
  settingsList: { marginTop: 6, backgroundColor: "#fff", borderRadius: 12, overflow: "hidden" },

  /* MODAL / BOTTOM SHEET */
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.35)" },
  bottomSheet: { backgroundColor: "#fff", padding: 18, borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  modalTitle: { fontWeight: "700", fontSize: 16, marginBottom: 12 },
  option: { paddingVertical: 12, borderBottomWidth: 1, borderColor: "#eee" },

  /* confirmation buttons */
  btn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 10 },
  btnCancel: { backgroundColor: "#fff", borderWidth: 1, borderColor: "#ccc", marginRight: 8 },
  btnConfirm: { backgroundColor: "#d9534f" },
  btnCancelText: { color: "#333" },
  btnConfirmText: { color: "#fff" },
});