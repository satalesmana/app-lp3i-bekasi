import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, } from "react-native";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!fullName || !email || !phone || !password) {
      Alert.alert("Register Failed", "Please fill all fields");
    } else {
      Alert.alert("Register Success", `Welcome, ${fullName}!`);
    }
  };

  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Gambar ilustrasi */}
      <Image
        source={require("@/assets/images/tali.png")} // ganti sesuai asset kamu
        style={styles.image}
        resizeMode="contain"
      />

      {/* Judul */}
      <Text style={styles.title}>Get Started</Text>
      <Text style={styles.subtitle}>by creating a free account.</Text>

      {/* Input Form */}
      <TextInput
        style={styles.input}
        placeholder="Full name"
        placeholderTextColor="#aaa"
        value={fullName}
        onChangeText={setFullName}
      />

      <TextInput
        style={styles.input}
        placeholder="Valid email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone number"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Strong Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Terms & Conditions */}
      <Text style={styles.terms}>
        By checking the box you agree to our{" "}
        <Text style={styles.link}>Terms</Text> and{" "}
        <Text style={styles.link}>Conditions</Text>.
      </Text>

      {/* Tombol Next */}
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Next  ➜</Text>
      </TouchableOpacity>

      {/* Sudah punya akun */}
      <View style={styles.loginWrapper}>
        <Text style={styles.normalText}>Already a member? </Text>
        <TouchableOpacity onPress={() => router.push("/zakky-mufra/login")}>
  <Text style={styles.loginText}>Log In</Text>
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
  input: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 14,
    fontSize: 14,
    color: "#000",
    marginBottom: 15,
  },
  terms: {
    fontSize: 12,
    color: "#444",
    textAlign: "left",
    marginBottom: 25,
  },
  link: {
    color: "#ff3b3b",
    fontWeight: "600",
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
  loginWrapper: {
    flexDirection: "row",
    marginTop: 20,
  },
  normalText: {
    fontSize: 13,
    color: "#000",
  },
  loginText: {
    fontSize: 13,
    color: "#ff3b3b",
    fontWeight: "600",
  },
});
