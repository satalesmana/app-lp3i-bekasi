import { ButtonRegister } from "@/componets/myButton";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Register = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    // sementara alert, nanti bisa ditambah API register
    alert(`Account created!\nWelcome ${name}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Title */}
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subtitle}>
          Sign up to enjoy the feature of Revolutie
        </Text>

        {/* Name */}
        <View style={styles.inputWrapper}>
          {name !== "" && <Text style={styles.label}>Your Name</Text>}
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Date of Birth */}
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Date of Birth</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={{ color: dob ? "#000" : "#9ca3af" }}>
              {dob ? dob.toDateString() : "Select Date"}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
  <DateTimePicker
    value={dob}
    mode="date"
    display="default"
    onChange={(event: any, selectedDate?: Date) => {
      setShowDatePicker(false);
      if (selectedDate) {
        setDob(selectedDate);
          }
        }}
      />
    )}
    </View>

        {/* Email */}
        <View style={styles.inputWrapper}>
          {email !== "" && <Text style={styles.label}>Email</Text>}
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Password */}
        <View style={styles.inputWrapper}>
          {password !== "" && <Text style={styles.label}>Password</Text>}
          <View style={styles.passwordWrapper}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.iconWrapper}
            >
              <MaterialIcons
                name={showPassword ? "visibility-off" : "visibility"}
                size={22}
                color="#6b7280"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sign up button */}
        <ButtonRegister
            label="Sign up"
            onPress={()=>{}}
              />

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>

        {/* Google login */}
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleText}>Continue with Google</Text>
          <Image
            source={require("../../assets/images/google.png")}
            style={styles.googleIcon}
          />
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>
          Already have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => router.push("/Hafiizh/login")}
          >
            Sign in
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  card: {
    width: "100%",
    maxWidth: 380,
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111827",
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginBottom: 24,
  },
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    fontSize: 14,
  },
  iconWrapper: {
    paddingHorizontal: 12,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#d1d5db",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#232323",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d1d5db",
    paddingVertical: 12,
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 28,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
  googleText: {
    fontSize: 14,
    color: "#232323",
  },
  footer: {
    textAlign: "center",
    fontSize: 14,
    color: "#6b7280",
  },
  link: {
    color: "#2563eb",
    fontWeight: "500",
    textDecorationLine: "underline",
  },
});
