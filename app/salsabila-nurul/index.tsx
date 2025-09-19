import { Image, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Text Welcome */}
      <Text style={styles.title}>Welcome to our app</Text>

      {/* Gambar */}
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Tombol Start */}
      <TouchableOpacity style={styles.button}
      onPress={()=>{router.push('/salsabila-nurul/login')}}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 125,
    borderRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
