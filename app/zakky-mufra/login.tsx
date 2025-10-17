import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, } from "react-native";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux"; // ⬅️ Tambah Redux
import { setUsers } from '../../store/reducer/userSlice';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch(); // ⬅️ untuk mengirim data ke Redux

  // ✅ Fungsi utama login
  const onSubmitLogin = () => {
    if (email === "zakky@mail.com" && password === "tes123") {
      // Simpan data user ke Redux
      dispatch(
        setUsers({
          name: "M. Zakky Almufra",
          email: "zakky@mail.com",
          gender: "Pria",
          dateOfBirth: "01-01-2000",
          address: "Jl. Contoh No. 123, Bandung",
        })
      );

      // Navigasi ke halaman home setelah sukses
      router.replace("/zakky-mufra/home");
    } else if (email === "" || password === "") {
      Alert.alert("Login Failed", "Please enter your email and password");
    } else {
      Alert.alert("Login Failed", "Invalid email or password");
    }
  };

  return (
    <View style={styles.container}>
      {/* Gambar ilustrasi */}
      <Image
        source={require("@/assets/images/tali.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Welcome text */}
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>sign in to access your account</Text>

      {/* Input Email */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Input Password */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Tombol Login */}
      <TouchableOpacity style={styles.button} onPress={onSubmitLogin}>
        <Text style={styles.buttonText}>Next ➜</Text>
      </TouchableOpacity>

      {/* Register */}
      <View style={styles.registerWrapper}>
        <Text style={styles.normalText}>New Member? </Text>
        <TouchableOpacity
          onPress={() => router.push("/zakky-mufra/register")}
        >
          <Text style={styles.registerText}>Register now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingTop: 60,
    alignItems: "center",
  },
  image: {
    width: "70%",
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  input: {
    padding: 12,
    fontSize: 14,
    color: "#000",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: "#aaa",
    marginRight: 5,
  },
  rememberText: {
    fontSize: 12,
    color: "#444",
  },
  forgetText: {
    fontSize: 12,
    color: "#ff4d4d",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff3b3b",
    paddingVertical: 15,
    borderRadius: 10,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  registerWrapper: {
    flexDirection: "row",
    marginTop: 20,
  },
  normalText: {
    fontSize: 13,
    color: "#000",
  },
  registerText: {
    fontSize: 13,
    color: "#ff3b3b",
    fontWeight: "600",
  },
});
