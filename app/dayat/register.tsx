import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("Jhon");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("jhondoe@gmail.com");
  const [countryCode, setCountryCode] = useState("+33");
  const [phone, setPhone] = useState("3334586492");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const onContinue = () => {
    if (!agree) return;
    router.push("/dayat/login");
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        {/* Progress bar sederhana */}
        <View style={styles.progressRow}>
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
          <View style={styles.progressDot} />
        </View>

        <Text style={styles.title}>Create your account</Text>

        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="johndoe@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <View style={styles.row}>
          <View style={[styles.input, styles.smallInput]}>
            <TextInput
              value={countryCode}
              onChangeText={setCountryCode}
              placeholder="+33"
              style={styles.countryInput}
            />
          </View>

          <View style={[styles.input, styles.flexInput]}>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="Phone"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <Text style={styles.hint}>Looks Nice</Text>

        {}
        <View style={styles.checkboxRow}>
          <Pressable
            onPress={() => setAgree((v) => !v)}
            style={[
              styles.checkboxBox,
              agree && styles.checkboxBoxChecked,
            ]}
          >
            {agree && <Text style={styles.checkMark}>✓</Text>}
          </Pressable>

          <Text style={styles.checkboxText}>
            I certify that I am 18 years of age or older, and I agree to the{" "}
            <Text style={styles.link}>User Agreement</Text> and{" "}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.btnPrimary, !agree && styles.btnDisabled]}
          disabled={!agree}
          onPress={onContinue}
        >
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flexGrow: 1, backgroundColor: "#fff" },
  container: {
    padding: 20,
    paddingTop: 40,
  },
  progressRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 18,
  },
  progressDot: {
    width: 40,
    height: 4,
    backgroundColor: "#eee",
    borderRadius: 4,
    marginRight: 8,
  },
  progressDotActive: {
    backgroundColor: "#0D6EFD",
    width: 48,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 18,
  },
  label: {
    marginBottom: 6,
    color: "#222",
    fontSize: 13,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 14,
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
    alignItems: "center",
  },
  smallInput: {
    width: 100,
  },
  flexInput: {
    flex: 1,
  },
  countryInput: {
    padding: 0,
    fontSize: 14,
  },
  hint: {
    color: "green",
    marginBottom: 12,
    fontSize: 12,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 20,
  },
  checkboxBox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxBoxChecked: {
    backgroundColor: "#0D6EFD",
    borderColor: "#0D6EFD",
  },
  checkMark: {
    color: "#fff",
    fontWeight: "700",
  },
  checkboxText: {
    flex: 1,
    fontSize: 13,
    color: "#333",
    lineHeight: 18,
  },
  link: {
    color: "#0D6EFD",
    textDecorationLine: "underline",
  },
  btnPrimary: {
    height: 50,
    backgroundColor: "#0D6EFD",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  btnDisabled: {
    opacity: 0.6,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
