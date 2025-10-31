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

export default function RhezaIndex() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user?.user);

  const [language, setLanguage] = useState<"id" | "en">("id");
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showSettingsView, setShowSettingsView] = useState(false);
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
      } catch {}
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
    router.replace("/Rheza/login");
  };

  type MenuItemProps = {
    icon?: keyof typeof Ionicons.glyphMap;
    label: string;
    value?: string;
    onPress?: () => void;
    danger?: boolean;
  };

  const MenuItem: React.FC<MenuItemProps> = ({
    icon,
    label,
    value,
    onPress,
    danger,
  }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress} activeOpacity={0.7}>
      <View style={styles.menuLeft}>
        {icon && (
          <View style={[styles.iconBadge, danger && { backgroundColor: "#ffe9e8" }]}>
            <Ionicons
              name={icon}
              size={18}
              color={danger ? "#d9534f" : "#4a5cff"}
            />
          </View>
        )}
        <Text style={[styles.menuText, danger && { color: "#d9534f" }]}>{label}</Text>
      </View>

      <View style={styles.menuRight}>
        {value ? (
          <View style={styles.valueChip}>
            <Text style={styles.valueChipText}>{value}</Text>
          </View>
        ) : null}
        <Ionicons name="chevron-forward-outline" size={18} color="#9da3b0" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header dengan aksen diagonal */}
      <View style={styles.header}>
        <Text style={styles.headerBadge}>PROFILE</Text>
        <Text style={styles.headerTitle}>{t.account}</Text>

        <View style={styles.headerAccent} />
      </View>

     {/* Profile Card — avatar di samping */}
        <View style={styles.profileBox}>
        <View style={styles.profileRow}>
            <View style={styles.avatarWrap}>
            <View style={styles.avatarRing}>
                <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                    {user?.name?.charAt(0)?.toUpperCase() ?? "S"}
                </Text>
                </View>
            </View>
            </View>

            <View style={styles.profileInfo}>
            <Text style={styles.name}>{user?.name ?? "Nama Pengguna"}</Text>
            <Text style={styles.email}>{user?.email ?? "email@mail.com"}</Text>
            </View>

            <TouchableOpacity style={styles.editPill} onPress={() => {}}>
            <Ionicons name="create-outline" size={14} color="#fff" />
            <Text style={styles.editPillText}>{t.changeProfile}</Text>
            </TouchableOpacity>
        </View>
        </View>

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
            onPress={() => router.push("/Rheza/(main)/(account)/settings")}
          />

          <MenuItem icon="help-circle-outline" label={t.faq} onPress={() => {}} />
          <MenuItem icon="shield-checkmark-outline" label={t.privacy} onPress={() => {}} />
          <MenuItem icon="document-text-outline" label={t.terms} onPress={() => {}} />
          <MenuItem icon="code-working-outline" label={t.lisensi} onPress={() => {}} />
          <MenuItem icon="call-outline" label={t.contact} onPress={() => {}} />
        </View>
      ) : (
        <View style={styles.settingsContainer}>
          <TouchableOpacity style={styles.backRow} onPress={() => setShowSettingsView(false)}>
            <Ionicons name="chevron-back-outline" size={20} color="#4A4A4A" />
            <Text style={styles.settingsTitle}>{t.settings}</Text>
          </TouchableOpacity>

          <View style={styles.settingsList}>
            <MenuItem icon="lock-closed-outline" label={t.changePassword} onPress={() => {}} />
            <MenuItem icon="person-remove-outline" label={t.deleteAccount} onPress={() => {}} />
            <MenuItem icon="power-outline" label={t.logout} danger onPress={confirmLogout} />
          </View>
        </View>
      )}

      {/* Language Sheet */}
      <Modal visible={showLanguageModal} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setShowLanguageModal(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.bottomSheet}>
          <View style={styles.sheetHandle} />
          <Text style={styles.modalTitle}>{t.selectLang}</Text>

          <TouchableOpacity style={styles.option} onPress={() => changeLanguage("id")}>
            <View style={styles.radioDotOuter}>
              {language === "id" && <View style={styles.radioDotInner} />}
            </View>
            <Text style={styles.optionText}>Bahasa Indonesia</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => changeLanguage("en")}>
            <View style={styles.radioDotOuter}>
              {language === "en" && <View style={styles.radioDotInner} />}
            </View>
            <Text style={styles.optionText}>English</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* Logout Sheet */}
      <Modal visible={showLogoutConfirm} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setShowLogoutConfirm(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.bottomSheet}>
          <View style={styles.sheetHandle} />
          <Text style={[styles.modalTitle, { marginBottom: 8 }]}>{t.logoutConfirmTitle}</Text>

          <View style={styles.actionRow}>
            <TouchableOpacity onPress={() => setShowLogoutConfirm(false)} style={[styles.btn, styles.btnGhost]}>
              <Text style={styles.btnGhostText}>{t.cancel}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={doLogout} style={[styles.btn, styles.btnDanger]}>
              <Ionicons name="power-outline" size={16} color="#fff" />
              <Text style={styles.btnDangerText}>{t.yesLogout}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const BG = "#F4F6FA";
const CARD = "#FFFFFF";
const INK = "#1F2430";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: BG },

  /* ===== Header: beda aliran (badge + diagonal accent) ===== */
  header: {
    height: 150,
    paddingHorizontal: 18,
    paddingTop: 24,
    justifyContent: "center",
    backgroundColor: "#5C6CFF",
    overflow: "hidden",
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.18)",
    color: "#fff",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 8,
  },
  headerTitle: { color: "#fff", fontSize: 24, fontWeight: "800" },
  headerAccent: {
    position: "absolute",
    right: -40,
    bottom: -40,
    width: 180,
    height: 180,
    backgroundColor: "rgba(255,255,255,0.10)",
    transform: [{ rotate: "25deg" }],
    borderRadius: 24,
  },
profileBox: {
    backgroundColor: CARD,
    marginTop: -20,
    marginHorizontal: 18,
    borderRadius: 20,
    padding: 16,
    // soft shadow
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },

  /* BARU: baris horizontal */
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },

  /* avatar tetap, cuma kecil perubahan margin */
  avatarWrap: { padding: 6, borderRadius: 999, backgroundColor: "#EEF0FF" },
  avatarRing: {
    padding: 3,
    borderRadius: 999,
    backgroundColor: "#fff",
    shadowColor: "#4a5cff",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 50,
    backgroundColor: "#4A5CFF",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: { color: "#fff", fontWeight: "800", fontSize: 22, letterSpacing: 0.5 },

  /* BARU: info text di tengah */
  profileInfo: {
    flex: 1,
    justifyContent: "center",
  },

  name: { fontSize: 18, fontWeight: "800", color: INK },
  email: { color: "#6B7280", marginTop: 2 },

  /* GANTI: tombol jadi pill kecil di kanan */
  editPill: {
    backgroundColor: "#4A5CFF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  editPillText: { color: "#fff", fontWeight: "700", fontSize: 12 },

  editButton: {
    marginTop: 12,
    backgroundColor: "#4A5CFF",
    paddingHorizontal: 16,
    paddingVertical: 9,
    borderRadius: 12,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  editButtonText: { color: "#fff", fontWeight: "700" },

  /* ===== Menu List: icon badge + chip value + divider halus ===== */
  menuContainer: {
    marginTop: 18,
    marginHorizontal: 18,
    backgroundColor: CARD,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(20,24,38,0.06)",
  },
  menuLeft: { flexDirection: "row", alignItems: "center" },
  iconBadge: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: "#EEF0FF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  menuText: { fontSize: 15, color: INK, fontWeight: "600" },
  menuRight: { flexDirection: "row", alignItems: "center", gap: 8 },

  valueChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "#F1F5FF",
    borderWidth: 1,
    borderColor: "#E1E6FF",
  },
  valueChipText: { fontSize: 12, color: "#3C4BFF", fontWeight: "700" },

  /* ===== Settings ===== */
  settingsContainer: { marginTop: 18, marginHorizontal: 18 },
  backRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  settingsTitle: { fontSize: 20, fontWeight: "800", marginLeft: 4, marginVertical: 12 },
  settingsList: {
    marginTop: 8,
    backgroundColor: CARD,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  /* ===== Bottom Sheet: handle + radio custom ===== */
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.35)" },
  bottomSheet: {
    backgroundColor: CARD,
    padding: 18,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sheetHandle: {
    width: 44,
    height: 5,
    borderRadius: 999,
    backgroundColor: "#DFE3F0",
    alignSelf: "center",
    marginBottom: 10,
  },
  modalTitle: { fontWeight: "800", fontSize: 16, marginBottom: 10, color: INK },
  option: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(20,24,38,0.06)",
  },
  optionText: { color: INK, fontWeight: "600" },

  radioDotOuter: {
    width: 18,
    height: 18,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#4A5CFF",
    justifyContent: "center",
    alignItems: "center",
  },
  radioDotInner: {
    width: 8,
    height: 8,
    borderRadius: 20,
    backgroundColor: "#4A5CFF",
  },

  /* ===== Buttons (sheet actions) ===== */
  actionRow: { flexDirection: "row", justifyContent: "flex-end", gap: 10 },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  btnGhost: { backgroundColor: "#fff", borderWidth: 1, borderColor: "#D8DCE8" },
  btnGhostText: { color: INK, fontWeight: "700" },
  btnDanger: { backgroundColor: "#d9534f" },
  btnDangerText: { color: "#fff", fontWeight: "800" },
});
