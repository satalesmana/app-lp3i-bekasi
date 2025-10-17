import {useState} from "react";
import {Alert, Image, StyleSheet, Text, TextInput, View} from "react-native";
import {router} from "expo-router";
import {ButtonWarning} from "@/componets/myButton";
import { useDispatch } from 'react-redux';
import { setUsers } from '../../store/reducer/userSlice';

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onSubmitLogin = () => {
    if(email==='salsabila@gmail.com' && password === 'salsa123'){
      dispatch(setUsers({
        name: "Salsabila Nurul Hikmah",
        email: "salsabila@gmail.com",
        gender: "Wanita",
        dateOfBirth: "27-09-2005",
        address: "Ds.Tridaya Sakti"
      }))
      router.replace("/salsabila-nurul/home")
      return;
    }
    Alert.alert('Info', 'Login Gagal', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
    <View style={styles.container}>
      {/* --- Illustration --- */}
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/logo.png')}
        />
      </View>

      {/* --- Title --- */}
      <Text style={styles.title}>Login Details</Text>

      {/* --- Input fields --- */}
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Username , email & phone number"
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
      />

      {/* --- Forgot password --- */}
      <Text style={styles.forgotPassword}>Forgot Password ?</Text>

      {/* --- Login Button --- */}
      <ButtonWarning
        label="Login"
        onPress={onSubmitLogin}
        />

      {/* --- Divider --- */}
      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>Or Sign up With</Text>
        <View style={styles.line} />
      </View>

      {/* --- Social Login --- */}
      <View style={styles.socialContainer}>
        <Image style={styles.socialIcon} source={require('@/assets/images/google.png')} />
        <Image style={styles.socialIcon} source={require('@/assets/images/facebook.png')} />
        <Image style={styles.socialIcon} source={require('@/assets/images/group.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 150
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: 310,
    height: 187
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginTop: 12
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginTop: 8,
    color: "#000",
    fontSize: 13,
    fontWeight: "500"
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd"
  },
  dividerText: {
    marginHorizontal: 8,
    fontSize: 13,
    color: "#888"
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10
  }
});
