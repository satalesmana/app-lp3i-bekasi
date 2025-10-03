import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  onPress: () => void;
  label: string;
}

export default function ButtonPurple(props: Props) {
  return (
    <View>
      <TouchableOpacity style={styles.nextButton} onPress={props.onPress}>
        <Text style={styles.btnLabel}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: "#4E0189",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  btnLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
