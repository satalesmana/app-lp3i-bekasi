import { useState } from "react";
import { router } from "expo-router";
import ButtonPurple from "./components/Mybutton";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import Checkbox from "expo-checkbox"; 
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from 'react-redux';
import { setUsers } from '../../store/reducer/userSlice';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [secure, setSecure] = useState(true);
  const dispatch = useDispatch();

  const SubmitLogin = ()=>{
          if(email==='fatim@gmail.com' && password === 'tes123'){
              dispatch(setUsers({
                  name: "Fatimah Azzahra",
                  email: "fatim@gmail.com",
                  gender: "Perempuan",
                  dateOfBirth: "08-01-2007",
                  address: "Ujung Harapan"
              }))
              router.replace("/fatimah-azzahra/home")
              return;
          }
          Alert.alert('Info', 'Login Gagal', [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
      }

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
          <View style={styles.passwordRow}>
            <TextInput
              style={styles.passwordInput}
              onChangeText={setPassword}
              value={password}
              placeholder="Please Enter Your Password"
              secureTextEntry={secure}
            />
            <TouchableOpacity
              onPress={() => setSecure(!secure)}
              style={styles.eyeBtn}
            >
              <Ionicons
                name={secure ? "eye-off" : "eye"}
                size={20}
                color="#999"
              />
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
            color={remember ? "#4E0189" : undefined} // warna saat dicentang
            style={styles.checkbox}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      {/* Regis Button */}
      <ButtonPurple
        label="Login"
        onPress={SubmitLogin}
      />

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
        <TouchableOpacity onPress={() => router.push("/fatimah-azzahra/signup")}>
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
  inputan: {
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
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 10,
  },
  eyeBtn: {
    padding: 6,
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
