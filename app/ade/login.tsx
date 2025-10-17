import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Docu<Text style={{ color: "#4A5CFF" }}>Flex</Text>
      </Text>
      <Text style={styles.signIn}>Sign In</Text>

      {/* Input Email */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      {/* Input Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.or}>Or</Text>

      {/* Apple */}
      <TouchableOpacity style={styles.socialBtn}>
        <Image source={require("../../assets/images/apple.png")} style={styles.icon} />
        <Text style={styles.socialText}>Continue with Apple</Text>
      </TouchableOpacity>

      {/* Google */}
      <TouchableOpacity style={styles.socialBtn}>
        <Image source={require("../../assets/images/google.png")} style={styles.icon} />
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Facebook */}
      <TouchableOpacity style={styles.socialBtn}>
        <Image source={require("../../assets/images/facebook.png")} style={styles.icon} />
        <Text style={styles.socialText}>Continue with Facebook</Text>
      </TouchableOpacity>

      {/* Link ke Register */}
      <TouchableOpacity onPress={() => router.push("ade/register")}>
        <Text style={styles.create}>Create an Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#fff" },
  logo: { fontSize: 28, fontWeight: "bold", marginBottom: 5 },
  signIn: { fontSize: 18, marginBottom: 20 },
  input: { width: "100%", borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 12, marginBottom: 15 },
  forgot: { alignSelf: "flex-end", color: "#4A5CFF", marginBottom: 20 },
  button: { backgroundColor: "#4A5CFF", paddingVertical: 15, width: "100%", borderRadius: 6, marginBottom: 20 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  or: { marginBottom: 10 },
  socialBtn: { flexDirection: "row", alignItems: "center", width: "100%", borderWidth: 1, borderColor: "#ccc", padding: 12, borderRadius: 6, marginBottom: 10 },
  icon: { width: 20, height: 20, marginRight: 10 },
  socialText: { fontSize: 14, fontWeight: "500" },
  create: { marginTop: 20, color: "#4A5CFF", fontWeight: "bold" },
});
