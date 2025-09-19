import { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLogin = () => {
    Alert.alert("Info", "Login Gagal", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <View style={{ paddingTop: 40 }}>
      <View style={[style.container, style.containerHeroText]}>
        <Text style={style.welcomeText}>LOGIN</Text>
      </View>

      <View style={style.container}>
        <TextInput
          style={style.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />

        <TextInput
          style={style.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
        />

        <Pressable
          onPress={onSubmitLogin}
          style={[style.btnLogin, { marginTop: 20 }]}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </Pressable>
      </View>

      <Text style={style.forgotPassword}>Forgot Password ?</Text>

      <View style={style.imageLoginContainer}>
        <Image
          style={style.imageLoagin}
          source={require("@/assets/images/logo-app.png")}
        />
        <Image
          style={style.imageLoagin}
          source={require("@/assets/images/logo-app.png")}
        />
        <Image
          style={style.imageLoagin}
          source={require("@/assets/images/logo-app.png")}
        />
      </View>

      <Text style={{ marginTop: 20, textAlign: "center" }}>
        Don’t have an account ? Sign Up
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20
  },
  containerHeroText: {
    marginTop: 40,
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "800",
  },
  subText: {
    fontSize: 13,
  },
  input: {
    height: 57,
    paddingLeft: 12,
    borderWidth: 1,
    marginTop: 12,
    borderRadius: 10,
  },
  btnLogin: {
    backgroundColor: "#0D2063",
    borderRadius: 8,
    height: 37,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  forgotPassword: {
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  imageLoginContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  imageLoagin: {
    width: 35,
    height: 35,
  },
});
