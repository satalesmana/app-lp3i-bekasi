import React from "react";
import { router } from "expo-router";
import { 
  Image, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity 
} from "react-native";
import ButtonPurple from "./components/Mybutton";

export default function FatimahIndex() {
  return (
    <View style={styles.container}>
      {/* Bagian atas konten */}
      <View>
        {/* Logo */}
        <Image
          source={require("../../assets/images/fatimah/logo.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Teks sambutan */}
        <Text style={styles.title}>Hi, Welcome to appCar! 👋</Text> 
        <Text style={styles.subtitle}>Hello again, you’ve been missed!</Text>

        {/* Tombol Next */}
        <ButtonPurple
                 label="Next"
                 onPress={()=> router.push("/fatimah-azzahra/login")}
                 />
        {/* line */}
       <View style={styles.orContainer}>
               <View style={styles.line} />
               <Text style={styles.orText}>Or With</Text>
               <View style={styles.line} />
        </View>

        {/* Tombol login sosial */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../../assets/images/fatimah/github.png")}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require("../../assets/images/fatimah/gitlab.png")}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>GitLab</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer teks Sign Up (selalu di bawah) */}
         <View style={styles.footer}>
              <Text style={styles.footerText}>Don’t have an account ? </Text>
              <TouchableOpacity>
                <Text style={styles.signUp}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  image: {
    width: 352,
    height: 330,
    marginBottom: 50,
    marginTop: 20,
    alignSelf: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 10,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: 14,
    color: "#999EA1",
    marginBottom: 25,
    marginLeft: 10,
    alignSelf: "flex-start",
  },
    orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#000000",
  },
  orText: {
    marginHorizontal: 8,
    fontSize: 14,
    color: "#999EA1",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 25,
    alignSelf: "center",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  socialText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
   footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "auto",
  },
  footerText: {
    color: "#999EA1",
    fontSize: 14,
  },
  signUp: {
    color: "#4E0189",
    fontSize: 14,
    fontWeight: "600",
  },
});
