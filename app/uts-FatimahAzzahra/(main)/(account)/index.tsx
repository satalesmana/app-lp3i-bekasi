import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function AccountScreen() {
  const [language, setLanguage] = useState("id");
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const profile = {
    name: "Fatimah Azzahra",
    email: "fatim@gmail.com",
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
        <Ionicons name={icon} size={20} color="#7d7d7d" style={{ marginRight: 8 }} />
        <Text style={styles.menuText}>{title}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {rightText && <Text style={styles.rightText}>{rightText}</Text>}
        <Ionicons name="chevron-forward" size={18} color="#9a9a9a" />
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

            {/* Avatar Circle Letter */}
            <View style={styles.avatarBox}>
              <Text style={styles.avatarText}>
                {profile.name.charAt(0)}
              </Text>
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

        {/* Menu List */}
        <MenuItem
          icon="globe-outline"
          title={t.language}
          rightText={language === "id" ? t.indonesia : t.english}
          onPress={() => setShowLanguageModal(true)}
        />
        <MenuItem
            icon="settings-outline"
            title={t.settings}
            onPress={() => router.push("/uts-FatimahAzzahra/(main)/(account)/pengaturan")}
            />

        <MenuItem icon="help-circle-outline" title={t.faq} />
        <MenuItem icon="shield-checkmark-outline" title={t.privacy} />
        <MenuItem icon="document-text-outline" title={t.terms} />
        <MenuItem icon="barcode-outline" title={t.license} />
        <MenuItem icon="call-outline" title={t.contact} />

        <Text style={styles.versionText}>{t.version}</Text>
      </ScrollView>

      {/* Language Bottom Sheet */}
     {/* Language Bottom Sheet */}
<Modal visible={showLanguageModal} transparent animationType="slide">
  <TouchableOpacity 
    style={styles.modalOverlay} 
    activeOpacity={1}
    onPress={() => setShowLanguageModal(false)}  // Tap area luar = close
  >
    <TouchableOpacity 
      activeOpacity={1} 
      style={styles.bottomSheet}
      onPress={() => {}} // Supaya tap dalam sheet tidak menutup modal
    >
      <View style={styles.sheetHandle} />

      <Text style={styles.sheetTitle}>{t.chooseLang}</Text>

      <TouchableOpacity 
        style={[styles.langOption, language === "id" && styles.langActive]} 
        onPress={() => selectLanguage("id")}
      >
        <Text style={styles.langText}>{t.indonesia}</Text>
        {language === "id" && <Ionicons name="checkmark" size={20} />}
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.langOption, language === "en" && styles.langActive]} 
        onPress={() => selectLanguage("en")}
      >
        <Text style={styles.langText}>{t.english}</Text>
        {language === "en" && <Ionicons name="checkmark" size={20} />}
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

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    backgroundColor: "#6b5effff",
    height: 200,
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  headerText: { 
    color: "#fff", 
    fontSize: 24, 
    fontWeight: "bold" 
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
    width: 410,
    height: 100,
    opacity: 0.5,
    top: 100,
  },

  profileCard: {
    backgroundColor: "#fff",
    marginTop: -50,
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    elevation: 4,
  },

  profileRow: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 15 
  },

  // New Avatar Styles
  avatarBox: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#ff7eb8",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },

  name: { fontSize: 18, fontWeight: "bold" },
  email: { fontSize: 14, color: "gray" },

  editButton: {
    backgroundColor: "#5c4dfc",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  editButtonText: { color: "#fff", fontSize: 15, fontWeight: "600" },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#fff",
  },
  menuText: { fontSize: 15 },
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
  langActive: { backgroundColor: "#f6f4ff" },
  langText: { fontSize: 15 },
  cancelText: {
    textAlign: "center",
    marginTop: 12,
    color: "#5c4dfc",
    fontWeight: "600",
  },
});