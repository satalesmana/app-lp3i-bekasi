import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { supabase } from "@/lib/supabase";
import { ImagePicker } from "@/componets/ImgPicker";
import { ButtonPrimary } from "@/componets/myButton";

export default function PostFormPage() {
  const [post, setPost] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSave = async () => {
    if (!post.trim()) {
      Alert.alert("Validasi", "Post tidak boleh kosong");
      return;
    }

    try {
      setLoading(true);

      // 🔥 ambil user login
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user?.email) {
        Alert.alert("Error", "User belum login");
        return;
      }

      // 🔥 payload sesuai struktur table
      const payload = {
        post: post,
        img: imageUrl, // boleh null
        created_by: {
          email: session.user.email,
        },
      };

      const { error } = await supabase
        .from("new_post")
        .insert(payload);

      if (error) {
        console.log("Insert error:", error);
        Alert.alert("Error", "Gagal menyimpan post");
        return;
      }

      router.back();
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Post Message</Text>

      <TextInput
        style={styles.textInput}
        multiline
        value={post}
        onChangeText={setPost}
        placeholder="Tulis postingan..."
        maxLength={200}
      />

      {/* 🔥 IMAGE PICKER */}
      <ImagePicker
        label="Pilih Gambar"
        onSuccesUpload={(url) => setImageUrl(url)}
      />

      {/* 🔥 BUTTON */}
      <ButtonPrimary
        label={loading ? "Menyimpan..." : "Simpan Post"}
        onPress={onSave}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  textInput: {
    padding: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    height: 160,
    borderRadius: 8,
    textAlignVertical: "top",
    marginBottom: 12,
  },
});
