import { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    Alert.alert("Info", "Login Success", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <View style={style.container}>
      {}
      <Pressable style={style.closeBtn} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 20 }}>×</Text>
      </Pressable>

      <Text style={style.title}>Login to light</Text>

      {}
      <Text style={style.label}>Email</Text>
      <TextInput
        style={style.input}
        onChangeText={setEmail}
        value={email}
        placeholder="johndoe@gmail.com"
        keyboardType="email-address"
      />

      {}
      <Text style={style.label}>Password</Text>
      <TextInput
        style={style.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      {}
      <View style={style.rowBetween}>
        <Pressable>
          <Text style={style.link}>Forgot password</Text>
        </Pressable>
        <Pressable>
          <Text style={style.link}>Privacy policy</Text>
        </Pressable>
      </View>

      {}
      <Pressable style={style.btnLogin} onPress={onSubmitLogin}>
        <Text style={style.btnLoginText}>Login</Text>
      </Pressable>

      {}
      <Pressable style={style.btnWallet}>
        <Text style={style.btnWalletText}>Connect to a wallet</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  closeBtn: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: "#333",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  link: {
    color: "#0D6EFD",
    fontSize: 14,
  },
  btnLogin: {
    backgroundColor: "#0D6EFD",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  btnLoginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  btnWallet: {
    borderWidth: 1,
    borderColor: "#ccc",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btnWalletText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
});
