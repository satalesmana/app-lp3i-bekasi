import React from "react";
import { router } from "expo-router";
import { 
  Image, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity 
} from "react-native";

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
        <TouchableOpacity style={styles.nextButton} onPress={()=>{router.push('/fatimah-azzahra/login')}}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} /> 
          <Text style={styles.dividerText}>Or With</Text>
          <View style={styles.divider} />
        </View>

        {/* Tombol login sosial */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png" }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>GitHub</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{ uri: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png" }}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>GitLab</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer teks Sign Up (selalu di bawah) */}
      <Text style={styles.footerText}>
        Don’t have an account? <Text style={styles.signUp}>Sign Up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between", // pisahkan atas & bawah
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
    marginTop: 30,
    alignSelf: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    marginLeft: 40,
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 25,
    marginLeft: 40,
    alignSelf: "flex-start",
  },
  nextButton: {
  backgroundColor: "#6C2DC7",
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 5,
  marginBottom: 20,
  width: 340,   
  alignItems: "center",
  alignSelf: "center",
},
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#666",
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
  footerText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  signUp: {
    color: "#6C2DC7",
    fontWeight: "600",
  },
});
