import { ButtonPrimary, ButtonSecondary } from "@/componets/myButton";
import { router } from "expo-router";
import { Button, Text, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/reducer/counterSlice";

export default function HomeScreen() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Halaman Home</Text>

      {/* Navigasi */}
      <View style={styles.card}>
        <Button
          onPress={() => router.push("/sata-lesmana")}
          title="Learn More"
          color="#841584"
        />

        <View style={styles.spacer} />

        <Button
          onPress={() => router.push("/ade-faqih")}
          title="UAS Ade"
          color="#2e0debff"
        />
      </View>

      {/* Counter */}
      <View style={styles.card}>
        <Text style={styles.counterTitle}>Counter</Text>

        <View style={styles.row}>
          <ButtonPrimary
            label="Increment"
            onPress={() => dispatch(increment())}
          />

          <ButtonSecondary
            label="Decrement"
            onPress={() => dispatch(decrement())}
          />
        </View>

        <Text style={styles.count}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, // android shadow
  },

  spacer: {
    height: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },

  counterTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  count: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
  },
});
