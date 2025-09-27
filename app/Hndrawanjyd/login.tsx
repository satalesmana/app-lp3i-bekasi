import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Log in</Text>

      {/* Email Input */}
      <TextInput 
        placeholder="Email Address"
        placeholderTextColor="#999"
        style={styles.input}
      />

      {/* Password Input */}
      <View style={styles.passwordContainer}>
        <TextInput 
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
        />
        <TouchableOpacity 
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon 
            name={showPassword ? "eye-off-outline" : "eye-outline"} 
            size={22} 
            color="#666" 
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      {/* Signup */}
      <Text style={styles.signupText}>
        Don’t have an account? <Text style={styles.signupLink}>Sign up</Text>
      </Text>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      {/* Google Button */}
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>

      {/* Facebook Button */}
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.facebookText}>Sign in with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const PRIMARY_COLOR = "#002407"; // Warna utama kamu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
    color: "#000",
  },
  input: {
    backgroundColor: "#fef5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#eee",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fef5f5",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 15,
  },
  forgotPassword: {
    color: PRIMARY_COLOR,
    textAlign: "right",
    marginBottom: 20,
    fontWeight: "500",
  },
  loginButton: {
    backgroundColor: PRIMARY_COLOR,
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  signupText: {
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  signupLink: {
    color: PRIMARY_COLOR,
    fontWeight: "600",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#666",
  },
  socialButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  googleText: {
    color: "#000",
    fontWeight: "500",
  },
  facebookText: {
    color: "#000",
    fontWeight: "500",
  },
});
