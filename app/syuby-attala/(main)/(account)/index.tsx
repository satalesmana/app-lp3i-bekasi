import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function SyubyIndex() {
  const router = useRouter(); // <--- Tetap digunakan untuk navigasi
  const dispatch = useDispatch(); // <--- Tetap ada (mungkin diperlukan di masa depan)
  const user = useSelector((state: any) => state.user?.user);

  // UI states (HANYA UNTUK BAHASA)
  const [language, setLanguage] = useState<'id' | 'en'>('id');
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  // HAPUS state untuk settings dan logout
  // const [showSettingsView, setShowSettingsView] = useState(false); // <-- DIHAPUS
  // const [showLogoutConfirm, setShowLogoutConfirm] = useState(false); // <-- DIHAPUS

  // translasi sederhana
  const translations: any = {
    // ... (Objek translasi Anda tidak saya ubah)
    id: {
      account: 'Akun',
      changeProfile: 'Ubah Profil',
      language: 'Bahasa',
      languageName: 'Bahasa Indonesia',
      settings: 'Pengaturan',
      faq: 'FAQ',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan',
      lisensi: 'Lisensi Perangkat Lunak',
      contact: 'Kontak Kami',
      selectLang: 'Pilih Bahasa',
      // Teks untuk settings/logout tidak diperlukan di sini lagi
    },
    en: {
      account: 'Account',
      changeProfile: 'Edit Profile',
      language: 'Language',
      languageName: 'English',
      settings: 'Settings',
      faq: 'FAQ',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      lisensi: 'Lisensi Perangkat Lunak',
      contact: 'Contact Us',
      selectLang: 'Select Language',
    },
  };

  // current text
  const t = translations[language];

  // load saved language from AsyncStorage
  useEffect(() => {
    (async () => {
      try {
        const saved = await AsyncStorage.getItem('app_language');
        if (saved === 'id' || saved === 'en') setLanguage(saved);
      } catch (e) {
        // ignore
      }
    })();
  }, []);

  // change language (stores code 'id' or 'en')
  const changeLanguage = async (lang: 'id' | 'en') => {
    setLanguage(lang);
    await AsyncStorage.setItem('app_language', lang);
    setShowLanguageModal(false);
  };

  // HAPUS fungsi logout (pindah ke settings.tsx)
  // const confirmLogout = () => { ... }; // <-- DIHAPUS
  // const doLogout = () => { ... }; // <-- DIHAPUS

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
        {icon && <Ionicons name={icon} size={18} color={danger ? '#d9534f' : '#555'} style={{ marginRight: 10 }} />}
        <Text style={[styles.menuText, danger && { color: '#d9534f' }]}>{label}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {value ? <Text style={styles.menuValue}>{value}</Text> : null}
        <Ionicons name="chevron-forward-outline" size={18} color="#999" />
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <ImageBackground
        // PASTIKAN PATH INI BENAR (gunakan '..')
        source={require('@/assets/images/illustration.png')}
        style={styles.header}
        resizeMode="cover"
      >
        <View style={styles.headerOverlay}>
          <Text style={styles.headerTitle}>{t.account}</Text>
        </View>
      </ImageBackground>

      {/* PROFILE CARD */}
      <View style={styles.profileBox}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user?.name?.charAt(0)?.toUpperCase() ?? 'S'}</Text>
        </View>
        <Text style={styles.name}>{user?.name ?? 'Nama Pengguna'}</Text>
        <Text style={styles.email}>{user?.email ?? 'email@mail.com'}</Text>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            /* implement edit profile later */
          }}
        >
          <Text style={styles.editButtonText}>{t.changeProfile}</Text>
        </TouchableOpacity>
      </View>

      {/* MAIN VIEW: HANYA MENU LIST */}
      <View style={styles.menuContainer}>
        <MenuItem icon="globe-outline" label={t.language} value={language === 'id' ? translations.id.languageName : translations.en.languageName} onPress={() => setShowLanguageModal(true)} />

        <MenuItem
          icon="settings-outline"
          label={t.settings}
          // INI BAGIAN YANG DIUBAH: Menggunakan router.push
          onPress={() => router.push('/syuby-attala/(main)/(account)/settings')}
        />

        <MenuItem icon="help-circle-outline" label={t.faq} onPress={() => {}} />
        <MenuItem icon="shield-checkmark-outline" label={t.privacy} onPress={() => {}} />
        <MenuItem icon="document-text-outline" label={t.terms} onPress={() => {}} />
        <MenuItem icon="code-working-outline" label={t.lisensi} onPress={() => {}} />
        <MenuItem icon="call-outline" label={t.contact} onPress={() => {}} />
      </View>

      {/* BAGIAN 'ELSE' (SETTINGS VIEW) SUDAH DIHAPUS */}

      {/* LANGUAGE BOTTOM SHEET (TETAP DI SINI) */}
      <Modal visible={showLanguageModal} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setShowLanguageModal(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>

        <View style={styles.bottomSheet}>
          <Text style={styles.modalTitle}>{t.selectLang}</Text>

          <TouchableOpacity style={styles.option} onPress={() => changeLanguage('id')}>
            <Text>Bahasa Indonesia {language === 'id' ? '✅' : ''}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => changeLanguage('en')}>
            <Text>English {language === 'en' ? '✅' : ''}</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      {/* MODAL LOGOUT CONFIRMATION SUDAH DIHAPUS (PINDAH KE settings.tsx) */}
    </ScrollView>
  );
}

/* ============ STYLES (TIDAK BERUBAH) ============ */

// Definisikan warna baru di sini agar mudah diganti
const newPrimaryColor = '#004AAD'; // Biru Tua (untuk header tint & teks tombol)
const newAvatarColor = '#007BFF'; // Biru Cerah (untuk avatar)
const newButtonBgColor = '#E6F2FF'; // Biru Sangat Muda (untuk bg tombol)

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f7fb' }, // Style untuk header (sekarang ImageBackground)

  header: {
    height: 140, // Hapus backgroundColor agar gambar terlihat
  }, // Style untuk overlay warna transparan di atas gambar

  headerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 74, 173, 0.8)', // Ini adalah newPrimaryColor (#004AAD) dengan 80% opacity
    justifyContent: 'center',
    paddingLeft: 18,
  },
  headerTitle: { color: '#fff', fontSize: 22, fontWeight: '700' },

  profileBox: {
    backgroundColor: '#fff',
    marginTop: -40, // Ini yang membuat layout tetap sama (menimpa header)
    marginHorizontal: 18,
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 50,
    backgroundColor: newAvatarColor, // <-- Ganti Warna
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { color: '#fff', fontWeight: '700', fontSize: 22 },
  name: { marginTop: 12, fontWeight: '700', fontSize: 18, color: '#333' },
  email: { color: '#666', marginTop: 4 },

  editButton: {
    marginTop: 10,
    backgroundColor: newButtonBgColor, // <-- Ganti Warna
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 14,
  },
  editButtonText: {
    color: newPrimaryColor, // <-- Ganti Warna
    fontWeight: '600',
  },

  menuContainer: {
    marginTop: 18,
    marginHorizontal: 18,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },

  menuItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, paddingHorizontal: 16, borderBottomWidth: 1, borderColor: '#eee' },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  menuText: { fontSize: 15, color: '#333' },
  menuValue: { marginRight: 8, color: '#666' } /* SETTINGS VIEW (STYLES INI TIDAK LAGI DIGUNAKAN DI FILE INI) */ /* MODAL / BOTTOM SHEET (UNTUK BAHASA) */,

  //   settingsContainer: { marginTop: 18, marginHorizontal: 18 },
  //   backRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  //   settingsTitle: { fontSize: 20, fontWeight: '700', marginLeft: 6, marginVertical: 14, color: '#333' },
  //   settingsList: { marginTop: 6, backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden' },

  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)' },
  bottomSheet: { backgroundColor: '#fff', padding: 18, borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  modalTitle: { fontWeight: '700', fontSize: 16, marginBottom: 12, color: '#333' },
  option: { paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee' } /* confirmation buttons (TIDAK LAGI DIGUNAKAN DI FILE INI) */,
  //   btn: { paddingVertical: 10, paddingHorizontal: 14, borderRadius: 10 },
  //   btnCancel: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', marginRight: 8 },
  //   btnConfirm: { backgroundColor: '#d9534f' },
  //   btnCancelText: { color: '#333' },
  //   btnConfirmText: { color: '#fff' },
});
