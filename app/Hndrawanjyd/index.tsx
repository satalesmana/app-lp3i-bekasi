import React from "react";
import { View, StyleSheet, Image, Dimensions, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

/* === Tweakable constants biar persis seperti gambar === */
const LOGO_SIZE = Math.round(width * 0.34);      // ukuran logo (square)
const LOGO_TOP = Math.round(height * 0.20);      // jarak logo dari atas

const PLATE_SIZE = Math.round(width * 1.10);     // lebih kecil biar pas
const PLATE_BOTTOM = -Math.round(PLATE_SIZE * 0.18); // naik sedikit
const PLATE_RIGHT  = -Math.round(PLATE_SIZE * 0.15); // geser lebih ke kanan
const PLATE_ZOOM = 1.00;                         // zoom normal

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* LOGO (sudah termasuk teks) */}
      <Image
        source={require("../../assets/images/pizza.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Piring di pojok kanan-bawah (pakai masker lingkaran besar) */}
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
    backgroundColor: "#002407", // sesuai request
    alignItems: "center",
    justifyContent: "flex-start",
  },

  /* Logo center-ish dengan jarak dari atas seperti di mockup */
  logo: {
    position: "absolute",
    top: LOGO_TOP,
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    alignSelf: "center",
  },

  /* Mask lingkaran besar ditempel di pojok kanan-bawah */
  plateMask: {
    position: "absolute",
    width: PLATE_SIZE,
    height: PLATE_SIZE,
    bottom: PLATE_BOTTOM,
    right: PLATE_RIGHT,
    borderRadius: PLATE_SIZE / 2,
    overflow: "hidden",
  },

  /* Gambar di dalam mask */
  plateImage: {
    width: PLATE_SIZE * PLATE_ZOOM,
    height: PLATE_SIZE * PLATE_ZOOM,
  },
});
