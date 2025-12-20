import { uploadImage } from "@/lib/supabase";
import * as ExpoImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  label?: string;
  onSuccesUpload: (uri: string) => void;
}

export const ImagePicker = ({ label, onSuccesUpload }: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const pickImage = async () => {
    try {
      const permission =
        await ExpoImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        Alert.alert("Permission Required", "Izin galeri diperlukan");
        return;
      }

      const result = await ExpoImagePicker.launchImageLibraryAsync({
  mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [4, 3], // 🔥 RASIO SAMA DENGAN CARD
  quality: 0.7,
  base64: true,
});

      if (result.canceled) return;

      setIsLoading(true);

      const asset = result.assets[0];
      if (!asset.base64) throw new Error("Base64 tidak ditemukan");

      const fileName = `image-${Date.now()}.jpg`;

      const res = await uploadImage(asset.base64, fileName);
      if (!res?.fullPath) throw new Error("Upload gagal");

      const publicUrl =
        `https://oapoiqxecblocwxilltj.storage.supabase.co/storage/v1/object/public/${res.fullPath}`;

      setImageUrl(publicUrl);
      onSuccesUpload(publicUrl);
    } catch (e) {
      console.error(e);
      Alert.alert("Error", "Gagal upload gambar");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.btnSecondary}
        onPress={pickImage}
        disabled={isLoading}
      >
        <Text style={styles.btnLabel}>
          {isLoading ? "Uploading..." : label ?? "Pilih Gambar"}
        </Text>
      </TouchableOpacity>

      {imageUrl && (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btnLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  btnSecondary: {
    marginTop: 10,
    backgroundColor: "#36079b",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
});
