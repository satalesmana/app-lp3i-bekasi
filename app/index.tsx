import { router } from 'expo-router';
import { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Index() {
  const splashTimer = () => {
    setTimeout(() => {
      router.replace("./home")
    }, 3000)
  }

  useEffect(() => {
    splashTimer()
  })

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
