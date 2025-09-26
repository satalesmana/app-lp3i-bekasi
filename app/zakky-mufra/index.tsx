import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/travel.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Explore the world easily</Text>
        <Text style={styles.subtitle}>To your desire</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.indicatorWrapper}>
          <View style={[styles.indicator, styles.active]} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.replace("/zakky-mufra/login")} // pindah ke login.tsx
        >
          <Text style={styles.nextArrow}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: "80%",
    height: 250,
    marginBottom: 30,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginTop: 5,
    textAlign: "center",
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  indicatorWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ddd",
    marginHorizontal: 3,
  },
  active: {
    width: 16,
    backgroundColor: "tomato",
  },
  nextButton: {
    backgroundColor: "#000",
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  nextArrow: {
    fontSize: 20,
    color: "#fff",
  },
});
