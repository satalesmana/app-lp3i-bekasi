import { router } from "expo-router";
import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import { useDispatch } from "react-redux";
import { setUsers } from "../../store/reducer/userSlice";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmitLogin = () => {
    if (email === "ade@gmail.com" && password === "ade123") {
      dispatch(
        setUsers({
          name: "Ade Faqih",
          email: "ade@gmail.com",
          gender: "Pria",
          dateOfBirth: "26-10-2004",
          address: "Dimana geh",
        })
      );
      router.replace("/ade/home");
      return;
    }
    Alert.alert("Info", "Login Gagal", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/logo-app.png")}
          style={styles.logo}
        />
      </View>

      {/* Welcome Text */}
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Login to your account</Text>

      {/* Input Fields */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable style={styles.loginBtn} onPress={onSubmitLogin}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Social Login */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialBtn}>
          <Image
            source={require("@/assets/images/apple.png")}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Image
            source={require("@/assets/images/google.png")}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialBtn}>
          <Image
            source={require("@/assets/images/facebook.png")}
            style={styles.icon}
          />
          <Text style={styles.socialText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Register Text */}
      <Text style={styles.registerText}>
        Don’t have an account?{" "}
        <Text
          style={styles.signUp}
          onPress={() => router.push("/auth/register")}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7f9",
    paddingHorizontal: 25,
    paddingTop: 60,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#2c3e50",
    marginBottom: 4,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 13,
    color: "#777",
    marginBottom: 30,
  },
  form: {
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  loginBtn: {
    backgroundColor: "#7b42f6",
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 5,
  },
  loginText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  forgotPassword: {
    textAlign: "center",
    color: "#7b42f6",
    marginVertical: 20,
    fontWeight: "500",
  },
  socialContainer: {
    marginTop: 10,
  },
  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  socialText: {
    fontSize: 14,
    fontWeight: "500",
  },
  registerText: {
    textAlign: "center",
    marginTop: 20,
    color: "#333",
  },
  signUp: {
    color: "#7b42f6",
    fontWeight: "600",
  },
});
