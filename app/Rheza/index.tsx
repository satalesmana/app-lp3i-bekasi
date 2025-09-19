import { Image, StyleSheet, View, Text, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrap}>
        <Image
          source={require("../../assets/images/logosplash.png")}
          style={[styles.image, { transform: [{ translateY: 24 }] }]}
        />
      </View>

      <Text style={styles.text}>Explore the world easily</Text>
      <Text style={styles.text2}>To your desire</Text>

      <View style={styles.boxRow}>
        <View style={[styles.box, { backgroundColor: "#2B2D42" }]} />
        <View style={[styles.box, { backgroundColor: "#706CF6" }]} />
        <View style={[styles.box, { backgroundColor: "#706CF6", marginRight: 0 }]} />

        <Pressable style={styles.nextBtn} onPress={() => console.log("Next pressed")}>
          <Image
            source={require("../../assets/images/Next Button.png")}
            style={styles.nextImg}
          />
        </Pressable>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fff",
  },

  imageWrap: {
    height: 250,
    width: 350, 
    alignItems: "center", 
    justifyContent: "center",
  },

  image: {
    width: 350, 
    height: 250, 
    resizeMode: "contain",
  },

  text: {
    fontSize: 50, 
    fontWeight: "bold", 
    marginTop: 90, 
    marginLeft: 20, 
    color: "#111",
  },

  text2: {
    marginRight: 170, 
    marginTop: 10, 
    fontSize: 30, 
    color: "#444",
  },

  boxRow: {
    width: "100%", 
    flexDirection: "row", 
    alignItems: "center",
    marginTop: 70, 
    paddingLeft: 20, 
    marginLeft: 20,
  },

  box: { 
    width: 20, 
    height: 8.5, 
    borderRadius: 3, 
    marginRight: 8 
  },

  nextBtn: {
    position: "absolute",
    right: 50,
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: "hidden",
  },
  nextImg: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
