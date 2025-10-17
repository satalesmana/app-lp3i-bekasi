import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 18 }}>←</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Register Account</Text>

      {/* Lock Icon */}
      <View style={styles.lockContainer}>
        <Image
          source={require("../../assets/images/lock.png")} // ganti dengan ikon lock di assets
          style={{ width: 50, height: 50 }}
        />
      </View>

      {/* Subtitle */}
      <Text style={styles.heading}>Create new account</Text>
      <Text style={styles.subText}>
        your new password must be different to previously used Passwords.
      </Text>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>New Password*</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your new password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirm Password*</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* Rules */}
      <View style={styles.rules}>
        <Text style={styles.ruleText}>✔ Must be at least 8 characters</Text>
        <Text style={styles.ruleText}>✔ Must contain one special character</Text>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff7f9",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backBtn: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    color: "#2c3e50",
  },
  lockContainer: {
    alignSelf: "center",
    backgroundColor: "#f3e9f9",
    padding: 20,
    borderRadius: 50,
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
  },
  subText: {
    fontSize: 13,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  rules: {
    marginBottom: 20,
  },
  ruleText: {
    fontSize: 13,
    color: "#555",
    marginBottom: 5,
  },
  submitBtn: {
    backgroundColor: "#7b42f6",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
