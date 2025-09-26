import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox"; // ✅ pakai expo-checkbox

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Hi, Welcome Back! 👋</Text>
      <Text style={styles.subtitle}>Hello again, you’ve been missed!</Text>

      {/* Input Email */}
      <View style={styles.inputan}>
      <View style={styles.field}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Input Password */}
      <View style={styles.field}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Please Enter Your Password"
          secureTextEntry
        />
        {/* Bisa tambahin icon 👁 kalau mau */}
      </View>
      </View>

      {/* Remember Me & Forgot Password */}
      <View style={styles.row}>
        <View style={styles.rememberRow}>
          <Checkbox
            value={remember}
            onValueChange={setRemember}
            color={remember ? "#4E0189" : undefined} // warna saat dicentang
            style={styles.checkbox}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.btnLoginText}>Login</Text>
      </TouchableOpacity>

      {/* Or With */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or With</Text>
        <View style={styles.line} />
      </View>

      {/* GitHub & GitLab */}
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtn}>
          <Image
            source={require("../../assets/images/fatimah/github.png")}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>GitHub</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Image
            source={require("../../assets/images/fatimah/gitlab.png")}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>GitLab</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don’t have an account ? </Text>
        <TouchableOpacity>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#999EA1",
    marginBottom: 20,
  },
  inputan:{
    paddingTop: 40,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: "600",
    color: "#4E0189",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 6,
  },
  rememberText: {
    fontSize: 14,
  },
  forgotPassword: {
    color: "#FB344F",
    fontSize: 14,
  },
  btnLogin: {
    backgroundColor: "#4E0189",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  btnLoginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#000000",
  },
  orText: {
    marginHorizontal: 8,
    fontSize: 14,
    color: "#999EA1",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  socialBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 5,
    justifyContent: "center",
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    resizeMode: "contain",
  },
  socialText: {
    fontSize: 14,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "auto",
  },
  footerText: {
    color: "#999EA1",
    fontSize: 14,
  },
  signUp: {
    color: "#4E0189",
    fontSize: 14,
    fontWeight: "600",
  },
});
