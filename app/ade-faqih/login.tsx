import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { supabase } from "../../lib/supabase";
import { setUsers } from "../../store/reducer/userSlice";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmitLogin = async () => {
    const { error, data } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      Alert.alert(error.message);
      return;
    }

    dispatch(
      setUsers({
        email: data.user?.email,
      })
    );

    router.replace("/ade-faqih/(main)");
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

      {/* Hero Text */}
      <View style={styles.hero}>
        <Text style={styles.welcome}>Welcome back 👋</Text>
        <Text style={styles.subtitle}>Login to your account</Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Pressable style={styles.loginButton} onPress={onSubmitLogin}>
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
      </View>

      {/* Forgot */}
      <Text style={styles.forgot}>Forgot Password?</Text>

      {/* Social / Decoration */}
      <View style={styles.iconRow}>
        <Image
          style={styles.icon}
          source={require("@/assets/images/logo-app.png")}
        />
        <Image
          style={styles.icon}
          source={require("@/assets/images/logo-app.png")}
        />
        <Image
          style={styles.icon}
          source={require("@/assets/images/logo-app.png")}
        />
      </View>

      {/* Register */}
      <View style={styles.register}>
        <Text>Don’t have an account?</Text>
        <Button
          title="Register"
          onPress={() => router.push("/sata-lesmana/register")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 50,
  },

  logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },

  hero: {
    marginTop: 30,
  },

  welcome: {
    fontSize: 26,
    fontWeight: "800",
  },

  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },

  form: {
    marginTop: 30,
  },

  input: {
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fafafa",
    marginBottom: 15,
  },

  loginButton: {
    backgroundColor: "#0D2063",
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  loginText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  forgot: {
    textAlign: "center",
    marginTop: 25,
    color: "#555",
  },

  iconRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginTop: 20,
  },

  icon: {
    width: 36,
    height: 36,
  },

  register: {
    marginTop: 25,
    alignItems: "center",
  },
});
