import { Image, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/logo-app.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D2063"
  }
});
