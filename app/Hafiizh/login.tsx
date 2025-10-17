import { MaterialIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { setUsers } from "../../store/reducer/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmitLogin = ()=>{
          if(email==='Hafiizh.alfath33@gmail.com' && password === '123'){
              dispatch(setUsers({
                  name: "Muhammad Hafiizh Alfath",
                  email: "Hafiizh.alfath33@gmail.com",
                  gender: "Pria",
                  dateOfBirth: "12-12-2004",
                  address: "Los santos"
              }))
              router.replace("/Hafiizh/home")
              return;
          }
          Alert.alert('Info', 'Login Gagal', [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
      }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Title */}
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>
          Please login to continue to your account.
        </Text>

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

        {/* Checkbox */}
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={keepLoggedIn}
            onValueChange={setKeepLoggedIn}
            color={keepLoggedIn ? "#2563eb" : undefined}
          />
          <Text style={styles.checkboxLabel}>Keep me logged in</Text>
        </View>

        {/* Sign in button */}
        <TouchableOpacity style={styles.signInButton} onPress={onSubmitLogin}>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>

        {/* Google login */}
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleText}>Sign in with Google</Text>
          <Image
            source={require("../../assets/images/google.png")}
            style={styles.googleIcon}
          />
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>
          Need an account?{" "}
          <Text
            style={styles.link}
            onPress={() => router.push("/Hafiizh/register")}
          >
            Create one
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

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
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 14,
    color: "#000000",
  },
  signInButton: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 24,
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
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
