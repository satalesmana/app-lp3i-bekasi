import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { router } from "expo-router";
import { setUsers } from "../../store/reducer/userSlice";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const onSubmitLogin = () => {
    if (email === "gema@mail.com" && password === "tes123") {
      // Simpan data user ke redux
      dispatch(
        setUsers({
          name: "Gema Satya Nugroho",
          email: "gema@mail.com",
          gender: "Pria",
          dateOfBirth: "28-01-2005",
          address: "Jl. Demo tes",
        })
      );

      // Navigasi ke halaman home
      router.replace("/gema_satya_nugroho/homePage");
      return;
    }

    Alert.alert("Info", "Login Gagal", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>LOGIN</Text>

      {/* Email */}
      <Text style={styles.label}>E-MAIL</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      {/* Password */}
      <Text style={styles.label}>PASSWORD</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.showBtn}
        >
          <Text>{showPassword ? "🙈" : "👁️"}</Text>
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <Pressable onPress={onSubmitLogin} style={styles.btnLogin}>
        <Text style={styles.btnLoginText}>LOGIN</Text>
      </Pressable>

      {/* Or Login With */}
      <Text style={styles.orText}>OR LOGIN WITH</Text>

      {/* Google Login */}
      <TouchableOpacity style={styles.googleBtn}>
        <Image
          source={require("@/assets/images/google_logo.png")}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>LOGIN WITH GOOGLE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 40,
    marginTop: 100,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 45,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    height: 45,
    marginBottom: 8,
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 12,
  },
  showBtn: {
    paddingHorizontal: 5,
  },
  forgotPassword: {
    color: "#2F80ED",
    fontSize: 12,
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  btnLogin: {
    backgroundColor: "#27AE60",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  btnLoginText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    color: "#888",
    marginBottom: 20,
    fontSize: 12,
    fontWeight: "500",
  },
  googleBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 25,
    height: 50,
    justifyContent: "center",
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: "contain",
  },
  googleText: {
    fontWeight: "600",
  },
});
