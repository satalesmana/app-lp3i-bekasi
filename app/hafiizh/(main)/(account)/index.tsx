import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    Modal,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function AccountScreen() {
  const [language, setLanguage] = useState("id");
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const profile = {
    name: "Muhammad Hafiizh Alfath",
    email: "Hafiizh@gmail.com",
  };

  const translate = {
    id: {
      account: "Akun",
      editProfile: "Ubah Profil",
      language: "Bahasa",
      settings: "Pengaturan",
      faq: "FAQ",
      privacy: "Kebijakan Privasi",
      terms: "Syarat & Ketentuan",
      license: "Lisensi Perangkat Lunak",
      contact: "Kontak Kami",
      version: "Versi 1.0.0",
      indonesia: "Bahasa Indonesia",
      english: "Bahasa Inggris",
      chooseLang: "Pilih Bahasa",
      tombol: "Batal",
    },
    en: {
      account: "Account",
      editProfile: "Edit Profile",
      language: "Language",
      settings: "Settings",
      faq: "FAQ",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      license: "Software License",
      contact: "Contact Us",
      version: "Version 1.0.0",
      indonesia: "Indonesian",
      english: "English",
      chooseLang: "Choose Language",
      tombol: "Cancel",
    },
  };

  const t = translate[language];

  const MenuItem = ({ icon, title, rightText, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name={icon} size={20} color="#6b5eff" style={{ marginRight: 8 }} />
        <Text style={styles.menuText}>{title}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {rightText && <Text style={styles.rightText}>{rightText}</Text>}
        <Ionicons name="chevron-forward" size={18} color="#c2c2c2" />
      </View>
    </TouchableOpacity>
  );

  const selectLanguage = (val) => {
    setLanguage(val);
    setShowLanguageModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.header}>
          <Text style={styles.headerText}>{t.account}</Text>

          <Image
            source={require("@/assets/images/icon-user.png")}
            style={styles.headerUserIcon}
          />

          <Image
            source={require("@/assets/images/illustration.png")}
            style={styles.illustration}
          />
        </View>

        <View style={styles.profileCard}>
        <View style={styles.profileHeader}>
            <View style={styles.avatarBox}>
            <Image
                source={require("@/assets/images/icon-user.png")}
                style={styles.avatarImage}
            />
            </View>
            <View style={styles.profileInfo}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.email}>{profile.email}</Text>
            </View>
            <TouchableOpacity style={styles.editIcon}>
            <Ionicons name="create-outline" size={20} color="#6b5eff" />
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>{t.editProfile}</Text>
        </TouchableOpacity>
        </View>

        <MenuItem
          icon="globe-outline"
          title={t.language}
          rightText={language === "id" ? t.indonesia : t.english}
          onPress={() => setShowLanguageModal(true)}
        />
        <MenuItem
            icon="settings-outline"
            title={t.settings}
            onPress={() => router.push("/hafiizh/(main)/(account)/setting")}
            />
        <MenuItem icon="help-circle-outline" title={t.faq} />
        <MenuItem icon="shield-checkmark-outline" title={t.privacy} />
        <MenuItem icon="document-text-outline" title={t.terms} />
        <MenuItem icon="barcode-outline" title={t.license} />
        <MenuItem icon="call-outline" title={t.contact} />

        <Text style={styles.versionText}>{t.version}</Text>
      </ScrollView>

      <Modal visible={showLanguageModal} transparent animationType="slide">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowLanguageModal(false)}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={styles.bottomSheet}
            onPress={() => {}}
          >
            <View style={styles.sheetHandle} />
            <Text style={styles.sheetTitle}>{t.chooseLang}</Text>

            <TouchableOpacity
              style={[styles.langOption, language === "id" && styles.langActive]}
              onPress={() => selectLanguage("id")}
            >
              <Text style={styles.langText}>{t.indonesia}</Text>
              {language === "id" && <Ionicons name="checkmark" size={20} color="#6b5eff" />}
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.langOption, language === "en" && styles.langActive]}
              onPress={() => selectLanguage("en")}
            >
              <Text style={styles.langText}>{t.english}</Text>
              {language === "en" && <Ionicons name="checkmark" size={20} color="#6b5eff" />}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowLanguageModal(false)}>
              <Text style={styles.cancelText}>{t.tombol}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffffff" },

  header: {
    backgroundColor: "#6b5eff",
    height: 200,
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  headerText: {
    color: "#fff",
    fontSize: 24,
  },

  headerUserIcon: {
    position: "absolute",
    right: 30,
    top: 90,
    width: 70,
    height: 70,
  },

  illustration: {
    position: "absolute",
    width: "100%",
    height: 100,
    opacity: 0.2,
    top: 100,
  },

  profileCard: {
  backgroundColor: "#fff",
  marginTop: -60,
  marginHorizontal: 20,
  borderRadius: 20,
  paddingVertical: 25,
  paddingHorizontal: 20,
  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 4,
  elevation: 4,
  alignItems: "center",
  marginBottom: 25,
    },

    profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    },

    avatarBox: {
    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: "#f2f0ff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    },

    avatarImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
    },

    profileInfo: {
    flex: 1,
    marginLeft: 15,
    },

    name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
    },

    email: {
    fontSize: 14,
    color: "#777",
    marginTop: 2,
    },

    editIcon: {
    backgroundColor: "#f2f0ff",
    padding: 8,
    borderRadius: 10,
    },

    editButton: {
    backgroundColor: "#6b5eff",
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 18,
    width: "100%",
    },

  editButtonText: { color: "#fff", fontSize: 15, fontWeight: "600" },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#f1f1f1",
    backgroundColor: "#fff",
  },
  menuText: { fontSize: 15, color: "#333" },
  rightText: { fontSize: 14, color: "#7d7d7d", marginRight: 4 },

  versionText: {
    textAlign: "center",
    color: "#a0a0a0",
    marginTop: 10,
    marginBottom: 20,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  bottomSheet: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sheetHandle: {
    width: 60,
    height: 5,
    backgroundColor: "#ccc",
    alignSelf: "center",
    borderRadius: 3,
    marginBottom: 10,
  },
  sheetTitle: { fontSize: 17, fontWeight: "600", marginBottom: 10 },

  langOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  langActive: { backgroundColor: "#f2f0ff" },
  langText: { fontSize: 15, color: "#333" },
  cancelText: {
    textAlign: "center",
    marginTop: 12,
    color: "#6b5eff",
    fontWeight: "600",
  },
});
