import { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [number, setNumber] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Login 👤</Text>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.headerImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.subTitle}>Welcome back, Rohit Thakur</Text>
      </View>

      {/* Gambar ilustrasi */}
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Form */}
      <Text style={styles.label}>Enter Your Mobile Number</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Number"
        keyboardType="phone-pad"
        value={number}
        onChangeText={setNumber}
      />

      <TouchableOpacity>
        <Text style={styles.changeText}>Change Number ?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or Login with</Text>

      {/* Tombol Google */}
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
          }}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Google</Text>
      </TouchableOpacity>

      {/* Sign Up */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>You Don’t have an account ?</Text>
        <TouchableOpacity>
          <Text style={styles.signupLink}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // teks kiri, gambar kanan
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  headerImage: {
    width: 35,
    height: 35,
  },
  subTitle: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  image: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#E76F51",
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 5,
  },
  changeText: {
    alignSelf: "flex-end",
    fontSize: 12,
    color: "#888",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#E76F51",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    marginBottom: 10,
    color: "#555",
  },
  googleButton: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    fontSize: 14,
    fontWeight: "500",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupText: {
    fontSize: 13,
    color: "#444",
  },
  signupLink: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#E76F51",
  },
});
