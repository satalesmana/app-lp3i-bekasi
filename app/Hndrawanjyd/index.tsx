import React, { useEffect } from "react";
import { View, StyleSheet, Image, Dimensions, StatusBar } from "react-native";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

const LOGO_SIZE = Math.round(width * 0.34);
const LOGO_TOP = Math.round(height * 0.20);

const PLATE_SIZE = Math.round(width * 1.10);
const PLATE_BOTTOM = -Math.round(PLATE_SIZE * 0.18);
const PLATE_RIGHT = -Math.round(PLATE_SIZE * 0.15);
const PLATE_ZOOM = 1.00;

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/Hndrawanjyd/login"); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Image
        source={require("../../assets/images/pizza.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.plateMask}>
        <Image
          source={require("../../assets/images/pizza1.png")}
          style={styles.plateImage}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002407",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    position: "absolute",
    top: LOGO_TOP,
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    alignSelf: "center",
  },
  plateMask: {
    position: "absolute",
    width: PLATE_SIZE,
    height: PLATE_SIZE,
    bottom: PLATE_BOTTOM,
    right: PLATE_RIGHT,
    borderRadius: PLATE_SIZE / 2,
    overflow: "hidden",
  },
  plateImage: {
    width: PLATE_SIZE * PLATE_ZOOM,
    height: PLATE_SIZE * PLATE_ZOOM,
  },
});
