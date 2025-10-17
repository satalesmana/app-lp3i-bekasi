import { useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";

export default function VerificationScreen() {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < code.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (
      e.nativeEvent.key === "Backspace" &&
      code[index] === "" &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleConfirm = () => {
    const otp = code.join("");
    console.log("OTP:", otp);
    // router.push("/next-page") // arahkan kalau perlu
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {/* Title */}
        <Text style={styles.title}>Verification Code</Text>
        <Text style={styles.subtitle}>
          We have sent the verification code to your email address
        </Text>

        {/* OTP Input */}
        <View style={styles.inputRow}>
          {code.map((digit, index) => {
            const isActive =
              index === code.findIndex((c) => c === "");
            return (
              <TextInput
                key={index}
                ref={(ref) => (inputs.current[index] = ref)}
                style={[
                  styles.inputBox,
                  digit !== "" && styles.filledBox,
                  digit === "" && isActive && styles.activeBox,
                ]}
                value={digit}
                onChangeText={(text) =>
                  handleChange(text.replace(/[^0-9]/g, ""), index)
                }
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="numeric"
                maxLength={1}
                textAlign="center"
              />
            );
          })}
        </View>

        {/* Confirm Button */}
        <Pressable
          style={({ pressed }) => [
            styles.confirmButton,
            { opacity: pressed ? 0.8 : 1 },
          ]}
          onPress={handleConfirm}
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    padding: 15,
    position: "absolute",
    top: 10,
    left: 5,
    zIndex: 10,
  },
  card: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "left",
    color: "#111",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 40,
    textAlign: "left",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  inputBox: {
    width: 65,
    height: 65,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    fontSize: 22,
    fontWeight: "600",
    color: "#000",
    backgroundColor: "#fff",
  },
  activeBox: {
    borderColor: "#F47167", // warna orange/merah untuk active
  },
  filledBox: {
    borderColor: "#F47167",
  },
  confirmButton: {
    backgroundColor: "#F47167",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  confirmText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
