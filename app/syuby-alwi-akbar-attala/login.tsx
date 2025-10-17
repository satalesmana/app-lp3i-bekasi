import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Log in to Shh!</Text>

      {/* Google Login */}
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
          }}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Log in with Google</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerWrapper}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or log in with Email</Text>
        <View style={styles.divider} />
      </View>

      {/* Input Fields */}
      <TextInput
        placeholder="Username or Email"
        placeholderTextColor="#999"
        style={styles.input}
      />
      <View style={styles.passwordWrapper}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={[styles.input, { flex: 1, marginRight: 10 }]}
        />
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot?</Text>
        </TouchableOpacity>
      </View>

      {/* Signup Link */}
      <Text style={styles.signupText}>
        Don’t have an account?{" "}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate("Signup")}
        >
          Sign up
        </Text>
      </Text>

      {/* Illustration */}
      <Image
        source={require("../../assets/images/loginimage.png")} // ganti dengan ilustrasi kamu
        style={styles.illustration}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9b59b6", // warna ungu
    paddingHorizontal: 25,
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 40,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 30,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  dividerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#fff",
    fontSize: 12,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 14,
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgotText: {
    color: "#fff",
    fontSize: 13,
    textDecorationLine: "underline",
  },
  signupText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    fontSize: 13,
  },
  signupLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  illustration: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 200,
    alignSelf: "center",
  },
});
