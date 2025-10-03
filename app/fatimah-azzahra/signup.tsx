import { useState } from "react";
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox"; 
import { Ionicons } from "@expo/vector-icons"; 

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Create an account</Text>
      <Text style={styles.subtitle}>Connect with your friends today!</Text>

      {/* Input Email */}
      <View style={styles.inputan}>
      <View style={styles.field}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Input Phone */}
      <View style={styles.field}>
        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.phoneRow}>
          <Text style={styles.prefix}>+62</Text>
          <View style={styles.line1} />
          <TextInput
            style={styles.phoneInput}
            onChangeText={setPhone}
            value={phone}
            placeholder="Enter your phonenumber"
            keyboardType="phone-pad"
          />
        </View>
      </View>

      {/* Input Password */}
      <View style={styles.field}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordRow}>
          <TextInput
            style={[styles.input, { flex: 1, borderWidth: 0 }]}
            onChangeText={setPassword}
            value={password}
            placeholder="Please Enter Your Password"
            secureTextEntry={secure}
          />
          <TouchableOpacity
            onPress={() => setSecure(!secure)}
            style={styles.eyeBtn}>
            <Ionicons
              name={secure ? "eye-off" : "eye"}
              size={20}
              color="#999"/>
          </TouchableOpacity>
        </View>
      </View>
      </View>

      {/* Remember Me & Forgot Password */}
      <View style={styles.row}>
        <View style={styles.rememberRow}>
          <Checkbox
            value={remember}
            onValueChange={setRemember}
            color={remember ? "#4E0189" : undefined}
            style={styles.checkbox}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={() => router.push("/fatimah-azzahra/signup")}
      >
        <Text style={styles.signUpBtnText}>Sign Up</Text>
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
        <Text style={styles.footerText}>Already have an account ? </Text>
        <TouchableOpacity onPress={() => router.push("/fatimah-azzahra/login")}>
          <Text style={styles.login}>Login</Text>
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
  inputan: {
    marginTop: 30
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
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  prefix: {
    fontSize: 14,
    marginRight: 8,
    color: "#555",
  },
  phoneInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 10,
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingRight: 10,
  },
  eyeBtn: {
    paddingHorizontal: 6,
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
  signUpBtn: {
    backgroundColor: "#4E0189",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 20,
  },
  signUpBtnText: {
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
  line1: {
    height:35,
    width: 1,
    backgroundColor: "#ccc",
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
  login: {
    color: "#4E0189",
    fontSize: 14,
    fontWeight: "600",
  },
});
