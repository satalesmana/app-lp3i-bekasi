import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Background Clouds */}
      <View style={styles.cloudLeft}></View>
      <View style={styles.cloudRight}></View>

      {/* Title */}
      <Text style={styles.title}>Welcome To{"\n"}Shh!</Text>
      <Text style={styles.subtitle}>A Hub Where Whispers Echo Loudest</Text>

      {/* Sign up Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      {/* Login Text */}
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text style={styles.loginLink} onPress={() => navigation.navigate("Login")}>
          Login
        </Text>
      </Text>

      {/* Illustration (use local image or remote) */}
      <Image
        source={require("../../assets/images/splashimage.png")} // ganti dengan ilustrasi kamu
        style={styles.illustration}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9b59b6", // Warna ungu background
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  cloudLeft: {
    position: "absolute",
    top: 100,
    left: -40,
    width: 120,
    height: 80,
    backgroundColor: "#ecf0f1",
    borderRadius: 50,
  },
  cloudRight: {
    position: "absolute",
    top: 160,
    right: -40,
    width: 140,
    height: 90,
    backgroundColor: "#ecf0f1",
    borderRadius: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 80,
  },
  subtitle: {
    fontSize: 14,
    color: "#f5f5f5",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    color: "#fff",
    marginTop: 15,
    fontSize: 13,
  },
  loginLink: {
    fontWeight: "bold",
    color: "#fff",
    textDecorationLine: "underline",
  },
  illustration: {
    position: "absolute",
    bottom: 0,
    width: "90%",
    height: 180,
  },
});
