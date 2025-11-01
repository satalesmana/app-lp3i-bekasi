import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react'; // <-- Tambahkan React
import {
  Alert, // <-- 1. Impor Alert untuk popup
  SafeAreaView, // <-- 2. Impor SafeAreaView untuk tata letak
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';

export default function SettingsPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  // 3. Modifikasi fungsi handleLogout
  const handleLogout = () => {
    Alert.alert(
      'Keluar Akun', // Judul Popup
      'Apakah Anda yakin ingin keluar?', // Pesan Popup
      [
        {
          text: 'Batal',
          onPress: () => console.log('Batal ditekan'), // Aksi jika batal
          style: 'cancel',
        },
        {
          text: 'Ya, Keluar',
          onPress: () => {
            // Logika logout Anda yang asli
            dispatch({ type: 'LOGOUT' });
            router.replace('/syuby-attala/login');
          },
          style: 'destructive', // 'destructive' memberi warna merah (di iOS)
        },
      ]
    );
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
        <Ionicons name={icon} size={20} color={color ?? '#333'} />
        <Text style={[styles.menuText, { color: color ?? '#333' }]}>{label}</Text>
      </View>
      <Ionicons name="chevron-forward-outline" size={18} color="#999" />
    </TouchableOpacity>
  );

  return (
    // 4. Ganti <View> menjadi <SafeAreaView>
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        // 5. (Opsional) Gunakan router.back() agar lebih standar
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="#004AAD" />
      </TouchableOpacity>

      <Text style={styles.title}>Pengaturan</Text>

      <MenuItem icon="lock-closed-outline" label="Ganti Password" />
      <MenuItem icon="person-remove-outline" label="Hapus Akun" />
      <MenuItem icon="power-outline" label="Log out" color="red" onPress={handleLogout} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    // paddingTop: 50, // <-- 6. Hapus ini, SafeAreaView sudah menanganinya
  },
  backButton: {
    marginBottom: 10,
    width: 40, // Beri area klik yang lebih besar
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 25,
    color: '#333',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  menuText: {
    fontSize: 16,
  },
});
