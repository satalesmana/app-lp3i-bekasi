import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  const router = useRouter(); 

  return (
    <View style={{ paddingTop: 40, flex: 1, backgroundColor: "#fff" }}>
      {}
      <View style={style.imageContainer}>
        <Image
          source={require("../../assets/images/welcomedayat.png")} 
          style={style.image}
        />
      </View>

      {}
      <View style={[style.container, style.containerHeroText]}>
        <Text style={style.welcomeText}>Welcome to Light</Text>
      </View>

      {}
      <View style={style.container}>
        <Pressable
          style={[style.btnPrimary, { marginTop: 40 }]}
          onPress={() => router.push("/dayat/register")} 
        >
          <Text style={style.btnText}>Create new account</Text>
        </Pressable>

        {}
        <Pressable onPress={() => router.push("/dayat/login")}>
          <Text style={style.linkText}>I already have an account</Text>
        </Pressable>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  containerHeroText: {
    marginTop: 30,
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  btnPrimary: {
    backgroundColor: "#0D6EFD",
    borderRadius: 8,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  linkText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 14,
    color: "#555",
  },
});
