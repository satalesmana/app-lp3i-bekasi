import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AuthScreen() {
  return (
    <View style={styles.container}>

      {/* Ilustrasi */}
      <View style={styles.centerContent}>
        <Image
          source={require("../../assets/images/logo_20.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Tombol di bawah */}
      <View style={styles.bottomButtons}>
        {/* Register & Login sejajar */}
        <View style={styles.rowButtons}>
          <TouchableOpacity style={[styles.halfButton, styles.outlineButton]}
          onPress={() => router.push("/gema_satya_nugroho/registerPage")}>
            <Text style={[styles.buttonText, styles.outlineText]}>REGISTER</Text>
          </TouchableOpacity>

          {/* LOGIN dengan navigasi */}
          <TouchableOpacity
            style={[styles.halfButton, styles.filledButton]}
            onPress={() => router.push("/gema_satya_nugroho/loginPage")}  

          >
            <Text style={[styles.buttonText, styles.filledText]}>LOGIN</Text>
          </TouchableOpacity>
        </View>

        {/* Login dengan Google */}
        <TouchableOpacity style={[styles.fullButton, styles.outlineButton]}>
          <Text style={[styles.buttonText, styles.outlineText]}>
            LOGIN WITH GOOGLE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 500,
    marginBottom: 16,
  },
  brand: {
    fontSize: 18,
    fontWeight: "600",
    color: "#444",
    marginTop: 8,
  },
  bottomButtons: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  rowButtons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  halfButton: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  fullButton: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  outlineButton: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#141313ff",
  },
  outlineText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 16,
  },
  filledButton: {
    backgroundColor: "#1f8f53ff",
  },
  filledText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
  buttonText: {
    textAlign: "center",
  },
});
