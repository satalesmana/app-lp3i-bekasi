import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function AccountScreen() {
  const [language, setLanguage] = useState("id");
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const profile = {
    name: "M Zakky Almufra",
    email: "zakky@gmail.com",
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
    }
  };

  const t = translate[language];

  const MenuItem = ({ icon, title, rightText, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name={icon} size={22} color="#5A5A5A" style={{ marginRight: 10 }} />
        <Text style={styles.menuText}>{title}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {rightText && <Text style={styles.rightText}>{rightText}</Text>}
        <Ionicons name="chevron-forward" size={18} color="#B5B5B5" />
      </View>
    </TouchableOpacity>
  );

  const selectLanguage = (val) => {
    setLanguage(val);
    setShowLanguageModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header */}
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

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileRow}>
            <View style={styles.avatarBox}>
              <Text style={styles.avatarText}>{profile.name.charAt(0)}</Text>
            </View>
            <View>
              <Text style={styles.name}>{profile.name}</Text>
              <Text style={styles.email}>{profile.email}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>{t.editProfile}</Text>
          </TouchableOpacity>
        </View>

        {/* Menu */}
        <View style={styles.menuContainer}>
          <MenuItem
            icon="globe-outline"
            title={t.language}
            rightText={language === "id" ? t.indonesia : t.english}
            onPress={() => setShowLanguageModal(true)}
          />
          <MenuItem
            icon="settings-outline"
            title={t.settings}
            onPress={() => router.replace("/zakky-mufra/(main)/(account)/settings")}
            />
          <MenuItem icon="help-circle-outline" title={t.faq} />
          <MenuItem icon="shield-checkmark-outline" title={t.privacy} />
          <MenuItem icon="document-text-outline" title={t.terms} />
          <MenuItem icon="barcode-outline" title={t.license} />
          <MenuItem icon="call-outline" title={t.contact} />
        </View>

        <Text style={styles.versionText}>{t.version}</Text>
      </ScrollView>

      {/* Language Bottom Sheet */}
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
              {language === "id" && <Ionicons name="checkmark" size={20} color="#4B4BFF" />}
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.langOption, language === "en" && styles.langActive]} 
              onPress={() => selectLanguage("en")}
            >
              <Text style={styles.langText}>{t.english}</Text>
              {language === "en" && <Ionicons name="checkmark" size={20} color="#4B4BFF" />}
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

// ✨ Modernized Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F9FF" },

  header: {
    backgroundColor: "#4B4BFF",
    height: 200,
    paddingHorizontal: 24,
    justifyContent: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  headerText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  headerUserIcon: {
    position: "absolute",
    right: 30,
    top: 90,
    width: 65,
    height: 65,
    opacity: 0.9,
  },
  illustration: {
    position: "absolute",
    width: 420,
    height: 110,
    opacity: 0.3,
  },

  profileCard: {
    backgroundColor: "#fff",
    marginTop: -50,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  avatarBox: {
    width: 65,
    height: 65,
    borderRadius: 65,
    backgroundColor: "#7A6FFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  avatarText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },
  name: { fontSize: 18, fontWeight: "600", color: "#222" },
  email: { fontSize: 14, color: "#777" },

  editButton: {
    backgroundColor: "#4B4BFF",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  editButtonText: { color: "#fff", fontSize: 15, fontWeight: "600" },

  menuContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
  },
  menuText: { fontSize: 15, color: "#333" },
  rightText: { fontSize: 14, color: "#7d7d7d", marginRight: 6 },

  versionText: {
    textAlign: "center",
    color: "#9A9A9A",
    marginTop: 16,
    marginBottom: 25,
    fontSize: 13,
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  bottomSheet: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  sheetHandle: {
    width: 50,
    height: 5,
    backgroundColor: "#ccc",
    alignSelf: "center",
    borderRadius: 3,
    marginBottom: 15,
  },
  sheetTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 15,
    textAlign: "center",
  },
  langOption: {
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  langActive: { backgroundColor: "#EFF1FF" },
  langText: { fontSize: 15, color: "#333" },
  cancelText: {
    textAlign: "center",
    marginTop: 15,
    color: "#4B4BFF",
    fontWeight: "600",
    fontSize: 15,
  },
});
